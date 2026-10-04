
import {
    createBrowserRouter,
    RouterProvider
} from "react-router";

import Register from "../features/auth/ui/components/Register";
import Login from "../features/auth/ui/components/Login";

const AppRout = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Register />
        },
        {
            path: "/login",
            element: <Login />
        }
    ]);

    return <RouterProvider router={router} />;
};

export default AppRout;

