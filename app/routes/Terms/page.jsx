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
            Home &gt;&gt; Terms
          </h2>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Terms & Conditions
          </h1>
        </div>
        <div className="space-y-8 mt-12 px-4 lg:px-20">
          <div className="space-y-2">
            <h1 className="text-lg font-[500] text-gray-800">Introduction</h1>
            <p className="text-gray-700 text-[.9rem] lg:text-[1rem] ">
              Welcome to our website. By accessing or using our site, you agree
              to the following terms and conditions. Please read them carefully.
            </p>
          </div>

          <div className="space-y-2">
            <h1 className="text-lg font-[500] text-gray-800">
              User Responsibilities
            </h1>
            <p className="text-gray-700 text-[.9rem] lg:text-[1rem] ">
              - You agree not to misuse the website or its services. <br />- Do
              not use the site to upload harmful content or spam. <br />- You
              are responsible for maintaining the confidentiality of your login
              information.
            </p>
          </div>

          <div className="space-y-2">
            <h1 className="text-lg font-[500] text-gray-800">
              Intellectual Property
            </h1>
            <p className="text-gray-700 text-[.9rem] lg:text-[1rem] ">
              - All images and content on the website belong to the artist
              unless otherwise noted. <br />- Unauthorized use or reproduction
              of the content is prohibited without prior permission.
            </p>
          </div>

          <div className="space-y-2">
            <h1 className="text-lg font-[500] text-gray-800">
              Limitation of Liability
            </h1>
            <p className="text-gray-700 text-[.9rem] lg:text-[1rem] ">
              We are not responsible for any damages arising from the use of
              this website or any linked services, including WhatsApp and Gmail.
            </p>
          </div>

          <div className="space-y-2">
            <h1 className="text-lg font-[500] text-gray-800">
              Amendments to Terms
            </h1>
            <p className="text-gray-700 text-[.9rem] lg:text-[1rem] ">
              We reserve the right to update these terms at any time. Users will
              be notified of significant changes, and it is your responsibility
              to review them regularly.
            </p>
          </div>

          <div className="space-y-2">
            <h1 className="text-lg font-[500] text-gray-800">Contact</h1>
            <p className="text-gray-700 text-[.9rem] lg:text-[1rem] ">
              If you have any questions about our Terms & Conditions, please
              contact us at{" "}
              <span className="font-[500]">rajsketchartist@gmail.com</span>.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default page;
