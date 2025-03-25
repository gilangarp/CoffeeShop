import { MdOutlineMail } from "react-icons/md";
import InputField from "../../../components/form/InputFields/InputFields";
import { FaRegEye, FaRegEyeSlash, FaRegUser } from "react-icons/fa";
import useFormSignup from "./useFormSignup";
import Button from "../../../components/interactive/Button/Button";
import { CgPassword } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function FormSignup() {
  const {
    handleToggle,
    showPassword,
    handleToggleConfirm,
    showPasswordConfirm,
    handleChange,
    formData,
    handleConfirm,
    handleSubmit,
    passwordConfirm,
    loading,
  } = useFormSignup();

  return (
    <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
      <InputField
        name="name"
        placeholder="Enter Your Full Name"
        Icon="left"
        label="Full Name"
        value={formData.name}
        onChange={handleChange}
      >
        <InputField.Icon>
          <FaRegUser className="w-4 h-4" />
        </InputField.Icon>
      </InputField>

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

      <InputField
        name="passwordConfirm"
        value={passwordConfirm}
        placeholder="Enter Your Password Again"
        type={showPasswordConfirm ? "text" : "password"}
        onChange={handleConfirm}
        button={{
          children: showPasswordConfirm ? (
            <FaRegEye className="w-4 h-4" />
          ) : (
            <FaRegEyeSlash className="w-4 h-4" />
          ),
          onClick: handleToggleConfirm,
        }}
        Icon="left"
        label="Confirm Password"
      >
        <InputField.Icon>
          <CgPassword className="w-4 h-4" />
        </InputField.Icon>
      </InputField>

      <Button type="submit" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </Button>

      <div className="flex items-center gap-3 justify-center ">
        <h1 className="text-text-gray">Have An Account?</h1>
        <Link className="text-orange" to="/signin">
          Signin
        </Link>
      </div>
    </form>
  );
}
