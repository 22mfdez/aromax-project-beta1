import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import Root from "./routes/Root.jsx";
import ProductsPage from "./routes/ProductsPage.jsx";
import Personalize from "./routes/Personalize.jsx";
import App from "./App.jsx";
import "rsuite/dist/rsuite.min.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/productos",
        element: <ProductsPage />,
      },
      {
        path: "/personalizar",
        element: <Personalize />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <RouterProvider router={router} />
  </NextUIProvider>
);
