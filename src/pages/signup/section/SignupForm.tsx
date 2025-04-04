import { MdOutlineMail } from "react-icons/md";
import InputField from "../../../components/form/InputFields/InputFields";
import { FaRegEye, FaRegEyeSlash, FaRegUser } from "react-icons/fa";
import useFormSignup from "./useSignup";
import Button from "../../../components/interactive/Button/Button";
import { CgPassword } from "react-icons/cg";

export default function SignupForm() {
  const {
    handleToggle,
    showPassword,
    handleToggleConfirm,
    showPasswordConfirm,
    handleChange,
    formData,
    handleConfirm,
    passwordConfirm,
    addressSection,
  } = useFormSignup();

  return (
    <div className="w-full flex flex-col gap-5">
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

      <Button
        onClick={(e) => {
          e.preventDefault();
          addressSection();
        }}
      >
        Next
      </Button>
    </div>
  );
}
