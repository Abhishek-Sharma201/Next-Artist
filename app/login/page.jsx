"use client";
import React, { useEffect, useRef } from "react";
import Nav from "../Componants/Nav/Nav";
import Login from "../Componants/login/LoginPage";
import { useSession } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const { data: session } = useSession();
  const hasShownToast = useRef(false); // Track if toast has been shown

  useEffect(() => {
    if (session && !hasShownToast.current) {
      toast.success(`Logged in as ${session.user?.name}`);
      hasShownToast.current = true;
    }
  }, [session]);

  return (
    <div>
      <Nav background={true} />
      <ToastContainer />
      <Login />
    </div>
  );
};

export default Page;
