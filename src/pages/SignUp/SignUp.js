import '../../styles/app.css';

import Input from '../../atoms/Input';
import AuthPage from '../../templates/AuthPage';


function SignUp() {
  return (
        <AuthPage title="Sign Up" btnText="Sign Up">
            <span className='text-center text-xl'>Already got an account ? <a href="#" className='link'>Sign In</a></span>
            <Input type="text" name="username" label="username" placeholder="Username"/>
            <Input type="text" name="email" label="email" placeholder="Email" />
            <Input type="password" name="password" label="Password" placeholder="Password" />
            <Input type="password" name="confirm-password" label="Confirm password" placeholder="Password" />

        </AuthPage>
  );
}

export default SignUp;
