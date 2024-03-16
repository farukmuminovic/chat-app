import Auth from "./Auth";
import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";

const LogIn = () => {
  return (
    <Auth submitLabel={"Log In"} onSubmit={async () => {}}>
      <Link to={"/signup"} style={{ alignSelf: "center" }}>
        <MUILink>Don't have an account? Register here!</MUILink>
      </Link>
    </Auth>
  );
};

export default LogIn;
