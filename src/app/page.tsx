'use client'
import type { Message } from "ai/react";
import { useChat } from "ai/react";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TextInputBox from "./components/TakeInputBox";
import { FaUser, FaRobot } from "react-icons/fa";
import CommunityTab from "./components/CommunityTab";
import LearningCircleTab from "./components/LearningCircleTab";

type Tab = "history" | "profile" | "community" | "learningCircle";

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
    initialInput: "Ask me anything about the Kerala government school syllabus!",
  });

  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("history");
  const [chatKey, setChatKey] = useState(Date.now());

  const handleNewChat = () => {
    setChatKey(Date.now());
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "history":
        return (
          <div className="p-4">
            {messages.map((m: Message) => (
              <div
                key={m.id}
                className={`flex items-start mb-4 ${
                  m.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div className="mr-2">
                  {m.role === "user" ? <FaUser size={24} /> : <FaRobot size={24} />}
                </div>
                <div
                  className={`p-3 rounded-lg ${
                    m.role === "user"
                      ? "bg-gray-300 text-black rounded-br-none max-w-xs"
                      : "bg-white border border-gray-300 rounded-none max-w-4xl"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>
        );
      case "profile":
        return <div className="p-4">Profile Settings Content</div>;
      case "community":
        return <CommunityTab />;
      case "learningCircle":
        return <LearningCircleTab />;
      default:
        return null;
    }
  };

  return (
    <div className="flex w-full h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex flex-col w-4/5 h-screen py-24 px-8">
        <button
          onClick={handleNewChat}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          New Chat
        </button>
        <div className="flex-1 overflow-y-auto">{renderTabContent()}</div>
        {activeTab === "history" && (
          <TextInputBox
            key={chatKey}
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
}
