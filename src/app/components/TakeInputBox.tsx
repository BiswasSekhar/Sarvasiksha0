import React from "react";
import { FaPaperPlane } from "react-icons/fa";

interface TextInputWithSendButtonProps {
  input: string;
  loading: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const TextInputWithSendButton: React.FC<TextInputWithSendButtonProps> = ({
  input,
  loading,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full p-4 bg-white"
    >
      <input
        className="w-3/4 p-2 border border-gray-300 rounded-l-full shadow-xl"
        value={input}
        placeholder="Ask something..."
        onChange={handleInputChange}
      />
      <div className="mx-2"></div> {/* Add spacing between the input and the button */}
      <button
        className={`bg-black text-white font-bold py-2 px-4 rounded-full ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={loading}
        type="submit"
      >
        <FaPaperPlane size={20} /> {/* Send icon */}
      </button>
    </form>
  );
};

export default TextInputWithSendButton;
