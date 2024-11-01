import React, { useEffect, useState } from "react";
import Masonry from "masonry-layout";
import "./style.css";
import { apiURL } from "@/app/constants";
import ContactCard from "./Card/contactCard";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [input, setInput] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);

  const fetchContact = async () => {
    try {
      const res = await fetch(`${apiURL}/api/getContacts`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.success) {
        setContacts(data.data);
        setFilteredContacts(data.data);
      }
      console.log(`From FrontEnd: `, data);
    } catch (error) {
      console.error("Error fetching contacts: ", error);
    }
  };

  const filterContacts = (query) => {
    const filtered = contacts.filter((contact) => {
      const { name, email, phone } = contact;

      const lowerCaseName = typeof name === "string" ? name.toLowerCase() : "";
      const lowerCaseEmail =
        typeof email === "string" ? email.toLowerCase() : "";
      const lowerCasePhone =
        typeof phone === "string" ? phone.toLowerCase() : "";

      const lowerCaseQuery = query.toLowerCase();
      return (
        lowerCaseName.includes(lowerCaseQuery) ||
        lowerCaseEmail.includes(lowerCaseQuery) ||
        lowerCasePhone.includes(lowerCaseQuery)
      );
    });
    setFilteredContacts(filtered);
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setInput(query);
    filterContacts(query);
  };

  useEffect(() => {
    fetchContact();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && filteredContacts.length) {
      const grid = document.querySelector(".contact-grid");
      if (grid) {
        new Masonry(grid, {
          itemSelector: ".card",
          columnWidth: ".card",
          gutter: 10,
          percentPosition: true,
        });
      }
    }
  }, [filteredContacts]);

  return (
    <div className="contact-container">
      <div className="head">
        <h2>Contacts {">>"}</h2>
        <input
          type="text"
          name="search"
          id="search"
          className="email"
          value={input}
          placeholder="Find contacts"
          onChange={handleInputChange}
        />
      </div>
      <hr className="hr" />
      <ul className="contact-grid">
        {filteredContacts.length !== 0 ? (
          filteredContacts.map((contact, index) => (
            <ContactCard key={index} details={contact} />
          ))
        ) : (
          <p>No contacts found.</p>
        )}
      </ul>
    </div>
  );
};

export default Contacts;
