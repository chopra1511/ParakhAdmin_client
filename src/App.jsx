import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import loading from "/assets/loading.gif";

import Layout from "./components/Dashboard/Layout/Layout";
import OrderDetails from "./components/Dashboard/Orders/OrderDetails";

// Lazy load pages
const DashboardPage = lazy(() =>
  import("./components/Dashboard/Dashboard/DashboardPage")
);
const Orders = lazy(() => import("./components/Dashboard/Orders/Orders"));
const Transactions = lazy(() =>
  import("./components/Dashboard/Transactions/Transactions")
);
const MySite = lazy(() => import("./components/Dashboard/MySite/MySite"));
const Products = lazy(() =>
  import("./components/Dashboard/Products/Products/Products")
);
const AddProducts = lazy(() =>
  import("./components/Dashboard/Products/AddProducts/AddProducts")
);
const EditProduct = lazy(() =>
  import("./components/Dashboard/Products/EditProducts/EditProduct")
);

function App() {
  const loadingPic = (
    <div className="h-screen flex flex-col justify-center items-center">
      <img src={loading} alt="Loading..." className="w-24" />
    </div>
  );

  const router = createBrowserRouter([
    {
      path: "/ParakhAdmin_client",
      element: <Layout />, // Wrap with Layout
      children: [
        {
          path: "/ParakhAdmin_client",
          element: (
            <Suspense fallback={loadingPic}>
              <DashboardPage />
            </Suspense>
          ),
        },
        {
          path: "/ParakhAdmin_client/products",
          element: (
            <Suspense fallback={loadingPic}>
              <Products />
            </Suspense>
          ),
        },
        {
          path: "/ParakhAdmin_client/edit-product",
          element: (
            <Suspense fallback={loadingPic}>
              <EditProduct />
            </Suspense>
          ),
        },
        {
          path: "/ParakhAdmin_client/add-product",
          element: (
            <Suspense fallback={loadingPic}>
              <AddProducts />
            </Suspense>
          ),
        },
        {
          path: "/ParakhAdmin_client/orders",
          element: (
            <Suspense fallback={loadingPic}>
              <Orders />
            </Suspense>
          ),
        },
        {
          path: "/ParakhAdmin_client/order-details",
          element: (
            <Suspense fallback={loadingPic}>
              <OrderDetails />
            </Suspense>
          ),
        },
        {
          path: "/ParakhAdmin_client/transactions",
          element: (
            <Suspense fallback={loadingPic}>
              <Transactions />
            </Suspense>
          ),
        },
        {
          path: "/ParakhAdmin_client/my-site",
          element: (
            <Suspense fallback={loadingPic}>
              <MySite />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
