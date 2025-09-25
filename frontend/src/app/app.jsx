import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./home/HomePage";
import StorePage from "./store/StorePage";
import Cart from "./cart/Cart";
import { useState } from "react";

const dummyItems = [
  {
    variant_id: 3042,
    product_name: "Acorn Knit Cap",
    price: 880,
    color: "brown",
    filename: "https://images.cattoviz.com/Headwear/CapHatAcorn3.png",
    quantity: 1,
  },
  {
    variant_id: 3047,
    product_name: "Acorn Knit Cap",
    price: 880,
    color: "beige",
    filename: "https://images.cattoviz.com/Headwear/CapHatAcorn5.png",
    quantity: 2,
  },
];

export default function App() {
  const [cartItems, setCartItems] = useState(dummyItems);

  const handleAdjustItems = (item) => {
    const newItems = cartItems.flatMap((current) =>
      current.variant_id === item.variant_id ? item : current,
    );
    setCartItems(newItems);
    console.log(item);
  };

  const handleRemoveItems = (item) => {
    console.log(item);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "store",
      element: <StorePage handleAddItem={handleAdjustItems} />,
    },
    {
      path: "cart",
      element: (
        <Cart
          cartItems={cartItems}
          handleAdjustItems={handleAdjustItems}
          handleRemoveItems={handleRemoveItems}
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
