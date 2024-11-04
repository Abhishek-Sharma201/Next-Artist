import Image from "next/image";
import React from "react";

const AdminAlbumCard = ({ type, imgSrc, price, onDelete }) => {
  return (
    <div className="h-[300px] w-[300px] flex flex-col overflow-hidden items-start justify-between p-4 shadow-lg bg-gray-100 rounded-lg">
      <div className="relative w-full h-[180px] overflow-hidden rounded-lg">
        <Image
          src={imgSrc}
          alt={type}
          objectFit="cover"
          className="rounded-lg h-full w-full object-contain"
          priority={true}
        />
      </div>
      <div className="h-[max-content] w-full mt-2 flex flex-col gap-1">
        <h4 className="text-gray-800 font-semibold">₹{price}</h4>
        <h3 className="text-gray-700 font-medium truncate w-full">{type}</h3>
      </div>
      <button onClick={onDelete} className="mt-4 w-full bg-red-500 text-white font-semibold py-2 rounded hover:bg-red-600 transition">
        Delete
      </button>
    </div>
  );
};

export default AdminAlbumCard;
