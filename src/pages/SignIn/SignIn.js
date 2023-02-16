import "../../styles/app.css";

import Input from "../../atoms/Input";
import AuthPage from "../../templates/AuthPage";

function SignIn() {
  return (
    <AuthPage title="Sign In" btnText="Sign In">
      <span className="text-center text-xl">
        Not signed up ?{" "}
        <a href="#" className="link">
          Sign Up
        </a>
      </span>

      <Input type="text" name="email" label="email" placeholder="Email" />
      <Input
        type="password"
        name="password"
        label="Password"
        placeholder="Password"
      />
      <span className="mt-[-16px]">
        {" "}
        <a className="link ml-3 text-sm ">Forget your password ?</a>{" "}
      </span>
    </AuthPage>
  );
}

export default SignIn;
