import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import loading from "/assets/loading.gif";

import Layout from "./components/Dashboard/Layout/Layout";

// Lazy load pages
const HomePage = lazy(() =>
  import("./components/Dashboard/Dashboard/HomePage")
);
const OrderDetails = lazy(() =>
  import("./components/Dashboard/Orders/OrderDetails")
);
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

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />, // Wrap with Layout
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={loadingPic}>
                <HomePage />
              </Suspense>
            ),
          },
          {
            path: "dashboard",
            element: (
              <Suspense fallback={loadingPic}>
                <DashboardPage />
              </Suspense>
            ),
          },
          {
            path: "products",
            element: (
              <Suspense fallback={loadingPic}>
                <Products />
              </Suspense>
            ),
          },
          {
            path: "edit-product",
            element: (
              <Suspense fallback={loadingPic}>
                <EditProduct />
              </Suspense>
            ),
          },
          {
            path: "add-product",
            element: (
              <Suspense fallback={loadingPic}>
                <AddProducts />
              </Suspense>
            ),
          },
          {
            path: "orders",
            element: (
              <Suspense fallback={loadingPic}>
                <Orders />
              </Suspense>
            ),
          },
          {
            path: "order-details",
            element: (
              <Suspense fallback={loadingPic}>
                <OrderDetails />
              </Suspense>
            ),
          },
          {
            path: "transactions",
            element: (
              <Suspense fallback={loadingPic}>
                <Transactions />
              </Suspense>
            ),
          },
          {
            path: "my-site",
            element: (
              <Suspense fallback={loadingPic}>
                <MySite />
              </Suspense>
            ),
          },
        ],
      },
    ],
    {
      basename: "/ParakhAdmin_client",
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
