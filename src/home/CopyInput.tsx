import React, { useState } from "react";
import { FaClipboard } from "react-icons/fa6";

interface CopyInputProps {
  name: string;
  userId: string;
}

const CopyInput: React.FC<CopyInputProps> = ({ name, userId }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(userId);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className="relative">
      <div className="text-lg text-slate-600 font-semibold mt-4 mb-1 mx-1 ">
        {name.toLowerCase()}'s user id
      </div>
      <div className="flex items-center w-full rounded-lg border border-slate-300">
        <input
          type="search"
          className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none text-slate-500"
          placeholder="search"
          readOnly
          value={userId}
          onClick={copyToClipboard}
        />
        <button
          type="button"  // Change to type="button" to prevent form submission
          className="flex items-center border-l border-slate-300 justify-center w-12 h-12 rounded-r-lg focus:outline-none active:bg-gray-200 hover:bg-gray-100"
          onClick={copyToClipboard}
        >
          <FaClipboard className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      {isCopied && (
        <div className="absolute top-0 right-0 mt-2 mr-2 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md shadow-md">
          Copied!
        </div>
      )}
    </div>
  );
};

export default CopyInput;
