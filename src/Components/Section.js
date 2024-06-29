import React from 'react';
import "./Section.css";

const Section = () => {
  return (
    <div className=' btn__'>
      <button className="button_">
        <img src="https://img.icons8.com/papercut/60/new--v1.png" alt="new-icon" className="icon" />
        New
      </button>
      <button className="button_2">
        <img src="https://img.icons8.com/plasticine/100/in-progress.png" alt="in-progress" className="icon" />

        <span>In Progress</span>
      </button>
      <button className="button_3">
        <img src="https://img.icons8.com/plasticine/100/task-completed.png" alt="task-completed" className="icon" />
        <span style={{marginRight:'10px'}}>Completed</span>
      </button>
      <button className="button_4">
        <img src="https://img.icons8.com/pulsar-gradient/48/delete-view.png" alt="delete-view" className="icon" />

        Clear All
      </button>
    </div>
  );
};

export default Section;
