import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./home/HomePage";
import StorePage from "./store/StorePage";
import Cart from "./cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "store",
    element: <StorePage />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
