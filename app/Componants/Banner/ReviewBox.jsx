"use client";

import { apiURL } from "@/app/constants";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ReviewBox = ({ reviews, id, fetchReview }) => {
  const { data: session } = useSession();

  const [form, setForm] = useState({
    message: "",
    user: session?.user?.name,
    drawingId: id,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      user: session?.user?.name,
      drawingId: id,
    }));
  }, [session, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!session) {
      toast.error("You must be Logged in!");
      return;
    }
    try {
      const res = await fetch(`${apiURL}/api/review/postReview`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to post review");
      }

      toast.success("Review added!");
      setForm({ ...form, message: "" });
    } catch (error) {
      console.error(`Error adding Review!: ${error.message}`);
      toast.error("Error adding review");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${apiURL}/api/review/deleteReview/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (!res) throw new Error("Error deleting review! from res.");
      toast.warning("Review deleted!");
      console.log(`Review deleted: ${id}`);
      await fetchReview();
    } catch (error) {
      console.log(`Error deleted Review: ${id}`);
      toast.error("Error deleting review!");
    }
  };

  const fakeReview = [
    {
      user: "test@1",
      message: "Fake review -1",
      createdAt: "2024-12-23T08:06:53.406Z",
    },
    {
      user: "test@2",
      message: "Fake review -2",
      createdAt: "2024-12-23T08:06:53.406Z",
    },
  ];

  const isMine = session?.user?.name !== reviews.user;

  return (
    <div className="h-[max-content] w-[300px] lg:w-[600px] md:w-[500px] flex flex-col items-center justify-start gap-4 mt-6">
      <div className="flex items-center justify-center gap-4 h-[max-content] w-[max-content]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-chat-left-text"
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
          <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
        </svg>
        Other People's Reviews
      </div>
      <div className="w-full h-[30dvh] p-2 flex flex-col items-center justify-start gap-2 overflow-y-auto overflow-x-hidden border border-l-0 border-r-0 border-t-zinc-300 border-b-zinc-300">
        {reviews && reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div
              key={index}
              className={`relative h-[max-content] w-[240px] lg:w-[300px] flex flex-col items-start justify-center p-3 ${
                isMine ? "bg-zinc-900 self-end" : "bg-blue-500 self-start "
              } text-white rounded-md gap-[.1rem]`}
            >
              <h6 className="text-[.7rem] text-[#fed255] h-[max-content] w-full flex items-center justify-between">
                {review.user}
                {isMine ? (
                  <svg
                    width="12"
                    height="12"
                    fill="#fed255"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                    onClick={() => handleDelete(review._id)}
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                  </svg>
                ) : (
                  ""
                )}
              </h6>
              <p className="text-[.8rem]">{review.message}</p>
              <span
                className={`text-[.6rem] text-gray-400 self-end ${
                  isMine ? "" : "text-white"
                }`}
              >
                {new Date(review.createdAt).toDateString()}
              </span>
            </div>
          ))
        ) : (
          <p className="text-zinc-500 text-sm">No reviews yet. Be the first!</p>
        )}
      </div>

      <form
        className="w-full h-[max-content] p-2 flex items-center justify-center gap-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="message"
          id="message"
          onChange={handleChange}
          value={form.message}
          placeholder="Give your review here..."
          className="w-full h-[6dvh] border shadow-sm px-2 rounded-md text-[.8rem] text-zinc-900 placeholder:text-zinc-800 placeholder:text-[.7rem]"
          required
        />
        <button
          type="submit"
          className="w-[100px] h-[6dvh] bg-blue-600 text-white rounded-md text-[.8rem]"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ReviewBox;
