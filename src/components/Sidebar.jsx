import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Ticket,
  Users,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const baseClass =
    "w-11 h-11 flex items-center justify-center rounded-lg transition";

  const navClass = ({ isActive }) =>
    isActive
      ? `${baseClass} bg-gray-200 text-indigo-600`
      : `${baseClass} hover:bg-gray-100 text-gray-600`;

  const iconClass = "w-5 h-5";

  return (
    <aside className="w-16 bg-white border-r flex flex-col items-center py-6 justify-between">
      
      {/* Top section */}
      <div className="flex flex-col items-center space-y-6">
        {/* Logo */}
<div className="w-11 h-11 flex items-center justify-center mb-2">
  <img
    src="/Logo.png"   
    alt="Logo"
    className="w-8 h-8 object-contain"
  />
</div>


        {/* Dashboard */}
        <NavLink to="/dashboard" className={navClass}>
          <LayoutDashboard className={iconClass} />
        </NavLink>

        {/* Tickets */}
        <NavLink to="/tickets" className={navClass}>
          <Ticket className={iconClass} />
        </NavLink>

        {/* Employees */}
        <NavLink to="/employees" className={navClass}>
          <Users className={iconClass} />
        </NavLink>

        {/* Reports */}
        <div className={`${baseClass} hover:bg-gray-100 text-gray-600 cursor-pointer`}>
          <BarChart3 className={iconClass} />
        </div>

        {/* Settings */}
        <div className={`${baseClass} hover:bg-gray-100 text-gray-600 cursor-pointer`}>
          <Settings className={iconClass} />
        </div>
      </div>

      {/* Logout */}
      <div className={`${baseClass} hover:bg-red-50 text-red-500 cursor-pointer`}>
        <LogOut className={iconClass} />
      </div>
    </aside>
  );
};

export default Sidebar;
