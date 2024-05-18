import React from "react";
import Vector1 from "./Vector 431.png"; 
import Image3 from "./Image3.png"; 

class Card3 extends React.Component {
  render() {
    return (
        <div class="Card3" >
        <img class="Image3" src={Image3} alt="not found"/>
        <div class="Cont3">
          <div class="TextC3">
            <pre>
              <h4 class ="desc3">
                Product Elegance
              </h4>
              <h4 class ="desc33">
                January 2020
              </h4>
            </pre>
            <button class ="bt3">
              View Project
              <img class="Vector431" src={Vector1} alt="not found"/>
            </button>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Card3;