import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard=()=>{
    const[reviews,setReviews]=useState([]);
    const[replies,setreplies]=useState({});
    const {user,loginWithRedirect,isAuthenticated,logout}=useAuth0();
    

    useEffect(()=>{
        const getreviews=async()=>{
            const response=await fetch('http://localhost:5000/api/reviews');
            const data=await response.json();
            setReviews(data);

        };
        getreviews();

    },[]

    )
    const handleinput=(e,reviewid)=>{
      const newReplies={...replies,[reviewid]:e.target.value};
      setreplies(newReplies);

    }

    const handleReplySubmit=async(reviewid)=>{
      const reply = replies[reviewid];
    if (reply) {
      const response = await fetch(`http://localhost:5000/api/reviews/${reviewid}/reply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reply }),
      });
      const data=await response.json();
      alert(data.message);
      setreplies({...replies,[reviewid]:""});
    } else{
      alert("please enter a reply");
    }
  
  };
    let totalReviews= reviews.length
   
    return (
            
            <div className="dashboard-container">
              {/* Navbar  */}
                <div className='navbar_dashboard'>
                    <>
                    <h1>Review system Dashboard</h1>
                    <h3>Hello {user.name}</h3>
                    </>
                
                 <button onClick={e=>{logout()}}>Logout</button>
                </div>
              {/* Summary Section */}
              <section className="summary-section">
                <div className="summary-card">
                  <h3>Total Reviews</h3>
                  <p id="total-reviews">{totalReviews}</p>
                </div>
                
                
              </section>
        
              {/* Reviews Section */}
              <section className="reviews-section">
                <h2>All Reviews</h2>
                <ul className="reviews-list">
                  {reviews.map((review, index) => (
                    <li key={index} className="review-item">
                      <strong>{review.name}</strong> <span className="rating">(Rating: {review.rating})</span>
                      <p>"{review.comment}"</p>

                      <input type="text" className="textbox"  value={replies[review.id]||""}  placeholder="Write a reply..." onChange={(e) => handleinput(e, review.id)}
            />
                    <button onClick={() => handleReplySubmit(review.id)}>Submit Reply</button>
                      
                    </li>
                  ))}
                </ul>
              </section>
        
              
            </div>

        
        
    );
};

export default Dashboard;