import Brand from "../../../components/visual/Brand/Brand";
import useSignup from "./useSignup";

export default function SignupHeader() {
  const { signupSection, currentSection } = useSignup();
  return (
    <header className="flex flex-col gap-4 md:gap-9 lg:gap-14">
      <Brand variant="secondary" />
      <section className="flex flex-col gap-2 md:gap-3 lg:gap-5 font-jakarta">
        <h1 className="text-2xl font-semibold text-brown">Register</h1>
        <p className="text-base font-normal text-text-gray">
          Fill out the form correctly
        </p>
        <div className="grid grid-cols-[auto,1fr,auto,1fr] items-center gap-2 text-lg text-brown">
          <button
            className={` ${
              currentSection === "signup" ? "text-brown" : "text-orange"
            }`}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              signupSection();
            }}
          >
            1
          </button>
          <div
            className={`h-1 w-auto ${
              currentSection === "signup" ? "bg-brown" : "bg-orange"
            }  rounded-full`}
          ></div>
          <div>2</div>
          <div className="h-1 w-auto bg-brown" rounded-full></div>
        </div>
      </section>
    </header>
  );
}
