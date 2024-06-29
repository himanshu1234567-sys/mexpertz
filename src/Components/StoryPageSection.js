import React from 'react';
import "./StoryPageSection.css";

const StoryPageSection = () => {
  return (
    <>
      <div className=' btn___'>
        <button className="button_5">
        <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/external-explorer-jungle-vitaliy-gorbachev-fill-vitaly-gorbachev.png"  alt="new-icon" className="icon" />
          Word Explorer</button>
        <button className="button_6">
        <img src="https://img.icons8.com/papercut/60/new--v1.png" alt="new-icon" className="icon" />
          Story Adventure</button>
        <button className="button_7">
        <img src="https://img.icons8.com/ios/50/quest.png" alt="new-icon" className="icon" />
          Brain Quest</button>
      </div>
      <span className='s_tag'>Drag pictures to the matching Words, light up correct pairs, shake for a retry</span>
    </>
  );
};

export default StoryPageSection;
