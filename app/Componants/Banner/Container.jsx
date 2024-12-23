"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import ShopBtn from "../Buttons/ShopBtn";
import { IMG_11 } from "@/app/utils";

const Container = ({ data }) => {
  const router = useRouter();

  return (
    <div className="w-full h-[max-content] p-4 flex flex-col lg:flex-row items-center justify-center self-center gap-12">
      <div className="h-[50dvh] lg:h-[70dvh] w-[max-content] rounded-lg overflow-hidden  flex flex-col items-center justify-center">
        <Image
          src={data?.image?.url || ""}
          // src={IMG_11}
          alt={data?.type}
          priority
          className="h-full w-full object-contain"
        />
      </div>
      <div className="h-full w-{max-content} flex flex-col items-start justify-center gap-4 p-4">
        <h1 className="text-[2.5rem] font-[500] text-zinc-900">{data?.type}</h1>
        <p className="text-[1.3rem] font-[400] text-zinc-800">
          Price: ₹{data?.price}
        </p>
        <h2 className="h-[max-content] w-{max-content} flex items-start justify-center gap-2 py-2">
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
          Available
        </h2>
        <p className="text-[.8rem] font-[400] text-zinc-800">ID: {data?._id}</p>
        <ShopBtn
          value={"Order on WhatsApp"}
          redirect={`https://wa.me/918108812687`}
          height={"7dvh"}
          width={"max-content"}
          bg={"#189D0E"}
          color={"white"}
          paddingRight={".5rem"}
          paddingLeft={".5rem"}
        />
        <ShopBtn
          value={"Go Back"}
          redirect={"/routes/Pricing"}
          height={"7dvh"}
          width={"max-content"}
          paddingRight={".5rem"}
          paddingLeft={".5rem"}
        />
      </div>
    </div>
  );
};

export default Container;
