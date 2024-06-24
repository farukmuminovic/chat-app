import {createBrowserRouter} from "react-router-dom";
import LogIn from "./auth/LogIn";
import SignUp from "./auth/SignUp";
import Home from "./Home";
import Chat from "./chat/Chat";
import Profile from "./profile/Profile";

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
    {
        path: "/profile",
        element: <Profile/>,
    },
]);

export default router;
