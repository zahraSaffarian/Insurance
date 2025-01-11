import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const pageNameMapping: Record<string, string> = {
  "/": "خانه",
  "/login": "ثبت نام",
  "/choose-insurance": "انتخاب بیمه",
  "/sales-insurance": "بیمه شخص ثالث",
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const pageName = pageNameMapping[location.pathname] || "Unknown Page";

  return (
    <div className="h-[100vh] overflow-y-auto relative main-container">
      <div className="h-[15vh] md:h-[100vh] bg-[#fffbec] w-full md:w-[30vw] absolute bottom-0 md:top-0 md:left-0 z-[-1]"></div>
      <Header />

      <div className="mx-[10vw] my-[5vh]  max-w-[500px]">
        <h1 className="text-[21px] font-medium mb-10">{pageName}</h1>
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
