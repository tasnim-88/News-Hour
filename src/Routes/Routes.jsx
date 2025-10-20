import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Authentication from "../layouts/Authentication";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            { index: true, Component: Home },
            {
                path: '/category/:id',
                Component: CategoryNews,
                loader: () => fetch('/news.json')

            }
        ]
    },
    {
        path: '/auth',
        Component: Authentication,
        children: [
            { path: '/auth/login', Component: Login },
            { path: '/auth/registration', Component: Registration }
        ]
    },
    {
        path: '/newsDetails/:id',
        element: 
        <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>,
        loader: () => fetch('/news.json')
    },
    {
        path: '/*',
        element: <h2>Error 404</h2>
    }
])

export default router
