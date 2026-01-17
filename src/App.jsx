import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ClientDashboard from "./pages/ClientDashboard";
import EmployeeManagement from "./pages/EmployeeManagement";
import TicketDetails from "./pages/TicketDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Pages */}
        <Route path="/dashboard" element={<ClientDashboard />} />
        <Route path="/employees" element={<EmployeeManagement />} />
        <Route path="/tickets" element={<TicketDetails />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
