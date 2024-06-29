import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Navbar from "./Navbar";
import Section from "./Section";

function HomePage() {
  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(1); // Current page
  const [hasMore, setHasMore] = useState(true); // Whether there are more stories to load
  const limit = 10; // Number of stories per page

  useEffect(() => {
    fetchStories(page);
  }, [page]);

  const fetchStories = (page) => {
    fetch(`https://child.onrender.com/api/sciencefiction?page=${page}&limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length < limit) {
          setHasMore(false); // No more stories to load
        }
        setStories((prevStories) => [...prevStories, ...data]);
      })
      .catch((error) => console.error("Error fetching stories:", error));
  };


  const handleNextPage = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  
  return (
    <>
      <div style={{ backgroundColor: "black", color: "white", padding: "20px" }}>
        <Navbar />
        <div className="container text-center">
          <h1>Science Fiction Stories</h1>
          <Section />
          <div className="card-container row p-5">
            {stories.map((story) => (
              <div className="card gradient-bg" style={{ width: "18rem", marginRight: "10px", marginBottom: "20px", padding: "13px" }} key={story._id}>
                <img src={`https://ik.imagekit.io/dev24/${story.Image[0]}`} className="card-img-top" alt={story.Title} />
                <div className="card-body">
                  <h5 className="card-title">{story.Title}</h5>
                  <p className="card-text">{story.Status}</p>
                  <Link to={`/story/${story._id}`} className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
          {page > 1 && (
            <Link
              to="#"
              onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
              style={{ backgroundImage: 'linear-gradient(to bottom right, #6f1c92, #1b91da)', color: 'transparent', WebkitBackgroundClip: 'text', textDecoration: 'none', marginRight: '10px' }}
            >
              Previous
            </Link>
          )}
          {hasMore && (
            <Link
              to="#"
         
              style={{ backgroundImage: 'linear-gradient(to bottom right, #6f1c92, #1b91da)', color: 'transparent', WebkitBackgroundClip: 'text', textDecoration: 'none', marginRight: '10px' }}
            >
              Next
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
