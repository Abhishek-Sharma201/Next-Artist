import Footer from "@/app/Componants/Footer/Footer";
import Nav from "@/app/Componants/Nav/Nav";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col items-start justify-between">
      <Nav background={true} />
      <div className="flex flex-col items-start justify-between px-4 lg:px-20 mt-[2rem]">
        <div className="mb-4">
          <h2 className="text-[1.2rem] font-medium text-gray-900">
            Home &gt;&gt; Likes
          </h2>
        </div>
        <h1 className="mt-8 text-[1.2rem]">Likes Page</h1>
      </div>
      <Footer />
    </main>
  );
};

export default page;
