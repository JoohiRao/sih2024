// src/Sidebar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaCog} from "react-icons/fa"; // Import icons for example

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`flex ${isOpen ? "w-64" : "w-20"} bg-gray-800  h-screen p-5 pt-8 duration-300 relative`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-9 w-7 h-7 bg-gray-800 border border-gray-700 rounded-full text-white"
      >
        {isOpen ? "<" : ">"}
      </button>
      <div className="flex flex-col justify-between h-full">
        {/* Logo or Title */}
        <div className="text-white text-2xl font-semibold">
          {isOpen ? "Security Dashboard" : "D"}
        </div>

        {/* Navigation Menu */}
        <ul className="mt-[-10%]">
          <li className="flex items-center gap-x-4 p-2 text-gray-300 hover:bg-gray-700 cursor-pointer rounded-md">
            <FaHome />
            {isOpen && <Link to="/">Dashboard</Link>}
          </li>
          <li className="flex items-center gap-x-4 p-2 text-gray-300 hover:bg-gray-700 cursor-pointer rounded-md">
            <FaUser />
            {isOpen && <Link to="/surveillance">Survelliance</Link>}
          </li>
          <li className="flex items-center gap-x-4 p-2 text-gray-300 hover:bg-gray-700 cursor-pointer rounded-md">
            <FaCog />
            {isOpen && <Link to="/database">Database</Link>}
          </li>
          <li className="flex items-center gap-x-4 p-2 text-gray-300 hover:bg-gray-700 cursor-pointer rounded-md">
            <FaCog />
            {isOpen && <Link to="/suspects">Suspects</Link>}
          </li>
          <li className="flex items-center gap-x-4 p-2 text-gray-300 hover:bg-gray-700 cursor-pointer rounded-md">
            <FaCog />
            {isOpen && <Link to="/map">Map View</Link>}
          </li>
          <li className="flex items-center gap-x-4 p-2 text-gray-300 hover:bg-gray-700 cursor-pointer rounded-md">
            <FaCog />
            {isOpen && <Link to="/control">Access Control</Link>}
          </li>
          <li className="flex items-center gap-x-4 p-2 text-gray-300 hover:bg-gray-700 cursor-pointer rounded-md">
            <FaCog />
            {isOpen && <Link to="/settings">Setting</Link>}
          </li>
          {/* Add more links as needed */}
        </ul>

        {/* Footer or Collapse Button */}
        {isOpen && (
          <div className="text-gray-400 text-xs text-center">
            
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
