import Auth from "./Auth";
import {Link} from "react-router-dom";
import {Link as MUILink} from "@mui/material";
import {useLogin} from "../../hooks/useLogin";

const LogIn = () => {
    const {login, error} = useLogin()
    return (
        <Auth submitLabel={"Log In"} onSubmit={(request) => login(request)} error={error}>
            <Link to={"/signup"} style={{alignSelf: "center"}}>
                <MUILink>Don't have an account? Register here!</MUILink>
            </Link>
        </Auth>
    );
};

export default LogIn;
