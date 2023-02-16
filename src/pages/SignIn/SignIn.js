import Input from "../../atoms/Input";
import AuthPage from "../../templates/AuthPage";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <AuthPage title="Sign In" btnText="Sign In">
      <span className="text-center text-xl">
        Not signed up ?{" "}
        <Link to="/signup" className="link">
          Sign Up
        </Link>
      </span>

      <Input type="text" name="email" label="email" placeholder="Email" />
      <Input
        type="password"
        name="password"
        label="Password"
        placeholder="Password"
      />
      <span className="mt-[-16px]">
        <Link to="/forget-password" className="link ml-3 text-sm">
          Forget your password ?
        </Link>
      </span>
    </AuthPage>
  );
}

export default SignIn;
