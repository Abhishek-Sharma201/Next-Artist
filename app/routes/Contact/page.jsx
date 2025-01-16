"use client";
import React, { useState } from "react";
import "./style.css";
import Nav from "@/app/Components/Nav/Nav";
import Footer from "@/app/Components/Footer/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiURL } from "@/app/constants";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiURL}/api/contact/contactSubmit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.status === 409) {
        const result = await response.json();
        console.log(result.message);
        toast.warning("Contact already exists!");
      } else if (response.status === 201) {
        const result = await response.json();
        console.log(result.message);
        toast.success("Submitted!");
      } else {
        toast.error("Unexpected response from the server");
      }
    } catch (error) {
      console.log(`Error sending Data to BackEnd: ${error.message}`);
      toast.error("Failed to send data");
    }

    console.log(formData);
  };

  const [subsEmail, setSubsEmail] = useState({
    email: "",
  });

  const subsInput = (e) => {
    setSubsEmail({
      ...subsEmail,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubscribeSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiURL}/api/subscriber/addSubscriber`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(subsEmail),
      });
      if (response.status == 409) {
        toast.warning("Subs already exists");
        console.log("Subs already exists");
      } else if (response.status == 201) {
        toast.success("Subscribed");
        console.log("Subscribed");
      } else {
        toast.error("Unknown Error");
      }
    } catch (error) {
      console.log(`Error sending Subs : ${error.message}`);
    }
  };

  return (
    <>
      <Nav background={true} />
      <section className="contact">
        <div className="head">
          <h2 className="route">Home &gt;&gt; Contact</h2>
        </div>
        <div className="get-in">
          <h1>Get in Touch!</h1>
          <h2>
            Can't Find Your Answers On Our Website? Reach Out To Our Support
            Team.
          </h2>
        </div>
        <div className="container">
          <div className="subscribe">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              fill="#FED255"
              className="bi bi-megaphone-fill"
              viewBox="0 0 16 16"
            >
              <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25 25 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009l.496.008a64 64 0 0 1 1.51.048m1.39 1.081q.428.032.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a66 66 0 0 1 1.692.064q.491.026.966.06" />
            </svg>
            <h1>Subscribe to our emails</h1>
            <h2>Join our mailing list for exclusive offers!</h2>
            <form className="input-submit" onSubmit={handleSubscribeSubmit}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Address"
                value={subsEmail.email}
                onChange={subsInput}
                required
              />
              <button type="submit" className="submit">
                Submit
              </button>
            </form>
            <h3>
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
              Thanks for subscribing
            </h3>
          </div>
          <div className="form">
            <form onSubmit={handleContactSubmit}>
              <div className="inp-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="inp-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="inp-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  minLength="10"
                  maxLength="10"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <textarea
                type="text"
                className="message"
                name="message"
                id="message"
                placeholder="Type your Message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="send">
                Send
              </button>
            </form>
          </div>
        </div>
        <Footer width={"100%"} />
      </section>
    </>
  );
};

export default page;
