import { useEffect } from "react";
import {
  togglePassword,
  togglePasswordConfirm,
} from "../../../lib/features/password/slice/passwordSlice";
import { signupActions } from "../../../lib/features/user/slices/signupSlice";
import { useAppDispatch, useAppSelector } from "../../../lib/hook";

export default function useFormSignup() {
  const dispatch = useAppDispatch();
  const { showPassword, showPasswordConfirm } = useAppSelector(
    (state) => state.password
  );
  const { formData, passwordConfirm, error, loading, message } = useAppSelector(
    (state) => state.signup
  );

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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData) return;

    const { email, password, name } = formData;

    if (password !== passwordConfirm) {
      return;
    }
    dispatch(signupActions.signupThunk({ name, email, password }));
    dispatch(signupActions.resetForm());
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
  };
}
