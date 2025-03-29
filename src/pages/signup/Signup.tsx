import imageSignup from "../../assets/image-signup.png";
import Notification from "../../components/informational/notification/Notification";
import AddressForm from "./section/AddressForm";
import SignupHeader from "./section/SignupHeader";
import SignupFooter from "./section/SignupFooter";
import SignupForm from "./section/SignupForm";
import useFormSignup from "./section/useSignup";

const Signup = () => {
  const { message, error, currentSection } = useFormSignup();
  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-[auto,1fr] bg-background">
      <img
        width={460}
        height={1024}
        className="hidden md:block md:max-w-72 lg:max-w-full object-cover w-full h-screen"
        alt="image-signup"
        src={imageSignup}
      />
      <div className="pl-5 pr-5 md:pl-11 md:pr-16 lg:pl-16 lg:pr-32 flex flex-col gap-5 justify-center relative">
        {message && (
          <div className="absolute top-5 left-0 w-full max-w-full pl-5 pr-5 md:pl-11 md:pr-16 lg:pl-16 lg:pr-32">
            <Notification message={`${message} , go to sign in`} />
          </div>
        )}

        {error && (
          <div className="absolute top-5 left-0 w-full max-w-full pl-5 pr-5 md:pl-11 md:pr-16 lg:pl-16 lg:pr-32">
            <Notification variant="error" message={error} />
          </div>
        )}
        <SignupHeader />
        {currentSection === "signup" && <SignupForm />}
        {currentSection === "address" && <AddressForm />}
        <SignupFooter />
      </div>
    </div>
  );
};

export default Signup;
