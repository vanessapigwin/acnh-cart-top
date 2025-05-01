import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Homepage from './app/home/HomePage'
import StorePage from './app/store/StorePage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "store",
    element: <StorePage />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
