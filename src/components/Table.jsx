const statusStyles = {
  OPEN: "bg-blue-100 text-blue-700",
  "IN PROGRESS": "bg-yellow-100 text-yellow-700",
  RESOLVED: "bg-green-100 text-green-700",
  CLOSED: "bg-gray-200 text-gray-700",
  PENDING: "bg-pink-100 text-pink-700",
};

const Table = ({ data }) => {
  return (
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
          {data.map((ticket) => (
            <tr key={ticket.id} className="border-b last:border-none">
              <td className="py-4 font-medium">{ticket.id}</td>
              <td className="py-4 text-gray-600">{ticket.subject}</td>
              <td className="py-4">
                <span
                  className={`px-3 py-1 text-xs rounded-full font-medium ${statusStyles[ticket.status]}`}
                >
                  {ticket.status}
                </span>
              </td>
              <td className="py-4 text-gray-500">{ticket.updated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
