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
        </div>
        <ul className={`navList ${isNavOpened ? "navListOpened" : ""}`}>
          <li className="navItem">
            <Link href="/">Home</Link>
          </li>
          <li className="navItem">
            <Link href="/routes/About">About</Link>
          </li>
          <li className="navItem">
            <Link href="/routes/Album">Album</Link>
          </li>
          <li className="navItem">
            <Link href="/routes/Collection">Collection</Link>
          </li>
          <li className="navItem">
            <Link href="/routes/Contact">Contact</Link>
          </li>
          <li className="navItem">
            <Link href="/routes/Admin">Admin</Link>
          </li>
          {/* {session?.user?.email === "abhishek.webdev001@gmail.com" ||
          session?.user?.email === "abhisheksharma52962@gmail.com" ? (
            <li className="navItem">
              <Link href="/routes/Admin">Admin</Link>
            </li>
          ) : (
            ""
          )} */}
          {isNavOpened ? (
            session ? (
              <button
                className="text-white hover:border border-yellow-400 p-2 px-4 rounded-md"
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
                className="text-white hover:border border-yellow-400 p-2 px-4 rounded-md"
              >
                Login
              </Link>
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
              className="text-white hover:border border-yellow-400 p-4 px-4 rounded-md"
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
