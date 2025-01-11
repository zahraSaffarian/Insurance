import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import appRoutes from "./appRoutes";
import MainLayout from "./components/layouts/MainLayout";

const AppRoutes = () => {
  return useRoutes(appRoutes);
};

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Router>
  );
};

export default App;
