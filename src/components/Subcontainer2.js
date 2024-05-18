import React from "react";
import Vector431 from "./Vector 431.png"; 
import Image from "./Image.png"; 

class Subcontainer2 extends React.Component {
  render() {
    return (
      <div className="Subcontainer">
        <div className="Card">
          <img className="Image" src={Image} alt="Not found" /> 
          <div className="Cont">
            <div className="TextC">
              <pre>
                <h4 className="desc">Faces of Resilience</h4>
                <h4 className="desc1">March 2022</h4>
              </pre>
              <div className="B">
                <button className="bt">
                  View Project
                  <img className="Vector431" src={Vector431} alt="Not found" /> 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Subcontainer2;