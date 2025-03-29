import { useEffect } from "react";
import {
  togglePassword,
  togglePasswordConfirm,
} from "../../../lib/features/password/slice/passwordSlice";
import { signupActions } from "../../../lib/features/user/slices/signupSlice";
import { useAppDispatch, useAppSelector } from "../../../lib/hook";
import { setCookie } from "../../../lib/cookie";
import { useNavigate } from "react-router-dom";

export default function useSignup() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { showPassword, showPasswordConfirm } = useAppSelector(
    (state) => state.password
  );
  const { formData, passwordConfirm, currentSection, error, loading, message } =
    useAppSelector((state) => state.signup);

  useEffect(() => {
    dispatch(signupActions.clearErrorMessage());
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(
      signupActions.setFormData({
        ...formData,
        [name]: value,
      })
    );
  };

  const handleConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(signupActions.setPasswordConfirm({ passwordConfirm: value }));
  };

  const handleToggle = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(togglePassword());
  };

  const handleToggleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(togglePasswordConfirm());
  };

  const addressSection = () => {
    dispatch(signupActions.setCurrentSection("address"));
  };

  const signupSection = () => {
    dispatch(signupActions.setCurrentSection("signup"));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData) return;

    const { email, password, name, city, country, postalCode, street, state } =
      formData;

    if (password !== passwordConfirm) {
      return;
    }
    const result = await dispatch(
      signupActions.signupThunk({
        name,
        email,
        password,
        city,
        country,
        postalCode,
        street,
        state,
      })
    );
    if (signupActions.signupThunk.fulfilled.match(result)) {
      const { token } = result.payload;
      setCookie("token", token);

      navigate("/profile");

      dispatch(signupActions.resetForm());
      dispatch(signupActions.setCurrentSection("signup"));
    }
  };

  return {
    showPassword,
    handleToggle,
    handleToggleConfirm,
    showPasswordConfirm,

    handleChange,
    handleConfirm,
    handleSubmit,
    passwordConfirm,

    error,
    loading,
    formData,
    message,

    currentSection,
    addressSection,
    signupSection,
  };
}
