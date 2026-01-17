import { NavLink } from "react-router-dom";

const Header = () => {
  const tabClass = ({ isActive }) =>
    `flex items-center gap-2 text-sm font-medium pb-1 ${
      isActive
        ? "text-indigo-600 border-b-2 border-indigo-600"
        : "text-gray-500 hover:text-gray-700"
    }`;

  const iconClass = (isActive) =>
    `w-4 h-4 object-contain ${
      isActive ? "filter brightness-0 saturate-100 invert-[28%] sepia-[83%] saturate-[2500%] hue-rotate-[230deg] brightness-[95%]" : ""
    }`;

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      {/* Center navigation */}
      <div className="flex items-center gap-10 mx-auto">
        {/* My Tickets */}
        <NavLink to="/dashboard" className={tabClass}>
          {({ isActive }) => (
            <>
              <img
                src="/User.png"
                alt="My Tickets"
                className={iconClass(isActive)}
              />
              <span>My Tickets</span>
            </>
          )}
        </NavLink>

        {/* Company Tickets */}
        <NavLink to="/tickets" className={tabClass}>
          {({ isActive }) => (
            <>
              <img
                src="/layout.png"
                alt="Company Tickets"
                className={iconClass(isActive)}
              />
              <span>Company Tickets</span>
            </>
          )}
        </NavLink>

        {/* Employee Management */}
        <NavLink to="/employees" className={tabClass}>
          {({ isActive }) => (
            <>
              <img
                src="/Users.png"
                alt="Employee Management"
                className={iconClass(isActive)}
              />
              <span>Employee Management</span>
            </>
          )}
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
