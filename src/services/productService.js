const API_URL = "https://fakestoreapi.com/products";

export const categories = [
  {
    slug: "electronics",
    name: "Електроніка",
    description: "Технології для роботи, відпочинку та щоденних справ.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "jewelry",
    name: "Прикраси",
    description: "Акценти, які додають образу характеру.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "mens-clothing",
    name: "Чоловічий одяг",
    description: "Речі для зручного та виразного стилю.",
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "womens-clothing",
    name: "Жіночий одяг",
    description: "Продумані деталі для вашого гардероба.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
  },
];

const categorySlugs = {
  electronics: "electronics",
  jewelery: "jewelry",
  "men's clothing": "mens-clothing",
  "women's clothing": "womens-clothing",
};

export const getProductCategory = (product) =>
  categories.find(
    (category) => category.slug === categorySlugs[product.category],
  ) || categories[0];

const normalizeProduct = (product) => ({
  ...product,
  body: product.description,
  price: Number(product.price).toFixed(2),
});

export async function fetchProducts(productId, signal) {
  const response = await fetch(
    productId ? `${API_URL}/${productId}` : API_URL,
    { signal },
  );
  if (!response.ok) throw new Error("Не вдалося завантажити каталог");

  const data = await response.json();
  return (Array.isArray(data) ? data : [data]).map(normalizeProduct);
}
