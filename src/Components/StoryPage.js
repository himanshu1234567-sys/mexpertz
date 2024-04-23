import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import StoryPageSection from './StoryPageSection';

function AllStoriesPage() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('https://child.onrender.com/api/sciencefiction')
      .then(response => response.json())
      .then(data => setStories(data))
      .catch(error => console.error('Error fetching stories:', error));
  }, []);

  return (
    <>
     <div style={{ backgroundColor: 'black', color: 'white', padding: '20px', textAlign:'center' }}>
<Navbar/>
<div className='heading ' style={{display:'flex', justifyContent:'center'}}>

<h1 style={{ backgroundImage: 'linear-gradient(to bottom right, #6f1c92, #1b91da)', color: 'transparent', WebkitBackgroundClip: 'text', textDecoration: 'none', marginRight:'10px' }}>
   The Lost City Of 
  </h1>  <h1> Future Earth</h1>
</div>
<StoryPageSection/>
<br></br>
<div class="row">
  <div class="col-4">
  <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={stories} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">alt.....</p>
        <a href="#" className="btn btn-primary"></a>
      </div>
    </div>
  </div>
  <div class="col-sm">

    <div className="container text-center">
      <div className="card-container card-container row">
        {stories.map(story => (
          <div className="card gradient-bg"  style={{
                  width: "18rem",
                  marginRight: "10px",
                  marginBottom: "20px",
                  padding: "13px",
                }} key={story.id}>
            <img src={`https://ik.imagekit.io/dev24/${story.Image}`} alt={story.Title} />
            <div className="card-content">
              <h2>{story.Title}</h2>
              <p>{story.Description}</p>
                 </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>
</div>
    </>
  );
}

export default AllStoriesPage;
