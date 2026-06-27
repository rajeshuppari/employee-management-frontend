import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListEmployeeComponent from "./pages/ListEmployeeComponent";
import EmployeeComponent from "./pages/EmployeeComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListEmployeeComponent />} />

        <Route path="/add-employee" element={<EmployeeComponent />} />

        <Route path="/edit-employee/:id" element={<EmployeeComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
