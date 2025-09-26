import { createBrowserRouter } from "react-router";
import Layout from "./Layout"
import HomePage from "./HomePage"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <h1>Page Not Found</h1>,
        children: [{ index: true, element: <HomePage /> },
      ]
    }
], {
    basename: '/Test-React-Router'
});

export default router