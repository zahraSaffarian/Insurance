import React, { useEffect, useState } from "react";
import Logo from "@app/assets/images/logo.svg";
import UserLog from "@app/assets/images/user.svg";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [userData, setUserData] = useState<{
    nikName?: string;
    lastName?: string;
  } | null>(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      try {
        setUserData(JSON.parse(storedUserData));
      } catch (error) {
        console.error("Failed to parse userData:", error);
      }
    }
  }, []);

  return (
    <header className="bg-transparent">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 gap-2"
        aria-label="Global"
      >
        <div className="flex ">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">سامانه مقایسه و خرید آنلاین بیمه</span>
            <img className="h-6 w-auto" src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="hidden md:flex font-medium text-[16px]">
          سامانه مقابسه و خرید آنلاین
        </div>
        <div className="font-normal text-[14px]">
          {userData?.nikName ? (
            <div className="flex items-center gap-2 ml-5">
              <img src={UserLog} className="h-6 w-auto" alt="user" />
              {userData.nikName} {userData.lastName}
            </div>
          ) : (
            "ثبت نام"
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
