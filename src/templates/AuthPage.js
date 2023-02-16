import Button from "../Molecules/Button";

function AuthPage(props) {
  return (
    <div className="flex flex-col gap-6 px-1 lg:px-0 lg:py-2 lg:w-1/3 mx-auto">
      <h1 className="text-2xl text-center">{props.title}</h1>
      <form className="flex flex-col gap-4 lg:px-6">{props.children}</form>
      <Button
        type="submit"
        text={props.btnText}
        style="lg:w-1/3 mx-auto"
      ></Button>
    </div>
  );
}

export default AuthPage;
