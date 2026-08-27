import { fireEvent, render, screen } from "@testing-library/react";
import ProductFilter from "./ProductFilter";

const categories = [
  { slug: "electronics", name: "Електроніка" },
  { slug: "jewelry", name: "Прикраси" },
];

describe("ProductFilter", () => {
  it("renders search and category controls", () => {
    render(
      <ProductFilter
        search=""
        onSearchChange={jest.fn()}
        categorySlug="all"
        onCategoryChange={jest.fn()}
        categories={categories}
      />,
    );

    expect(screen.getByLabelText("Пошук товару")).toBeInTheDocument();
    expect(screen.getByLabelText("Категорія")).toBeInTheDocument();
    expect(screen.getByText("Усі категорії")).toBeInTheDocument();
  });

  it("calls handlers when filters change", () => {
    const onSearchChange = jest.fn();
    const onCategoryChange = jest.fn();
    render(
      <ProductFilter
        search=""
        onSearchChange={onSearchChange}
        categorySlug="all"
        onCategoryChange={onCategoryChange}
        categories={categories}
      />,
    );

    fireEvent.change(screen.getByLabelText("Пошук товару"), {
      target: { value: "phone" },
    });
    fireEvent.mouseDown(screen.getByRole("combobox"));
    fireEvent.click(screen.getByRole("option", { name: "Електроніка" }));

    expect(onSearchChange).toHaveBeenCalledWith("phone");
    expect(onCategoryChange).toHaveBeenCalledWith("electronics");
  });
});
