import {createBrowserRouter} from "react-router-dom";
import LogIn from "./auth/LogIn";
import SignUp from "./auth/SignUp";
import Home from "./Home";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LogIn/>,
    },
    {
        path: "/signup",
        element: <SignUp/>,
    },
    {
        path: "/",
        element: <Home/>,
    }
]);

export default router;
