import Auth from "./Auth";
import {Link} from "react-router-dom";
import {Link as MUILink} from "@mui/material";
import {useCreateUser} from "../../hooks/useCreateUser";

const SignUp = () => {
    const [createUser] = useCreateUser()
    return (
        <Auth submitLabel={"Sign Up"} onSubmit={async ({email, password}) => {
            await createUser({
                variables: {
                    createUserInput: {
                        email,
                        password
                    }
                }
            })
        }}>
            <Link to={"/login"} style={{alignSelf: "center"}}>
                <MUILink>Already registered? Log in</MUILink>
            </Link>
        </Auth>
    );
};

export default SignUp;
