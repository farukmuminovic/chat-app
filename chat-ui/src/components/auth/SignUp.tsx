import Auth from "./Auth";
import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";

const SignUp = () => {
  return (
    <Auth submitLabel={"Sign Up"} onSubmit={async () => {}}>
      <Link to={"/login"} style={{ alignSelf: "center" }}>
        <MUILink>Already registered? Log in</MUILink>
      </Link>
    </Auth>
  );
};

export default SignUp;
