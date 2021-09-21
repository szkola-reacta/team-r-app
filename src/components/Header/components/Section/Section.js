import { useRef } from "react";

import "./Section.scss";

const Section = ({ sectionName }) => {
  const section = useRef();

  const handleOnMouseEnter = () => {
    console.log(sectionName)
  }

  return (
    <div
    className="Section"
    ref={section}
    onMouseEnter={handleOnMouseEnter}
    >
      {sectionName}
    </div>
  );
}

export default Section;