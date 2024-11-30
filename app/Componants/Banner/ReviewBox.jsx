import React from "react";

const ReviewBox = ({ data }) => {
  return (
    <div className="h-[max-content] w-[300px] flex flex-col items-center justify-center gap-4">
      <div className="w-full h-[max-content] p-4 flex flex-col items-center justify-center">
        {"<ReviewBox />"}
      </div>
      <form className="w-full h-[max-content] p-2 flex items-center justify-center gap-2">
        <input
          type="text"
          name="review"
          id="review"
          placeholder="Give your review here..."
          className="w-full h-[6dvh] border shadow-md px-2 rounded-md text-[.9rem] text-zinc-900 placeholder:text-zinc-800 placeholder:text-[.8rem]"
        />
        <button type="submit" className="w-[100px] h-[6dvh] bg-blue-600 text-white rounded-md text-[.8rem]">
          Send
        </button>
      </form>
    </div>
  );
};

export default ReviewBox;
