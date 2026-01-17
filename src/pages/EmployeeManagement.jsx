import MainLayout from "../layout/MainLayout";

const EmployeeManagement = () => {
  const employees = [
    {
      id: 1,
      name: "Jane Doe",
      email: "jane.doe@acmecorp.com",
      role: "Client Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "John Smith",
      email: "john.smith@acmecorp.com",
      role: "Client User",
      status: "Active",
    },
    {
      id: 3,
      name: "Emily White",
      email: "emily.white@acmecorp.com",
      role: "Client User",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Michael Brown",
      email: "michael.brown@acmecorp.com",
      role: "Client Admin",
      status: "Active",
    },
    {
      id: 5,
      name: "Sarah Davis",
      email: "sarah.davis@acmecorp.com",
      role: "Client User",
      status: "Active",
    },
  ];

  return (
    <MainLayout>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Manage Employees
        </h1>

        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition text-sm">
          + Invite New Employee
        </button>
      </div>

      {/* Employee Table */}
      <div className="bg-white rounded-xl shadow border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr className="text-xs font-semibold text-gray-500">
              <th className="px-6 py-4">EMPLOYEE NAME</th>
              <th className="px-6 py-4">EMAIL</th>
              <th className="px-6 py-4">ROLE</th>
              <th className="px-6 py-4">STATUS</th>
              <th className="px-6 py-4 text-center">ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr
                key={emp.id}
                className="border-t hover:bg-gray-50 transition"
              >
                {/* Name */}
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
                    {emp.name.charAt(0)}
                  </div>
                  <span className="font-medium text-gray-800">
                    {emp.name}
                  </span>
                </td>

                {/* Email */}
                <td className="px-6 py-4 text-gray-600">
                  {emp.email}
                </td>

                {/* Role */}
                <td className="px-6 py-4">
                  {emp.role === "Client Admin" ? (
                    <span className="px-3 py-1 text-xs rounded-full bg-indigo-100 text-indigo-600 font-medium">
                      Client Admin
                    </span>
                  ) : (
                    <span className="text-sm text-gray-700">
                      Client User
                    </span>
                  )}
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        emp.status === "Active"
                          ? "bg-green-500"
                          : "bg-gray-400"
                      }`}
                    ></span>
                    <span className="text-gray-700">
                      {emp.status}
                    </span>
                  </div>
                </td>

                {/* Actions */}
                <td className="px-6 py-4 text-center text-xl text-gray-500 cursor-pointer">
                  ⋯
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
};

export default EmployeeManagement;
