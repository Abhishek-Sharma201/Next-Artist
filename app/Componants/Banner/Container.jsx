import React from "react";

const Container = ({ data }) => {
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
      <div className="">
        <h1>{data.type}</h1>
        <p>Price: ${data.price}</p>
        <p>ID: {data._id}</p>
        <button onClick={() => router.back()} className="back-btn">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Container;
