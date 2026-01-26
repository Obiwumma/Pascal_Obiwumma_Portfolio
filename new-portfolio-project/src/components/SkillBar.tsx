import React from "react";
import { useEffect } from "react";

const SkillBar = ({ name, level, color }) => {

  useEffect(() => {
  // This will trigger the CSS transition when component mounts
  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach(bar => {
    bar.style.width = bar.style.getPropertyValue('--target-width');
  });
}, []);

  return (
    <div className="skill-item">
      <div className="skill-name">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="progress-bar-container">
        <div 
          className="progress-bar" 
          style={{
            width: `${level}%`,
            backgroundColor: color,
            '--target-width': `${level}%`
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar