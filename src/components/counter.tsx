const Counter = () => {
  return (
    <>
      <div className="flex items-center flex-col w-full  p-4">
        {/* word count row */}
        <div className="w-full flex justify-center items-center mt-8 gap-20">
          {/* word count */}
          <div className="bg-purple-600 p-2 w-27.5 flex flex-col items-center rounded-md">
            <div className="text-white font-semibold text-lg">Word</div>
            <div className="text-white font-bold text-2xl">2</div>
          </div>

          {/* Letter count */}
          <div className="bg-purple-600 p-2 w-27.5 flex flex-col items-center rounded-md">
            <div className="text-white font-semibold text-lg">Letter</div>
            <div className="text-white font-bold text-2xl">22</div>
          </div>

          {/* Paragraph count */}
          <div className="bg-purple-600 p-2 w-27.5 flex flex-col items-center rounded-md">
            <div className="text-white font-semibold text-lg">Paragraph</div>
            <div className="text-white font-bold text-2xl">1</div>
          </div>
        </div>

        {/* textarea */}
        <textarea
          className="p-2 mt-10 w-full max-w-5xl min-h-[250px] focus:outline-gray-300 border border-gray-300 rounded-md"
          placeholder="Type here..."
        ></textarea>

        <div className="flex gap-2 mt-3">
          <div className="bg-blue-500 p-2 rounded-md text-white">
            Click to UpperCase
          </div>
          <div className="bg-blue-500 p-2 rounded-md text-white">
            Click to LowerCase
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
