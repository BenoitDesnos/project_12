import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard/mock/:id"
          element={<Dashboard useMockedData />}
        />
        <Route path="/dashboard/:id" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
