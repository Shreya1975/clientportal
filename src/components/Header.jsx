import { NavLink } from "react-router-dom";

const Header = () => {
  const tabClass = ({ isActive }) =>
    `flex items-center gap-2 text-sm font-medium pb-1 ${
      isActive
        ? "text-indigo-600 border-b-2 border-indigo-600"
        : "text-gray-500 hover:text-gray-700"
    }`;

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      {/* Center navigation */}
      <div className="flex items-center gap-10 mx-auto">
        {/* My Tickets */}
        <NavLink to="/dashboard" className={tabClass}>
          <img
            src="/User.png"
            alt="My Tickets"
            className="w-4 h-4 object-contain"
          />
          <span>My Tickets</span>
        </NavLink>

        {/* Company Tickets */}
        <NavLink to="/tickets" className={tabClass}>
          <img
            src="/layout.png"
            alt="Company Tickets"
            className="w-4 h-4 object-contain"
          />
          <span>Company Tickets</span>
        </NavLink>

        {/* Employee Management */}
        <NavLink to="/employees" className={tabClass}>
          <img
            src="/Users.png"
            alt="Employee Management"
            className="w-4 h-4 object-contain"
          />
          <span>Employee Management</span>
        </NavLink>
      </div>

      {/* Right profile */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
          <img
            src="/Avatar.png"
            alt="Profile"
            className="w-6 h-6 rounded-full object-cover"
          />
        </div>
        <span className="text-sm text-gray-700 font-medium">
          Client Admin Bob
        </span>
      </div>
    </header>
  );
};

export default Header;
