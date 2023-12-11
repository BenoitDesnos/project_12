import { Route, Routes } from "react-router";
import Home from "./assets/Pages/Home";
import Dashboard from "./assets/Pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
