import React from "react";

const ReviewBox = ({ data }) => {
  return (
    <div className="h-[max-content] w-[300px] flex flex-col items-center justify-start gap-4">
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
        Other people Reviews
      </div>
      <div className="w-full h-[30dvh] p-2 flex flex-col items-center justify-start gap-2 overflow-y-auto overflow-x-hidden border border-l-0 border-r-0 border-t-zinc-300 border-b-zinc-300">
        <div className="relative h-[max-content] w-[160px] flex flex-col items-start justify-center p-2 self-start bg-blue-500 text-white text-[.7rem] rounded-md gap-2">
          <p>
            Other reviews
            <br />
            <span className="text-[.6rem] text-gray-300 self-end">
              timestamp
            </span>
          </p>
        </div>
        <div className="relative h-[max-content] w-[160px] flex flex-col items-start justify-center p-2 self-end bg-zinc-900 text-white text-[.7rem] rounded-md gap-2">
          <p>
            My review
            <br />
            <span className="text-[.6rem] text-gray-400 self-end">
              timestamp
            </span>
          </p>
        </div>
      </div>
      <form className="w-full h-[max-content] p-2 flex items-center justify-center gap-2">
        <input
          type="text"
          name="review"
          id="review"
          placeholder="Give your review here..."
          className="w-full h-[6dvh] border shadow-md px-2 rounded-md text-[.9rem] text-zinc-900 placeholder:text-zinc-800 placeholder:text-[.8rem]"
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
