import { useNavigate } from "react-router-dom";
import { setCookie } from "../../../lib/cookie";
import { authAction } from "../../../lib/features/auth/slice/authSlice";
import { togglePassword } from "../../../lib/features/password/slice/passwordSlice";
import { useAppDispatch, useAppSelector } from "../../../lib/hook";
import { useEffect } from "react";

export default function useFormSignIn() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { showPassword } = useAppSelector((state) => state.password);
  const { formData, loading, errorMessage } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(authAction.clearErrorMessage());
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(
      authAction.setFormData({
        ...formData,
        [name]: value,
      })
    );
  };

  const handleToggle = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(togglePassword());
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData || !formData.email || !formData.password) {
      return;
    }

    const { email, password } = formData;
    const result = await dispatch(authAction.authThunk({ email, password }));

    if (authAction.authThunk.fulfilled.match(result)) {
      const { token, is_new_user } = result.payload;
      setCookie("token", token);

      if (is_new_user) {
        navigate("/address");
      } else {
        navigate("/profile");
      }

      dispatch(authAction.resetForm());
    }
  };

  return {
    handleToggle,
    showPassword,
    handleChange,
    formData,
    handleSubmit,
    errorMessage,
    loading,
  };
}
