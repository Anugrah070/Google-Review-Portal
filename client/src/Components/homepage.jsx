import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import '../Homepage.css'; 

const HomePage = () => {
    const {user,loginWithRedirect,isAuthenticated,logout}=useAuth0();
  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <div className="logo">Review Manager</div>
        
        
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Manage Your Google Business Reviews Effortlessly</h1>
          <p>Centralized platform to track, respond, and analyze your Google reviews.</p>
          <button onClick={e=>{loginWithRedirect()}}>GET STARTED</button>
        </div>
       
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <h3>Review Management</h3>
          <p>View and respond to your customer reviews directly from one place.</p>
        </div>
        <div className="feature">
          <h3>Insights</h3>
          <p>Analyze trends in customer feedback and ratings over time.</p>
        </div>
        <div className="feature">
          <h3>Notifications</h3>
          <p>Stay updated with new reviews and feedback notifications.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Review Manager | Privacy Policy | Terms of Service</p>
      </footer>
    </div>
  );
};

export default HomePage;
