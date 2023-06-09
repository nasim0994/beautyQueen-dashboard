import { createBrowserRouter } from "react-router-dom";
import Main from "./../Layout/Main";
import ProductsList from "./../Pages/ProductsList/ProductsList";
import AddProduct from "./../Pages/AddProduct/AddProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/dashboard",
        element: <Main />,
      },
      {
        path: "/ecommerce/products/allProducts",
        element: <ProductsList />,
      },
      {
        path: "/ecommerce/products/addProduct",
        element: <AddProduct />,
      },
    ],
  },
]);
