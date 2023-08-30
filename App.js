import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import ReactGridLayout from "./components/Body";


const App = ()=>
   (
   <>
   <Header/>
   <ReactGridLayout columns={6} numBoxes={100}/>
   
   </>
   ) 

    
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);