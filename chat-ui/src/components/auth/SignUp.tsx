import Auth from "./Auth";
import {Link} from "react-router-dom";
import {Link as MUILink} from "@mui/material";
import {useCreateUser} from "../../hooks/useCreateUser";
import {useState} from "react";
import {extractErrorMessage} from "../../utils/errors";
import {useLogin} from "../../hooks/useLogin";
import {UNKNOWN_ERROR_MESSAGE} from "../../constants/error";

const SignUp = () => {
    const [createUser] = useCreateUser();
    const [error, setError] = useState("");
    const {login} = useLogin();

    return (
        <Auth submitLabel={"Sign Up"} error={error} onSubmit={async ({email, password}) => {
            try {
                await createUser({
                    variables: {
                        createUserInput: {
                            email,
                            password
                        }
                    }
                });
                await login({email, password});
                setError("")
            } catch (err) {
                const errorMessage = extractErrorMessage(err);
                if (errorMessage) {
                    setError(errorMessage);
                    return;
                }
                setError(UNKNOWN_ERROR_MESSAGE)
            }
        }}>
            <Link to={"/login"} style={{alignSelf: "center"}}>
                <MUILink>Already registered? Log in</MUILink>
            </Link>
        </Auth>
    );
};

export default SignUp;
