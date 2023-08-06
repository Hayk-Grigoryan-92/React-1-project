import React from "react";
import "./style.scss";
import secondImage from "../../../assets/images/photo-3.jpg";

class SecondarySection extends React.Component {
  render() {
    return (
      <div
        className="secondarySection"
        style={{ background: `url(${secondImage})` }}
      >
        <p>Secondary Column</p>
      </div>
    );
  }
}

export default SecondarySection;
