/* Import Pages */
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
/* Import css */
import "./styles/app.css";

/* Import Route */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const routerBrowser = createBrowserRouter([
    /* Home / Signin */
    {
      path: "/",
      element: <SignIn />,
    },

    /* Signup */
    {
      path: "/signup",
      element: <SignUp />,
    },

    /* Forget Passwords */
    {
      path: "/forget-password",
      element: <ForgetPassword />,
    },
  ]);

  return (
    <div className="h-full w-full">
      <RouterProvider router={routerBrowser} />
    </div>
  );
}

export default App;
