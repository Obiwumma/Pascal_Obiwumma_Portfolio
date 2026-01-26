import { useEffect } from "react";

interface skillBarProps {
  name : string;
  level: number;
  color: string

}
const SkillBar = ({ name, level, color }: skillBarProps) => {

  useEffect(() => {
  // This will trigger the CSS transition when component mounts
  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach((bar) => {
    const element = bar as HTMLElement; 
    element.style.width = element.style.getPropertyValue('--target-width');
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
          style ={{
            width: `${level}%`,
            backgroundColor: color,
            '--target-width': `${level}%`
          } as React.CSSProperties } 
        ></div>
      </div>
    </div>
  );
};

export default SkillBar