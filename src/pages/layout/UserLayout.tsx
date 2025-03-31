import { Outlet } from "react-router-dom";
import Navbar from "../../components/navigation/Navbar/Navbar";

export default function UserLayout() {
  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}
