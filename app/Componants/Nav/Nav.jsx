"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { bannerImage, logoImage } from "@/app/utils";
import Link from "next/link";
import "./Nav.css";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { toast } from "react-toastify";

const Nav = ({ background }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isNavOpened, setIsNavOpened] = useState(false);

  const toggleNav = () => {
    setIsNavOpened(!isNavOpened);
  };

  useEffect(() => {
    if (session) {
      console.log(`${session?.user?.name}`);
    }
  });

  return (
    <div className="wrapper">
      <Image
        className="backImg"
        src={bannerImage}
        style={{ display: background ? `block` : "none" }}
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
                id="wRKXFJsqHCxLE9yyOYHkza_fYgQxDaH069W_gr1"
                x1="9.858"
                x2="38.142"
                y1="9.858"
                y2="38.142"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f44f5a"></stop>
                <stop offset=".443" stop-color="#ee3d4a"></stop>
                <stop offset="1" stop-color="#e52030"></stop>
              </linearGradient>
              <path
                fill="url(#wRKXFJsqHCxLE9yyOYHkza_fYgQxDaH069W_gr1)"
                d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
              ></path>
              <path
                d="M33.192,28.95L28.243,24l4.95-4.95c0.781-0.781,0.781-2.047,0-2.828l-1.414-1.414	c-0.781-0.781-2.047-0.781-2.828,0L24,19.757l-4.95-4.95c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414	c-0.781,0.781-0.781,2.047,0,2.828l4.95,4.95l-4.95,4.95c-0.781,0.781-0.781,2.047,0,2.828l1.414,1.414	c0.781,0.781,2.047,0.781,2.828,0l4.95-4.95l4.95,4.95c0.781,0.781,2.047,0.781,2.828,0l1.414-1.414	C33.973,30.997,33.973,29.731,33.192,28.95z"
                opacity=".05"
              ></path>
              <path
                d="M32.839,29.303L27.536,24l5.303-5.303c0.586-0.586,0.586-1.536,0-2.121l-1.414-1.414	c-0.586-0.586-1.536-0.586-2.121,0L24,20.464l-5.303-5.303c-0.586-0.586-1.536-0.586-2.121,0l-1.414,1.414	c-0.586,0.586-0.586,1.536,0,2.121L20.464,24l-5.303,5.303c-0.586,0.586-0.586,1.536,0,2.121l1.414,1.414	c0.586,0.586,1.536,0.586,2.121,0L24,27.536l5.303,5.303c0.586,0.586,1.536,0.586,2.121,0l1.414-1.414	C33.425,30.839,33.425,29.889,32.839,29.303z"
                opacity=".07"
              ></path>
              <path
                fill="#fff"
                d="M31.071,15.515l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414L18.343,32.485	c-0.391,0.391-1.024,0.391-1.414,0l-1.414-1.414c-0.391-0.391-0.391-1.024,0-1.414l14.142-14.142	C30.047,15.124,30.681,15.124,31.071,15.515z"
              ></path>
              <path
                fill="#fff"
                d="M32.485,31.071l-1.414,1.414c-0.391,0.391-1.024,0.391-1.414,0L15.515,18.343	c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0l14.142,14.142	C32.876,30.047,32.876,30.681,32.485,31.071z"
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
            <Link href="/routes/Likes">Likes</Link>
          </li>
          <li className="navItem">
            <Link href="/routes/Collection">Collection</Link>
          </li>
          <li className="navItem">
            <Link href="/routes/Contact">Contact</Link>
          </li>
          {session?.user?.email === "abhishek.webdev001@gmail.com" ||
          session?.user?.email === "abhisheksharma52962@gmail.com" ? (
            <li className="navItem">
              <Link href="/routes/Admin">Admin</Link>
            </li>
          ) : (
            ""
          )}
          {isNavOpened ? (
            session ? (
              <button
                className="text-white hover:border border-yellow-400 p-2 px-4 rounded-md w-[80px]"
                onClick={async () => {
                  await signOut();
                  toast.warn("Logged Out");
                }}
              >
                Logout
              </button>
            ) : (
              <button className="text-white bg-yellow-400 p-2 px-4 rounded-md w-[80px]">
                <Link href={"/login"}>Login</Link>
              </button>
            )
          ) : (
            ""
          )}
        </ul>
        <div className="icons">
          {session ? (
            <button
              className="text-white hover:border border-yellow-400 p-4 px-4 rounded-md"
              onClick={async () => {
                await signOut();
                toast.warn("Logged Out");
              }}
            >
              Logout
            </button>
          ) : (
            <Link
              href={"/login"}
              className="text-white bg-yellow-500 py-[.7rem] px-6 rounded-md"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
