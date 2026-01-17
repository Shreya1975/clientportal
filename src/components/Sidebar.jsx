import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const baseClass =
    "w-11 h-11 flex items-center justify-center rounded-lg transition";

  const navClass = ({ isActive }) =>
    isActive
      ? `${baseClass} bg-gray-200`
      : `${baseClass} hover:bg-gray-100`;

  const imgClass = "w-6 h-6 object-contain";

  return (
    <aside className="w-16 bg-white border-r flex flex-col items-center py-6 justify-between">
      {/* Top section */}
      <div className="flex flex-col items-center space-y-6">
        {/* Logo */}
        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
          <img src="/sb1.png" alt="Logo" className="w-6 h-6" />
        </div>

        {/* Icon 1 - Dashboard */}
        <NavLink to="/dashboard" className={navClass}>
          <img src="/sb1.png" alt="Dashboard" className={imgClass} />
        </NavLink>

        {/* Icon 2 - Tickets */}
        <NavLink to="/tickets" className={navClass}>
          <img src="/sb2.png" alt="Tickets" className={imgClass} />
        </NavLink>

        {/* Icon 3 - Employees */}
        <NavLink to="/employees" className={navClass}>
          <img src="/sb3.png" alt="Employees" className={imgClass} />
        </NavLink>

        {/* Icon 4 */}
        <div className={baseClass}>
          <img src="/sb4.png" alt="Icon 4" className={imgClass} />
        </div>

        {/* Icon 5 */}
        <div className={baseClass}>
          <img src="/sb5.png" alt="Icon 5" className={imgClass} />
        </div>
      </div>

      {/* Bottom icon - Icon 6 */}
      <div className={baseClass}>
        <img src="/sb6.png" alt="Logout" className={imgClass} />
      </div>
    </aside>
  );
};

export default Sidebar;
