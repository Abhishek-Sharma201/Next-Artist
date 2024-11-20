import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Container = ({ data }) => {
  const router = useRouter();

  return (
    <div className="w-full h-[max-content] p-4 flex items-center justify-between">
      <div className="h-[max-content] w-[max-content] rounded-lg flex flex-col items-center justify-center">
        <Image
          src={`data:${data.image.contentType};base64,${btoa(
            new Uint8Array(data.image.data.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          )}`}
          alt={data.type}
          priority
          className="h-full w-full object-contain"
        />
      </div>
      <div className="h-full w-full flex flex-col items-start justify-center gap-4 p-4">
        <h1 className="text-[1rem] font-[500] text-zinc-900">{data.type}</h1>
        <p className="text-[.9rem] font-[400] text-zinc-800">
          Price: ${data.price}
        </p>
        <p className="text-[.8rem] font-[400] text-zinc-800">ID: {data._id}</p>
        <button onClick={() => router.back()} className="back-btn">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Container;
