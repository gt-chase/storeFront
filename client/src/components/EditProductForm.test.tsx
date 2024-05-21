import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import EditProductForm from "./EditProductForm";
import { Product } from "../types";

const mockProduct: Product = {
  _id: "123",
  title: "Kindle",
  price: 50,
  quantity: 10,
};

describe("EditProductForm", () => {
  it("displays the current product details", () => {
    render(
      <EditProductForm
        {...mockProduct}
        onToggleEdit={vi.fn()}
        onUpdateProduct={vi.fn()}
      />
    );

    expect(screen.getByLabelText(/name/i)).toHaveValue(mockProduct.title);
    expect(screen.getByLabelText(/price/i)).toHaveValue(mockProduct.price);
    expect(screen.getByLabelText(/quantity/i)).toHaveValue(
      mockProduct.quantity
    );
  });
  it("updates input fields", async () => {
    render(
      <EditProductForm
        {...mockProduct}
        onToggleEdit={vi.fn()}
        onUpdateProduct={vi.fn()}
      />
    );

    const titleInput = screen.getByLabelText(/name/i);
    const priceInput = screen.getByLabelText(/price/i);
    const quantityInput = screen.getByLabelText(/quantity/i);

    await userEvent.clear(titleInput);
    await userEvent.clear(priceInput);
    await userEvent.clear(quantityInput);

    await userEvent.type(titleInput, "New Product");
    await userEvent.type(priceInput, "10");
    await userEvent.type(quantityInput, "5");

    expect(titleInput).toHaveValue("New Product");
    expect(priceInput).toHaveValue(10);
    expect(quantityInput).toHaveValue(5);
  });
});
