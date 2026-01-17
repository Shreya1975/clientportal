import MainLayout from "../layout/MainLayout";

const TicketDetails = () => {
  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-6">
        {/* LEFT SIDE INFO PANEL */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Ticket Info */}
          <div className="bg-white border rounded-xl p-5 shadow-sm">
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Ticket Info</h3>
              <span className="text-sm text-gray-500">TKT-1024</span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Category:</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                  NETWORK
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Priority:</span>
                <span className="px-2 py-1 bg-red-500 text-white rounded text-xs">
                  HIGH
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Status:</span>
                <span className="px-2 py-1 bg-blue-500 text-white rounded text-xs">
                  OPEN
                </span>
              </div>

              <div>
                <p className="text-gray-500 mb-1">Subject:</p>
                <p className="text-gray-800">
                  My internet has been really slow for the past two days
                </p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">Description:</p>
                <p className="text-gray-700 text-sm">
                  Experiencing persistent slow internet speeds, making it
                  difficult to use web services and video.
                </p>
              </div>

              <div className="flex gap-3 text-lg text-gray-500">
                📎 🔗
              </div>
            </div>
          </div>

          {/* Employee Info */}
          <div className="bg-white border rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold mb-4">Employee Info</h3>
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Name:</span>
                <span>Jane Doe</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Company:</span>
                <span>Acme Corp</span>
              </div>
            </div>
          </div>

          {/* Assigned Agent */}
          <div className="bg-white border rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold mb-4">Assigned Agent</h3>
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Name:</span>
                <span>John Smith</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Provider:</span>
                <span>IETS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Assigner:</span>
                <span>Tom Curran</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE CHAT PANEL */}
        <div className="col-span-12 lg:col-span-8">
          {/* Ticket Header */}
          <div className="bg-white border rounded-xl p-6 shadow-sm mb-6 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">
                Subject: VPN not working
              </h2>
              <p className="text-sm text-gray-500">TKT-1024</p>
            </div>
            <span className="text-sm font-medium text-blue-600">
              OPEN
            </span>
          </div>

          {/* Messages */}
          <div className="space-y-6">
            {/* Agent Message */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                J
              </div>
              <div className="bg-gray-100 p-4 rounded-xl max-w-md">
                <p className="text-sm text-gray-800">
                  Hi Jane, please try flushing DNS and restarting VPN.
                </p>
                <span className="text-xs text-gray-500 block mt-1">
                  Oct 26, 2023, 10:30 AM
                </span>
              </div>
            </div>

            {/* User Message */}
            <div className="flex items-start gap-3 justify-end">
              <div className="bg-indigo-600 text-white p-4 rounded-xl max-w-md">
                <p className="text-sm">
                  That worked, I can connect now!
                </p>
                <span className="text-xs text-indigo-200 block mt-1 text-right">
                  Oct 26, 2023, 10:45 AM
                </span>
              </div>
              <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-sm">
                J
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TicketDetails;
