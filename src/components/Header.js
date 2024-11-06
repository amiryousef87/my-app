import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFolder } from "react-icons/fa"; 
import "./Header.css";
import Menubar from "./Menubar";

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [textVisible, setTextVisible] = useState(true); 

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleHomeClick = () => {
    setTextVisible(false); 
  };

  return (
    <header className="header">
      <div className="menu">
        <div className="menu-item">
          <Link
            to="/knowledge"
            onMouseEnter={() => {
              toggleDropdown("knowledge");
              setHoveredMenu("knowledge");
            }}
          >
            <FaFolder />
          </Link>
          {activeDropdown === "knowledge" && (
            <div className="dropdown-content"></div>
          )}
          {textVisible && hoveredMenu === "knowledge" && (
            <div className="page-name">دانستنی‌ها</div>
          )}
        </div>

        <div className="menu-item">
          <Link
            to="/about"
            onMouseEnter={() => {
              toggleDropdown("about");
              setHoveredMenu("about");
            }}
          >
            <FaFolder />
          </Link>
          {activeDropdown === "about" && (
            <div className="dropdown-content"></div>
          )}
          {textVisible && hoveredMenu === "about" && (
            <div className="page-name">درباره</div>
          )}
        </div>

        <div className="menu-item">
          <Link
            to="/knowledge-base"
            onMouseEnter={() => {
              toggleDropdown("knowledge-base");
              setHoveredMenu("knowledge-base");
            }}
          >
            <FaFolder />
          </Link>
          {activeDropdown === "knowledge-base" && (
            <div className="dropdown-content"></div>
          )}
          {textVisible && hoveredMenu === "knowledge-base" && (
            <div className="page-name">پایگاه دانش</div>
          )}
        </div>

        <div className="menu-item">
          <Link
            to="/achaemenids"
            onMouseEnter={() => {
              toggleDropdown("achaemenids");
              setHoveredMenu("achaemenids");
            }}
          >
            <FaFolder />
          </Link>
          {activeDropdown === "achaemenids" && (
            <div className="dropdown-content"></div>
          )}
          {textVisible && hoveredMenu === "achaemenids" && (
            <div className="page-name">اثار هخامنشی</div>
          )}
        </div>

        <div className="menu-item">
          <Link to="/" onClick={handleHomeClick}>
            <FaFolder />
          </Link>
          <div className="page-name">خانه</div>
        </div>
      </div>

      <Menubar />
      <div className="language-selector">
        <select>
          <option value="fa">FA</option>
          <option value="en">EN</option>
        </select>
      </div>
    </header>
  );
}

export default Header;