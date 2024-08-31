import React, { Dispatch, SetStateAction } from "react";

type Tab = "history" | "profile" | "community" | "learningCircle";

interface SidebarProps {
  activeTab: Tab;
  setActiveTab: Dispatch<SetStateAction<Tab>>;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-1/5 bg-gray-200 p-4">
      <h2 className="font-bold mb-4">Menu</h2>
      <ul>
        <li
          className={`mb-2 cursor-pointer ${activeTab === "history" ? "font-bold" : ""}`}
          onClick={() => setActiveTab("history")}
        >
          History
        </li>
        <li
          className={`mb-2 cursor-pointer ${activeTab === "profile" ? "font-bold" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          Profile Settings
        </li>
        <li
          className={`mb-2 cursor-pointer ${activeTab === "community" ? "font-bold" : ""}`}
          onClick={() => setActiveTab("community")}
        >
          Community
        </li>
        <li
          className={`mb-2 cursor-pointer ${activeTab === "learningCircle" ? "font-bold" : ""}`}
          onClick={() => setActiveTab("learningCircle")}
        >
          Learning Circle
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
