import React from "react";



import Subcontainer from "./components/Subcontainer";
import Subcontainer2 from "./components/Subcontainer2";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";




class App extends React.Component{
  render(){
    return(
      
      <div className="back">
        <Subcontainer/>
        <Subcontainer2/>
        <div>
          <Card2/>
        </div>
        <div>
          <Card3/>
        </div>
     
     
      </div>

     

    )

  }

}

export default App