import {
  categories,
  fetchProducts,
  getProductCategory,
} from "./productService";

describe("productService", () => {
  afterEach(() => jest.restoreAllMocks());

  it("maps every API category to a local category", () => {
    expect(getProductCategory({ category: "electronics" }).slug).toBe(
      "electronics",
    );
    expect(getProductCategory({ category: "jewelery" }).slug).toBe("jewelry");
    expect(getProductCategory({ category: "men's clothing" }).slug).toBe(
      "mens-clothing",
    );
    expect(getProductCategory({ category: "women's clothing" }).slug).toBe(
      "womens-clothing",
    );
  });

  it("falls back to electronics for an unknown category", () => {
    expect(getProductCategory({ category: "unknown" })).toEqual(categories[0]);
  });

  it("fetches and normalizes a list of products", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => [{ id: 1, price: 12.5, description: "A product" }],
    });

    await expect(fetchProducts(undefined, "signal")).resolves.toEqual([
      { id: 1, price: "12.50", description: "A product", body: "A product" },
    ]);
    expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.com/products", {
      signal: "signal",
    });
  });

  it("normalizes a single product and rejects failed responses", async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({ id: 2, price: 19.9, description: "One product" }),
    });

    await expect(fetchProducts(2, undefined)).resolves.toEqual([
      {
        id: 2,
        price: "19.90",
        description: "One product",
        body: "One product",
      },
    ]);

    global.fetch.mockResolvedValueOnce({ ok: false });
    await expect(fetchProducts(2, undefined)).rejects.toThrow(
      "Не вдалося завантажити каталог",
    );
  });
});
