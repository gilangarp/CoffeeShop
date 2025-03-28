import imageSignin from "../../assets/image-signin.png";
import Notification from "../../components/informational/notification/Notification";
import FormSignIn from "./section/FormSignIn";
import HeaderSignIn from "./section/HeaderSignIn";
import useFormSignIn from "./section/useFormSignIn";

const SignIn = () => {
  const { errorMessage } = useFormSignIn();

  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-[auto,1fr] bg-background">
      <img
        width={460}
        height={1024}
        className="hidden md:block md:max-w-72 lg:max-w-full object-cover w-full h-screen"
        alt="image-signup"
        src={imageSignin}
      />
      <div className="pl-5 pr-5 md:pl-11 md:pr-16 lg:pl-16 lg:pr-32 flex flex-col gap-5 justify-center relative">
        {errorMessage && (
          <div className="absolute top-5 left-0 w-full max-w-full pl-5 pr-5 md:pl-11 md:pr-16 lg:pl-16 lg:pr-32">
            <Notification variant="error" message={errorMessage} />
          </div>
        )}
        <HeaderSignIn />
        <FormSignIn />
      </div>
    </div>
  );
};

export default SignIn;
