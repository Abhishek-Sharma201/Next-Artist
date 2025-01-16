"use client";
import React from "react";
import "./Hero.css";
import Image from "next/image";
import HandMadeSketchCard from "../Cards/HandMadeSketchCard";
import ShopBtn from "../Buttons/ShopBtn";
import FeaturedProductCard from "../Cards/FeaturedProductCard";
import { FeaturedCardSection, myAlbumSectionsImgs } from "@/app/constants";
import { IMG_10, IMG_12, IMG_17, IMG_18, USER_IMG1 } from "@/app/utils";

const Hero = () => {
  const userPreferencesList = [
    "Postal color Sketch",
    "Customized ball pen Sketch",
    "Handmade charcoal sketch",
    "Single face graphite sketch",
    "Handmade water color sketch",
    "Customized Water color Sketch",
    "Handmade graphite sketch",
    "Customized pencil Sketch",
    "Ball pen Sketch",
    "Water color Sketch",
    "Single face graphite sketch",
    "Customized pencil Sketch",
    "Customized Ball pen Sketch",
    "Graphite Sketch",
    "Single face Ball pen sketch",
    "Couple face graphite Sketch",
    "Single face Water color sketch",
  ];

  // Use a single state object for user data
  const [formData, setFormData] = React.useState({
    email: "",
    preferences: [],
  });

  const [isOpen, setIsOpen] = React.useState(false);

  const close = () => {
    setIsOpen(false);
    setFormData({ ...formData, preferences: [] });
  };

  const handleChange = (event) => {
    const { value, checked } = event.target;

    if (event.target.type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        preferences: checked
          ? [...prevData.preferences, value]
          : prevData.preferences.filter((item) => item !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        email: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsOpen(true);
    console.log("Email:", formData.email);
    console.log("Preferences:", formData.preferences);
  };

  return (
    <React.Fragment>
      <section className="hero-section">
        <div className="hand-made-sketch" id="about">
          <div className="heading">
            <h1>Get Handmade Sketch</h1>
            <h2>Unique & Perfect gift for all</h2>
          </div>
          <div className="sketch">
            <HandMadeSketchCard
              image={IMG_12}
              type={"Graphite Sketch"}
              price={"₹1000 / 4.5 rating"}
            />
            <HandMadeSketchCard
              image={IMG_17}
              type={"Color Pencile Sketch"}
              price={"₹1000 / 4.5 rating"}
            />
            <HandMadeSketchCard
              image={IMG_18}
              type={"Charcoal Sketch"}
              price={"₹1000 / 4.5 rating"}
            />
          </div>
        </div>
        <div className="featured-products" id="feature">
          <div className="head">
            <h1 className="heading">Featured Arts</h1>
            {/* <button className="see-all">See All</button> */}
          </div>
          <div className="featured-card-container">
            {FeaturedCardSection.map((FeatureCard) => {
              return (
                <FeaturedProductCard
                  key={FeatureCard.id}
                  cardImage={FeatureCard.imgUrl}
                  cardTitle={FeatureCard.title}
                  cardPrice={FeatureCard.price}
                />
              );
            })}
          </div>
        </div>
        <div className="my-album-section" id="album">
          <h1 className="head">Pricing</h1>
          <div className="content">
            <div className="text">
              <p>
                Collection of detailed sketches and portraits capturing human
                expressions,emotions, and moments through pencil and charcoal
                artistry.
              </p>
              <ShopBtn value={"View all"} width={"120px"} redirect={"/routes/Album"} />
            </div>
            <div className="imgs">
              {myAlbumSectionsImgs.map((data) => {
                return (
                  <Image
                    src={data.imgUrl}
                    key={data.id}
                    className="album-img"
                    alt={"myAlbumImgs"}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="why-choose-us" id="contact">
          <h1 className="head">Why Choose Us ?</h1>
          <div className="content">
            <div className="svg-container">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-patch-check-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                </svg>
              </div>
              <h2>Top Quality is Our Priority</h2>
            </div>
            <div className="svg-container">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-hand-index-thumb-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716q.113.137.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0" />
                </svg>
              </div>
              <h2>Easy to Order</h2>
            </div>
            <div className="svg-container">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fillRule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                  />
                </svg>
              </div>
              <h2>100% Hand-Drawn Sketch</h2>
            </div>
            <div className="svg-container">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-chat-left-text-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
                </svg>
              </div>
              <h2>24/7 Live chat Support</h2>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="head">
            <h1>Testimonial</h1>
            <h2>What people think about our service</h2>
          </div>
          <div className="container">
            <div className="left">
              <Image
                src={USER_IMG1}
                priority={true}
                className="img"
                alt="img"
              />
            </div>
            <div className="right">
              <p>
                This sketch impresses with its meticulous detail and expressive
                lines. The shading adds depth, while the composition captures a
                perfect blend of realism and artistry
              </p>
              <div className="bottom">
                <div className="left">
                  <h1>John Doe</h1>
                  <h2>Developer</h2>
                </div>
                <div className="kk">
                  <button className="h-[5dvh] w-[40px] outline-none border-none bg-black text-white rounded-md">
                    &lt;
                  </button>
                  <button className="h-[5dvh] w-[40px] outline-none border-none bg-black text-white rounded-md">
                    &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tamplate">
          <div className="container">
            <div className="icon">
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
            </div>
            <h1>GET 10% OFF ON YOUR FIRST ORDER?</h1>
            <h3>Join our Mailing list</h3>
            <form onSubmit={handleSubmit} className="input-submit">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@gmail.com"
                onChange={handleChange}
                value={formData.email}
              />
              <button className="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
      {isOpen ? (
        <div className="w-full h-[100dvh] fixed top-0 left-0 z-99 bg-black bg-opacity-80 flex flex-col items-center justify-center gap-4">
          <form
            onSubmit={handleSubmit}
            className="w-[max-content] h-[max-content] bg-zinc-950 flex flex-col items-start justify-center rounded-[8px] gap-y-4 gap-x-8 shadow-xl p-6"
          >
            <div className="w-[max-content] h-[max-content] flex flex-col items-start justify-around gap-2">
              <label
                htmlFor="preferences"
                className="font-[500] text-[.9rem] text-white"
              >
                User Preferences
              </label>
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-2">
                {userPreferencesList.map((preference, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 text-white text-[.9rem]"
                  >
                    <input
                      type="checkbox"
                      value={preference}
                      onChange={handleChange}
                      className="w-[20px] h-[20px] rounded bg-zinc-800 border border-zinc-800 text-white checked:bg-blue-500 focus:outline-none"
                    />
                    {preference}
                  </label>
                ))}
              </div>
            </div>
            <div className="w-full h-[max-content] flex items-center justify-between gap-4">
              <button
                className="w-[150px] h-[6dvh] p-2 bg-blue-500 text-white font-[500] rounded"
                type="submit"
              >
                Add
              </button>
              <button
                onClick={close}
                className="w-[150px] h-[6dvh] p-2 bg-red-500 text-white font-[500] rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default Hero;
