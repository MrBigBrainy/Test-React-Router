import { createBrowserRouter } from "react-router";
import Layout from "./Layout"
import HomePage from "./HomePage"
import PostPage from "./PostPage";
import { fetchData } from "./api/fetchData";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <h1>Page Not Found</h1>,
        children: [{ index: true, element: <HomePage /> },
        { path: "post", element: <PostPage/>, loader: fetchData }]
    }
], {
    basename: '/Test-React-Router'
});

export default router