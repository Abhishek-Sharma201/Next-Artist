import Footer from "@/app/Components/Footer/Footer";
import Nav from "@/app/Components/Nav/Nav";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-between">
      <Nav background={true} />
      <section className="w-full px-4 py-5 lg:px-20 mt-4">
        <div className="mb-4">
          <h2 className="text-[1.2rem] font-medium text-gray-900">
            Home &gt;&gt; Privacy
          </h2>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Privacy Policy
          </h1>
        </div>
        <div className="space-y-8 mt-12 px-4 lg:px-20">
          <div className="space-y-2">
            <h1 className="text-lg font-[500] text-gray-800">Introduction</h1>
            <p className="text-gray-700 text-[.9rem] lg:text-[1rem] ">
              We are committed to protecting your privacy. This policy outlines
              how we collect, use, and protect your personal data.
            </p>
          </div>

          <div className="space-y-2">
            <h1 className="text-lg font-[500] text-gray-800">
              Data Collection
            </h1>
            <p className="text-gray-700 text-[.9rem] lg:text-[1rem] ">
              - We collect your name, email, and login credentials via Google or
              Facebook.
              <br />- Contact and subscription details provided by you will be
              stored for communication purposes.
            </p>
          </div>

          <div className="space-y-2">
            <h1 className="text-lg font-[500] text-gray-800">
              Use of Information
            </h1>
            <p className="text-gray-700 text-[.9rem] lg:text-[1rem] ">
              - To facilitate communication via WhatsApp and Gmail. <br />- To
              manage user subscriptions and provide updates on new artwork.
            </p>
          </div>

          <div className="space-y-2">
            <h1 className="text-lg font-[500] text-gray-800">Security</h1>
            <p className="text-gray-700 text-[.9rem] lg:text-[1rem] ">
              We employ secure methods to store and protect your data from
              unauthorized access.
            </p>
          </div>

          <div className="space-y-2">
            <h1 className="text-lg font-[500] text-gray-800">Contact</h1>
            <p className="text-gray-700 text-[.9rem] lg:text-[1rem] ">
              If you have any questions about our Privacy Policy, please contact
              us at raj.artist@example.com.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default page;
