import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import StoryPageSection from './StoryPageSection';
import './StoryPageSection.css';

function AllStoriesPage() {
  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(1); // Current page
  const [hasMore, setHasMore] = useState(true); // Whether there are more stories to load
  const limit = 8; // Number of stories per page

  useEffect(() => {
    fetchStories(page);
  }, [page]);

  const fetchStories = (page) => {
    fetch(`https://child.onrender.com/api/sciencefiction?page=${page}&limit=${limit}`)
      .then(response => response.json())
      .then(data => {
        if (data.length < limit) {
          setHasMore(false); // No more stories to load
        }
        setStories((prevStories) => [...prevStories, ...data]);
      })
      .catch(error => console.error('Error fetching stories:', error));
  };

  const handleNextPage = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <div style={{ backgroundColor: 'black', color: 'white', padding: '20px', textAlign: 'center' }}>
        <Navbar />
        <div className='heading'>
          <h1 className="gradient-text">The Lost City Of </h1>
          <h1> Future Earth</h1>
        </div>
        <StoryPageSection />
        <br />
        <div className="container  " style={{marginTop:'20px'}} >
          {stories.map((story, index) => (
            index % 4 === 0 && (
              <div className="row  col-sm-8 border_div" key={index}>
                {stories.slice(index, index + 4).map(story => (
                  <div className="col-md-3  " key={story._id}>
                    <div className="card" style={{ marginBottom: '20px' }}>
                      <img className="card-img-top" src={`https://ik.imagekit.io/dev24/${story.Image[0]}`} alt={story.Title} />
                      <div className="card-body">
                        <h5 className="card-title">{story.Title}</h5>
                        <p className="card-text">{story.Description}</p>
                        <a href={`/story/${story._id}`} className="btn btn-primary">Read More</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          ))}
        </div>
        {hasMore && (
          <div className="container btn___" style={{ justifyContent: 'flex-end', marginTop: '20px' }}>
            <button
              onClick={handleNextPage}
              className="button_5"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default AllStoriesPage;
