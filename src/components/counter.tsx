import { useState } from "react";

const Counter = () => {
  const [text, setText] = useState("");

  // counts
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const letterCount = text.replace(/\s/g, "").length;
  const paragraphCount = text.trim() === "" ? 0 : text.split(/\n+/).length;

  // actions
  const handleUpperCase = () => setText(text.toUpperCase());
  const handleLowerCase = () => setText(text.toLowerCase());

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-200 flex justify-center p-6">
      <div className="w-full max-w-6xl bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6">
        {/* Counter Row */}
        <div className="flex justify-center items-center gap-12 mt-6 flex-wrap">
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-4 w-36 rounded-xl shadow-lg text-center">
            <div className="text-white text-sm font-medium">Words</div>
            <div className="text-white text-3xl font-bold">{wordCount}</div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 w-36 rounded-xl shadow-lg text-center">
            <div className="text-white text-sm font-medium">Letters</div>
            <div className="text-white text-3xl font-bold">{letterCount}</div>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-4 w-36 rounded-xl shadow-lg text-center">
            <div className="text-white text-sm font-medium">Paragraphs</div>
            <div className="text-white text-3xl font-bold">
              {paragraphCount}
            </div>
          </div>
        </div>

        {/* Textarea */}
        <textarea
          className="
            mt-10
            w-full
            min-h-[260px]
            p-4
            rounded-xl
            border border-gray-300
            focus:outline-none
            focus:ring-2 focus:ring-purple-400
            resize-none
            text-gray-800
            shadow-sm
          "
          placeholder="Type your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handleUpperCase}
            className="
              px-6 py-2
              rounded-xl
              text-white font-semibold
              bg-gradient-to-r from-blue-500 to-indigo-500
              hover:from-blue-600 hover:to-indigo-600
              transition shadow-md
            "
          >
            Uppercase
          </button>

          <button
            onClick={handleLowerCase}
            className="
              px-6 py-2
              rounded-xl
              text-white font-semibold
              bg-gradient-to-r from-purple-500 to-pink-500
              hover:from-purple-600 hover:to-pink-600
              transition shadow-md
            "
          >
            Lowercase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
