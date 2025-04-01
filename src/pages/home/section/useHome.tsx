import { useNavigate } from "react-router-dom";

export default function useHome() {
  const navigate = useNavigate();

  const getStart = () => {
    navigate("/signup");
  };

  const chatAdmin = () => {
    navigate("/helper");
  };
  return { getStart, chatAdmin };
}
