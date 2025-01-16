"use client";
import React, { useState } from "react";
import "./SideNav.css";

const SideNav = ({ initialTab, handleTabChange }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [isOpen, setIsOpen] = useState(false);

  const changeTab = (tabName) => {
    setActiveTab(tabName);
    handleTabChange(tabName);
  };

  const isActive = (tabName) => (activeTab === tabName ? "active" : "");

  const close = () => {
    setIsOpen(false);
  };

  return (
    <div className={`sideNav`}>
      {/* <button
        className=" bg-zinc-900 text-white px-2 py-1 rounded-md"
        onClick={close}
      >
        Close
      </button> */}
      <ul className="list">
        <li
          className={`item ${isActive("Dashboard")}`}
          onClick={() => changeTab("Dashboard")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-globe-americas"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19...Z" />
          </svg>
          Dashboard
        </li>
        <li
          className={`item ${isActive("Home")}`}
          onClick={() => changeTab("Home")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-house-door"
            viewBox="0 0 16 16"
          >
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6...z" />
          </svg>
          Home
        </li>
        <li
          className={`item ${isActive("Products")}`}
          onClick={() => changeTab("Products")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-images"
            viewBox="0 0 16 16"
          >
            <path d="M4.502 9a1.5 1.5 0 1 0 0-3...z" />
          </svg>
          Album
        </li>
        <li
          className={`item ${isActive("Contacts")}`}
          onClick={() => changeTab("Contacts")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-people"
            viewBox="0 0 16 16"
          >
            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4...z" />
          </svg>
          Contacts
        </li>
        <li
          className={`item ${isActive("Subscribers")}`}
          onClick={() => changeTab("Subscribers")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-emoji-sunglasses"
            viewBox="0 0 16 16"
          >
            <path d="M4.968 9.75a.5.5 0 1 0-.866.5...z" />
          </svg>
          Subscribers
        </li>
        <li
          className={`item ${isActive("Emails")}`}
          onClick={() => changeTab("Emails")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-envelope-check"
            viewBox="0 0 16 16"
          >
            <path d="M2 2a2 2 0 0 0-2 2v8.01...z" />
          </svg>
          Emails
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
