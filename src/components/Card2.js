import React from "react";
import Vector from "./Vector 431.png"; 
import Image2 from "./Image2.png"; 

class Card2 extends React.Component {
  render() {
    return (
        <div class="Card2" >
            <img class="Image2" src={Image2} alt="not found"/>
            <div class="Cont2">
            <div class="TextC2">
                <pre>
                <h4 class ="desc2">
                    A Wedding Tale
                </h4>
                <h4 class ="desc22">
                    January 2020
                </h4>
                </pre>
                <button class ="bt2">
                View Project
                <img class="Vector431" src={Vector} alt="not found"/>
                </button>
            </div>
            
            </div>
        </div>
    );
  }
}

export default Card2;