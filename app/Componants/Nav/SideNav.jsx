"use client";
import React, { useState } from "react";
import "./SideNav.css";

const SideNav = ({ initialTab, handleTabChange }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const changeTab = (tabName) => {
    setActiveTab(tabName);
    handleTabChange(tabName);
  };

  const isActive = (tabName) => (activeTab === tabName ? "active" : "");

  return (
    <div className="sideNav">
      <ul className="list">
        <li
          className={`item ${isActive("Dashboard")}`}
          onClick={() => changeTab("Dashboard")}
        >
          Dashboard
        </li>
        <li
          className={`item ${isActive("Home")}`}
          onClick={() => changeTab("Home")}
        >
          Home
        </li>
        <li
          className={`item ${isActive("Products")}`}
          onClick={() => changeTab("Products")}
        >
          Album
        </li>
        <li
          className={`item ${isActive("Contacts")}`}
          onClick={() => changeTab("Contacts")}
        >
          Contacts
        </li>
        <li
          className={`item ${isActive("Subscribers")}`}
          onClick={() => changeTab("Subscribers")}
        >
          Subscribers
        </li>
        <li
          className={`item ${isActive("Emails")}`}
          onClick={() => changeTab("Emails")}
        >
          Emails
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
