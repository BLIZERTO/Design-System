import Input from "../../atoms/Input";
import AuthPage from "../../templates/AuthPage";
import { Link } from "react-router-dom";

function ForgetPassword() {
  return (
    <AuthPage title="Reset password" btnText="Reset password">
      <span className="text-center text-xl">
        Go back to{" "}
        <Link to="/" className="link">
          Login
        </Link>
      </span>

      <Input type="text" name="email" label="email" placeholder="Email" />

      <span className="ml-3 text-sm mt-[-16px]">
        Enter your email and we'll send you instructions on how to reset your
        password.
      </span>
    </AuthPage>
  );
}

export default ForgetPassword;
