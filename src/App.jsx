import React,{useState,useEffect}from "react";
import Form from "./components/Form";
// import Sheet from "./components/Sheet";
import Nav from "./components/Nav";
function App() {
const [details,setDetails]=useState(JSON.parse(localStorage.getItem("table-app")) || []);

function pushDetails(pushedObj){
  setDetails((obj)=>{
    return [...obj,pushedObj];
    
 });   
}
useEffect(() => {
  localStorage.setItem("table-app", JSON.stringify(details));
}, [details]);
  return (
    <div >
      <Nav/>
      <Form  pushDetails={pushDetails}
      details={details}/>
      
    </div>
  );
}

export default App;
