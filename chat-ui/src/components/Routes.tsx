import {createBrowserRouter} from "react-router-dom";
import LogIn from "./auth/LogIn";
import SignUp from "./auth/SignUp";
import Home from "./Home";
import Chat from "./chat/Chat";

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
    },
    {
        path: "/chats/:_id",
        element: <Chat/>,
    },
]);

export default router;
