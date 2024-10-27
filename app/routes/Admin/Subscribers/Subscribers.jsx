import React, { useEffect, useState } from "react";
import Masonry from "masonry-layout";
import "./style.css";
import { apiURL } from "@/app/constants";
import ContactCard from "../Contacts/Card/contactCard";

const Subscribrs = () => {
  const [contacts, setSubscribers] = useState([]);
  const [input, setInput] = useState("");
  const [filteredSubscribers, setFilteredSubscribers] = useState([]);
  const SVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 16 16"
      style={{ fill: "#40C057" }}
    >
      <path d="M 12.871094 3.882813 L 6.5 10.25 L 3.792969 7.542969 L 4.5 6.835938 L 6.5 8.835938 L 12.238281 3.101563 C 11.050781 1.835938 9.371094 1.042969 7.5 1.042969 C 3.910156 1.042969 1 3.953125 1 7.542969 C 1 11.132813 3.910156 14.042969 7.5 14.042969 C 11.089844 14.042969 14 11.132813 14 7.542969 C 14 6.183594 13.582031 4.925781 12.871094 3.882813 Z"></path>
    </svg>
  );

  const fetchSubscribers = async () => {
    try {
      const res = await fetch(`${apiURL}/api/getSubscribers`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.success) {
        setSubscribers(data.data);
        setFilteredSubscribers(data.data);
      }
      console.log(`From FrontEnd: `, data);
    } catch (error) {
      console.error("Error fetching contacts: ", error);
    }
  };

  const filterSubscribers = (query) => {
    const filtered = contacts.filter((contact) => {
      const { email } = contact;

      const lowerCaseEmail =
        typeof email === "string" ? email.toLowerCase() : "";

      const lowerCaseQuery = query.toLowerCase();
      return lowerCaseEmail.includes(lowerCaseQuery);
    });
    setFilteredSubscribers(filtered);
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setInput(query);
    filterSubscribers(query);
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  useEffect(() => {
    if (filteredSubscribers.length) {
      const grid = document.querySelector(".contact-grid");
      new Masonry(grid, {
        itemSelector: ".card",
        columnWidth: ".card",
        gutter: 10,
        percentPosition: true,
      });
    }
  }, [filteredSubscribers]);

  return (
    <div className="contact-container">
      <div className="head">
        <h2>Subscribers {">>"}</h2>
        <input
          type="text"
          name="search"
          id="search"
          className="email"
          value={input}
          placeholder="Find Subscribers"
          onChange={handleInputChange}
        />
      </div>
      <hr className="hr" />
      <ul className="contact-grid">
        {filteredSubscribers.length !== 0 ? (
          filteredSubscribers.map((contact, index) => (
            <ContactCard key={index} details={contact} svg={SVG} />
          ))
        ) : (
          <p>No contacts found.</p>
        )}
      </ul>
    </div>
  );
};

export default Subscribrs;
