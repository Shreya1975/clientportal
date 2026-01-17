import { NavLink } from "react-router-dom";

const Header = () => {
  const tabBase =
    "flex items-center gap-2 text-sm font-medium pb-1 transition";

  const iconStyle = (isActive, icon) => ({
    WebkitMask: `url(${icon}) no-repeat center`,
    mask: `url(${icon}) no-repeat center`,
    WebkitMaskSize: "contain",
    maskSize: "contain",
    backgroundColor: isActive ? "#4f46e5" : "#6b7280", // indigo / gray
    width: "16px",
    height: "16px",
  });

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      {/* Center navigation */}
      <div className="flex items-center gap-10 mx-auto">
        <NavLink to="/dashboard">
          {({ isActive }) => (
            <div
              className={`${tabBase} ${
                isActive
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <span style={iconStyle(isActive, "/User.png")} />
              My Tickets
            </div>
          )}
        </NavLink>

        <NavLink to="/tickets">
          {({ isActive }) => (
            <div
              className={`${tabBase} ${
                isActive
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <span style={iconStyle(isActive, "/layout.png")} />
              Company Tickets
            </div>
          )}
        </NavLink>

        <NavLink to="/employees">
          {({ isActive }) => (
            <div
              className={`${tabBase} ${
                isActive
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <span style={iconStyle(isActive, "/Users.png")} />
              Employee Management
            </div>
          )}
        </NavLink>
      </div>

      {/* Right profile */}
      <div className="flex items-center gap-3">
        <img
          src="/Avatar.png"
          alt="Profile"
          className="w-9 h-9 rounded-full object-cover"
        />
        <span className="text-sm text-gray-700 font-medium">
          Client Admin Bob
        </span>
      </div>
    </header>
  );
};

export default Header;
