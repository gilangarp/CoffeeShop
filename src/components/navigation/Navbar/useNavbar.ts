import { useNavigate } from "react-router-dom";
import { clearAllCookies, getCookie } from "../../../lib/cookie";
import { toggleNavbar } from "../../../lib/features/navbar/slice/navbarSlice";
import { useAppDispatch, useAppSelector } from "../../../lib/hook";
import { authAction } from "../../../lib/features/auth/slice/authSlice";

export default function useNavbar() {
  const token = getCookie("token");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { navbarOpen } = useAppSelector((state) => state.navbar);

  const handleToggle = () => {
    dispatch(toggleNavbar());
  };

  const handleSignin = () => {
    navigate("/signin");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogout = () => {
    clearAllCookies();
    dispatch(authAction.logout());
    window.location.reload();
  };

  return {
    token,
    navbarOpen,
    handleToggle,
    handleSignin,
    handleSignUp,
    handleLogout,
  };
}
