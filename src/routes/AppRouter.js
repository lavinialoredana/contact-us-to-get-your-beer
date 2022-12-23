import {createBrowserRouter} from "react-router-dom";
import App from "../pages/AppPage";
import ErrorPage from "../pages/AppPage/ErrorPage";
import Orders from "../pages/OrdersPage";


const appRouter= createBrowserRouter( [
    {
        path:"/",
        element: <App/>,
        errorPageElement: <ErrorPage/>,
    },
    {
        path: "/orders",
        element: <Orders/>,
        errorPageElement: <ErrorPage/> 
    }
])

export default appRouter;