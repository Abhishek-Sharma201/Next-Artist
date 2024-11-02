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

  const handleTabChange = (tab) => {
    if (tab === "Home") {
      router.push("/");
    } else {
      setActiveTab(tab);
    }
  };

  // RELOAD

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
      <SideNav initialTab={activeTab} handleTabChange={handleTabChange} />
      <div className="content">{renderComponent()}</div>
    </div>
  );
};

export default Admin;
