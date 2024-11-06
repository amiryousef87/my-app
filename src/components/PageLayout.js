import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useLocation } from "react-router-dom"; 
import "./PageLayout.css";

function PageLayout({ children }) {
  const location = useLocation(); 
  return (
    <div className="page-layout">
      
      <main style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: '80vh' }}>
        {children}
        
        
        {location.pathname === "/" && (
          <Link to="https://360.persepolis.ir/Aerial-Persepolis-Tour/" target="_blank">
            <button style={{ 
              padding: '10px 20px', 
              fontSize: '16px', 
              marginTop: '20px', 
              borderRadius: '8px',
              border: 'none', 
              backgroundColor: '#4CAF50', 
              color: 'white', 
              cursor: 'pointer'
            }}>
              تور 360
            </button>
          </Link>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default PageLayout;

