"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import SideNav from "../../Componants/Nav/SideNav";
import Dashboard from "./Dashboard/Dashboard";
import Emails from "./Emails/Emails";
import ContactWrapper from "./Contacts/ContactWrapper";
import SubscribersWrapper from "./Subscribers/SubscribersWrapper";
import AdminAlbum from "./AdminAlbum/AdminAlbum";
import { useRouter } from "next/navigation";

const Admin = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isSideNavOpen, setIsSideNavOpen] = useState(true); // Initially open for large screens
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSmallScreen(true);
        setIsSideNavOpen(false); // Close sidenav on small screens by default
      } else {
        setIsSmallScreen(false);
        setIsSideNavOpen(true); // Keep sidenav open on large screens
      }
    };

    // Initial check and event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
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
    setIsSideNavOpen((prev) => !prev); // Toggle the sidenav state
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
    <div className="wrapper">
      {isSmallScreen && (
        <button className="toggle-button" onClick={toggleSideNav}>
          {isSideNavOpen ? "Close" : "Menu"}
        </button>
      )}
      <SideNav
        className={`sideNav ${isSideNavOpen ? "open" : "close"}`}
        initialTab={activeTab}
        handleTabChange={handleTabChange}
      />
      <div
        className={`content ${isSideNavOpen ? "" : "w-full"}`}
        onClick={() =>
          isSmallScreen && isSideNavOpen && setIsSideNavOpen(false)
        }
      >
        {renderComponent()}
      </div>
    </div>
  );
};

export default Admin;
