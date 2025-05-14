import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./home/HomePage";
import StorePage from "./store/StorePage";
import Cart from "./cart/Cart";
import { useState } from "react";


export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "store",
      element: <StorePage handleAddCart={setCartItems}/>,
    },
    {
      path: "cart",
      element: <Cart cartItems={cartItems} />,
    },
  ]);

  return <RouterProvider router={router} />;
}
