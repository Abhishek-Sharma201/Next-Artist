"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SideNav from "../../Components/Nav/SideNav";
import Dashboard from "./Dashboard/Dashboard";
import Emails from "./Emails/Emails";
import ContactWrapper from "./Contacts/ContactWrapper";
import SubscribersWrapper from "./Subscribers/SubscribersWrapper";
import AdminAlbum from "./AdminAlbum/AdminAlbum";

const Admin = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isSideNavOpen, setIsSideNavOpen] = useState < boolean > false;
  const [isSmallScreen, setIsSmallScreen] = useState < boolean > false;

  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth <= 768;
      setIsSmallScreen(smallScreen);
      setIsSideNavOpen(!smallScreen);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabChange = (tab) => {
    if (tab === "Home") {
      router.push("/");
    } else {
      setActiveTab(tab);
    }
  };

  const toggleSideNav = () => {
    setIsSideNavOpen((prev) => !prev);
  };

  const closeSideNav = () => {
    if (isSmallScreen) {
      setIsSideNavOpen(false);
    }
  };

  const renderComponent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "Contacts":
        return <ContactWrapper />;
      case "Products":
        return <AdminAlbum />;
      case "Subscribers":
        return <SubscribersWrapper />;
      case "Emails":
        return <Emails />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <button
        className="fixed top-2 left-2 z-50 bg-blue-500 text-white px-4 py-2 rounded shadow-md focus:outline-none md:hidden"
        onClick={toggleSideNav}
      >
        {isSideNavOpen ? "Close" : "Menu"}
      </button>

      <SideNav
        initialTab={activeTab}
        handleTabChange={handleTabChange}
        isOpen={isSideNavOpen}
        onClose={closeSideNav}
      />
      <div
        className={`flex-grow p-4 transition-all duration-300 ${
          isSideNavOpen && !isSmallScreen ? "ml-64" : "ml-0"
        }`}
      >
        {renderComponent()}
      </div>
    </div>
  );
};

export default Admin;
