import React from "react";
import "./style.css";
import AdminAlbum from "../AdminAlbum/AdminAlbum";
import ContactWrapper from "../Contacts/ContactWrapper";
import Emails from "../Emails/Emails";
import SubscribersWrapper from "../Subscribers/SubscribersWrapper";

const Dashboard = () => {
  return (
    <div className="Container">
      <AdminAlbum />
      <ContactWrapper />
      <SubscribersWrapper />
      <Emails />
    </div>
  );
};

export default Dashboard;
