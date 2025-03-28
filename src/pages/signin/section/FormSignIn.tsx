import { MdOutlineMail } from "react-icons/md";
import InputField from "../../../components/form/InputFields/InputFields";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Button from "../../../components/interactive/Button/Button";
import { CgPassword } from "react-icons/cg";
import { Link } from "react-router-dom";
import useFormSignIn from "./useFormSignIn";

export default function FormSignIn() {
  const {
    handleToggle,
    showPassword,
    handleChange,
    formData,
    handleSubmit,
    loading,
  } = useFormSignIn();

  return (
    <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
      <InputField
        name="email"
        placeholder="Enter Your Email"
        Icon="left"
        label="Email"
        value={formData.email}
        onChange={handleChange}
      >
        <InputField.Icon>
          <MdOutlineMail className="w-4 h-4" />
        </InputField.Icon>
      </InputField>

      <InputField
        type={showPassword ? "text" : "password"}
        placeholder="Enter Your Full Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        button={{
          children: showPassword ? (
            <FaRegEye className="w-4 h-4" />
          ) : (
            <FaRegEyeSlash className="w-4 h-4" />
          ),
          onClick: handleToggle,
        }}
        Icon="left"
        label="Password"
      >
        <InputField.Icon>
          <CgPassword className="w-4 h-4" />
        </InputField.Icon>
      </InputField>

      <Button type="submit" disabled={loading}>
        {loading ? "Login..." : "Login"}
      </Button>

      <div className="flex items-center gap-3 justify-center ">
        <h1 className="text-text-gray">Not Have An Account?</h1>
        <Link className="text-orange" to="/signup">
          Sign Up
        </Link>
      </div>
    </form>
  );
}
