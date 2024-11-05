import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import Department from "./pages/Department";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

const App = () => {
  return (
    <div className="">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/department" element={<Department />} />
      </Routes>
    </div>
  );
};

export default App;
