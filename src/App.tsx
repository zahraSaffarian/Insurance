import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Login from "./pages/Login";
import ChooseInsurance from "./pages/ ChooseInsurance";
import SalesInsurance from "./pages/SalesInsurance";

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/about" element={<ChooseInsurance />} />
          <Route path="/about" element={<SalesInsurance />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
