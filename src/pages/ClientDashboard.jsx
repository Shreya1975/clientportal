import MainLayout from "../layout/MainLayout";

const ClientDashboard = () => {
  const tickets = [
    {
      id: "TCK-1001",
      subject: "VPN not connecting to corporate network",
      status: "OPEN",
      updated: "2 hours ago",
    },
    {
      id: "TCK-1002",
      subject: "Software installation issue on new laptop",
      status: "IN PROGRESS",
      updated: "1 day ago",
    },
    {
      id: "TCK-1003",
      subject: "Email client configuration for new hire",
      status: "RESOLVED",
      updated: "3 days ago",
    },
    {
      id: "TCK-1004",
      subject: "Printer not responding in marketing department",
      status: "CLOSED",
      updated: "5 days ago",
    },
  ];

  const statusStyles = {
    OPEN: "bg-blue-100 text-blue-700",
    "IN PROGRESS": "bg-yellow-100 text-yellow-700",
    RESOLVED: "bg-green-100 text-green-700",
    CLOSED: "bg-gray-200 text-gray-700",
  };

  return (
    <MainLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Welcome Admin Bob!
        </h1>

        <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
          Create New Ticket
        </button>
      </div>

      {/* Tickets Table */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">
          Your Recent Tickets
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-sm text-gray-500 border-b">
                <th className="pb-3">Ticket ID</th>
                <th className="pb-3">Subject</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Last Updated</th>
              </tr>
            </thead>

            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="border-b last:border-none">
                  <td className="py-4 font-medium">{ticket.id}</td>
                  <td className="py-4 text-gray-600">
                    {ticket.subject}
                  </td>
                  <td className="py-4">
                    <span
                      className={`px-3 py-1 text-xs rounded-full font-medium ${statusStyles[ticket.status]}`}
                    >
                      {ticket.status}
                    </span>
                  </td>
                  <td className="py-4 text-gray-500">
                    {ticket.updated}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
};

export default ClientDashboard;
