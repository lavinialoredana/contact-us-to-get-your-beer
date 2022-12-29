import { createBrowserRouter } from "react-router-dom";
import OrdersProvider from "../context/OrdersProvider";
import App from "../pages/AppPage";
import ErrorPage from "../pages/ErrorPage";
import Orders from "../pages/OrdersPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <OrdersProvider>
        <App />
      </OrdersProvider>
    ),
    errorPageElement: <ErrorPage />,
  },
  {
    path: "/orders",
    element: (
      <OrdersProvider>
        <Orders />
      </OrdersProvider>
    ),
    errorPageElement: <ErrorPage />,
  },
]);

export default appRouter;
