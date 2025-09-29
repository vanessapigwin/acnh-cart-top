import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import CartItem from "../../src/components/cartItem/CartItem";

describe("Positive case", () => {
  it("data is valid, it should have required elements", () => {
    const data = {
      variant_id: 1,
      product_name: "Red Shirt",
      price: 100,
      color: "Red",
      quantity: 2,
      filename: "red-shirt.png",
    };
    const mockHandler = vi.fn();

    render(<CartItem item={data} handleChangeOrders={mockHandler} />);
    expect(screen.getByText("Red Shirt")).toBeDefined();
    expect(screen.getByText("100 bells")).toBeDefined();
    expect(screen.getByText("Color: Red")).toBeDefined();
    expect(screen.getByText("Quantity:")).toBeDefined();
    expect(screen.getByRole("spinbutton")).toHaveDisplayValue(2);
    expect(screen.getByText("Subtotal: 200 bells")).toBeDefined();
  });

  it("adjusting the knob changes the item subtotal", () => {
    const data = {
      variant_id: 2,
      product_name: "Cool Shorts",
      price: 100,
      color: "Black",
      quantity: 1,
      filename: "cool.png",
    };
    const mockHandler = vi.fn();

    render(<CartItem item={data} handleChangeOrders={mockHandler} />);
    expect(screen.getByRole("spinbutton")).toHaveDisplayValue(1);
    expect(screen.getByText("Subtotal: 100 bells")).toBeDefined();

    fireEvent.change(screen.getByRole("spinbutton"), { target: { value: 2 } });
    expect(screen.getByRole("spinbutton")).toHaveDisplayValue(2);
    expect(screen.getByText("Subtotal: 200 bells")).toBeDefined();
  });

  it("when quantity is zero, nothing is rendered", () => {
    const data = {
      variant_id: 3,
      product_name: "Skirt",
      price: 100,
      color: "Blue",
      quantity: 1,
      filename: "skirt.png",
    };
    const mockHandler = vi.fn();

    render(<CartItem item={data} handleChangeOrders={mockHandler} />);
    expect(screen.getByRole("spinbutton")).toHaveDisplayValue(1);
    expect(screen.getByText("Subtotal: 100 bells")).toBeDefined();

    fireEvent.change(screen.getByRole("spinbutton"), { target: { value: 0 } });
    expect(screen.queryByText("Blue")).toBeNull();
  });
});
