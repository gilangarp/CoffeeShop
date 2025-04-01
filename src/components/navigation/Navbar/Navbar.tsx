import { PiTrolleyFill } from "react-icons/pi";
import Button from "../../interactive/Button/Button";
import Brand from "../../visual/Brand/Brand";
import Tab from "../Tab/Tab";
import { TbMenu3 } from "react-icons/tb";
import useNavbar from "./useNavbar";

type NavbarProps = {
  variant?: "primary" | "secondary" | "transparent";
};

export default function Navbar({ variant = "secondary" }: NavbarProps) {
  const {
    token,
    navbarOpen,
    handleToggle,
    handleSignin,
    handleSignUp,
    handleLogout,
  } = useNavbar();

  return (
    <nav
      className={`${
        variant === "primary"
          ? "bg-white"
          : variant === "secondary"
          ? "bg-[#0B0909]"
          : "bg-[#0B0909] bg-opacity-10"
      } flex items-center justify-between w-full px-[21px] md:px-20 lg:px-32 py-[21px] md:py-6 fixed top-0 left-0 z-50`}
    >
      <div className="flex items-end gap-10">
        {variant === "primary" ? <Brand variant="secondary" /> : <Brand />}
        <div className="hidden md:flex items-end gap-4">
          <Tab to="/">Home</Tab>
          <Tab to="/product">Product</Tab>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-4">
        {token ? (
          <>
            <button>
              <PiTrolleyFill className="w-6 h-6 text-white" />
            </button>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <>
            <Button onClick={handleSignin} variant="white">
              Sign In
            </Button>
            <Button onClick={handleSignUp}>Sign Up</Button>
          </>
        )}
      </div>

      <div
        className={`${
          navbarOpen ? "block" : "hidden"
        } md:hidden fixed left-0 top-[73px] bottom-0 flex flex-col justify-between h-screen pl-[21px] pr-20 pt-5 pb-20 transform transition-all duration-300 ease-in-out ${
          variant === "primary"
            ? "bg-white bg-opacity-80"
            : variant === "secondary"
            ? "bg-[#0B0909] bg-opacity-80"
            : "bg-[#0B0909] bg-opacity-10"
        } ${navbarOpen ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex w-fit flex-col gap-4">
          <div className="flex w-fit flex-col gap-4">
            <Tab to="/">Home</Tab>
            <Tab to="/product">Product</Tab>
          </div>
          {token ? (
            <button>
              <PiTrolleyFill className="w-6 h-6 text-white" />
            </button>
          ) : (
            <Button onClick={handleSignin} variant="white">
              Sign In
            </Button>
          )}
        </div>
        {token ? (
          <>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <Button onClick={handleSignUp}>Sign Up</Button>
          </div>
        )}
      </div>
      <button onClick={handleToggle} className="block md:hidden">
        <TbMenu3 className="w-6 h-6 text-white" />
      </button>
    </nav>
  );
}
