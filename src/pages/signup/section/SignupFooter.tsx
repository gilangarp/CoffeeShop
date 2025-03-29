import { Link } from "react-router-dom";

export default function SignupFooter() {
  return (
    <div className="flex items-center gap-3 justify-center ">
      <h1 className="text-text-gray">Have An Account?</h1>
      <Link className="text-orange" to="/signin">
        Signin
      </Link>
    </div>
  );
}
