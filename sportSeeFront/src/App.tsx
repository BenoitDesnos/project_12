import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Layout from "./components/layout/Layout";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/mock/:id" element={<Dashboard useMock />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route element={<NotFound />} />
      </Route>
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
