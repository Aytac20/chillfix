import { TbLogout2 } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuthActions";

function Logout() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogOut = async (e) => {
    e.preventDefault();
    const success = await logout();
    if (success) {
      navigate("/");
    }
  };

  return (
    <NavLink onClick={handleLogOut} className="text-white">
      <span>
        <TbLogout2 />
      </span>
      Log out
    </NavLink>
  );
}

export default Logout;
