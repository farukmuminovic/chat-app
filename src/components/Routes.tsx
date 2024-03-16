import { createBrowserRouter } from "react-router-dom";
import LogIn from "./auth/LogIn";
import SignUp from "./auth/SignUp";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
