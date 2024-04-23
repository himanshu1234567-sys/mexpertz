import React from "react";

import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light text-center" style={{    display: 'flex',
    justifyContent: 'space-around'}}>
        <div className="container-fluid " >
          <h1> BrainyLingo</h1>
          <div className=" mid_sec" >
            <a style={{marginRight:'10px'}}> Home </a>
            <a style={{marginRight:'10px'}}> LeaderBoard </a>
            <a style={{marginRight:'10px'}} > Daily Quize </a>
           
  <a style={{ backgroundImage: 'linear-gradient(to bottom right, #6f1c92, #1b91da)', color: 'transparent', WebkitBackgroundClip: 'text', textDecoration: 'none' }} className="btn d_btn">
   Genre
  </a>
  

          </div>
          <button className="gradient-bg_nav" style={{}}> Sign Out</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
