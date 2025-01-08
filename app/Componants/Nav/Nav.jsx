"use client";

import React, { useState } from "react";
import Image from "next/image";
import { bannerImage, logoImage } from "@/app/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  SignOutButton,
  SignUpButton,
  useAuth,
} from "@clerk/nextjs";

import "./Nav.css";

const Nav = ({ background }) => {
  const { userId } = useAuth();
  const [isNavOpened, setIsNavOpened] = useState(false);
  const router = useRouter();
  const { user } = useUser();

  const toggleNav = () => setIsNavOpened(!isNavOpened);

  const isAdmin = user?.emailAddresses.some(
    (email) =>
      email.emailAddress === "abhishek.webdev001@gmail.com" ||
      email.emailAddress === "abhisheksharma52962@gmail.com"
  );

  return (
    <div className="wrapper">
      <Image
        className="backImg"
        src={bannerImage}
        style={{ display: background ? "block" : "none" }}
        priority={true}
        alt="backImg"
      />
      <nav className={`navBar ${isNavOpened ? "navBarOpened" : ""}`}>
        <div className="navLogo">
          <Image
            className="logoImage"
            priority={true}
            src={logoImage}
            alt="Logo"
          />
        </div>
        <div className="menu-btn" onClick={toggleNav}>
          {isNavOpened ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 48 48"
            >
              <linearGradient
                id="hbE9Evnj3wAjjA2RX0We2a_OZuepOQd0omj_gr1"
                x1="7.534"
                x2="27.557"
                y1="7.534"
                y2="27.557"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#f44f5a"></stop>
                <stop offset=".443" stopColor="#ee3d4a"></stop>
                <stop offset="1" stopColor="#e52030"></stop>
              </linearGradient>
              <path
                fill="url(#hbE9Evnj3wAjjA2RX0We2a_OZuepOQd0omj_gr1)"
                d="M42.42,12.401c0.774-0.774,0.774-2.028,0-2.802L38.401,5.58c-0.774-0.774-2.028-0.774-2.802,0	L24,17.179L12.401,5.58c-0.774-0.774-2.028-0.774-2.802,0L5.58,9.599c-0.774,0.774-0.774,2.028,0,2.802L17.179,24L5.58,35.599	c-0.774,0.774-0.774,2.028,0,2.802l4.019,4.019c0.774,0.774,2.028,0.774,2.802,0L42.42,12.401z"
              ></path>
              <linearGradient
                id="hbE9Evnj3wAjjA2RX0We2b_OZuepOQd0omj_gr2"
                x1="27.373"
                x2="40.507"
                y1="27.373"
                y2="40.507"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#a8142e"></stop>
                <stop offset=".179" stopColor="#ba1632"></stop>
                <stop offset=".243" stopColor="#c21734"></stop>
              </linearGradient>
              <path
                fill="url(#hbE9Evnj3wAjjA2RX0We2b_OZuepOQd0omj_gr2)"
                d="M24,30.821L35.599,42.42c0.774,0.774,2.028,0.774,2.802,0l4.019-4.019	c0.774-0.774,0.774-2.028,0-2.802L30.821,24L24,30.821z"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5.0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          )}
        </div>
        <ul className={`navList ${isNavOpened ? "navListOpened" : ""}`}>
          <li className="navItem">
            <Link href="/">Home</Link>
          </li>
          <li className="navItem">
            <Link href="/routes/About">About</Link>
          </li>
          <li className="navItem">
            <Link href="/routes/Pricing">Pricing</Link>
          </li>
          <li className="navItem">
            <Link href="/routes/Contact">Contact</Link>
          </li>
          <li className="navItem">
            <Link href={`/routes/Like/${userId}`}>Like</Link>
          </li>
          {isAdmin && (
            <li className="navItem">
              <Link href="/routes/Admin">Admin</Link>
            </li>
          )}
          <SignedOut>
            <SignUpButton>
              <button className="p-4 bg-blue-600 text-white hover:bg-blue-500 rounded-md">
                Login
              </button>
            </SignUpButton>
          </SignedOut>
          <UserButton />
          <SignedIn>
            <SignOutButton>
              <button className="p-4 bg-red-600 text-white hover:bg-red-500 rounded-md">
                Logout
              </button>
            </SignOutButton>
          </SignedIn>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
