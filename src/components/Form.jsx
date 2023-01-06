import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';


import Sheet from "./Sheet";
function Form(props){

const [detail,setDetail]=useState( {
  Sl_No:"",      
  Student_Name: "",
  Roll_Number:"",
  Check_in_Time:"",
  Check_out_Time:""
}
);
 
function handleChange(event){
const name=event.target.name;
const value=event.target.value;
// console.log(name,value);
setDetail(obj=>{
return {
  ...obj,[name]:value
}
});

console.log(detail);
}
function Submit(event){

  props.pushDetails(detail);

  event.preventDefault();
  
 } 





console.log(props.details)

    return(
       <div>

<div class="split left">

<div class="form">
        <form  >
        

 
        <div class="form-row">
          <div class="col-md-10 mb-3">
            <label >Name</label>
            <input value={detail.value} onChange={handleChange} name="Student_Name" type="text" class="form-control" id="validationDefault01" placeholder="Name"  required />
          </div>
          <div class="col-md-10 mb-3">
            <label>Roll Number</label>
            <input value={detail.value}  onChange={handleChange} name="Roll_Number" type="text" class="form-control" id="validationDefault02" placeholder="Roll Number"  required />
          </div>
          <div class="col-md-10 mb-3">
            <label >Check-In Time</label>
            <input value={detail.value}  onChange={handleChange}  name="Check_in_Time" type="time" class="form-control" id="validationDefault02"  required />
          </div>

          <div class="col-md-10 mb-3">
            <label >Check-Out Time</label>
            <input value={detail.value}  onChange={handleChange} name="Check_out_Time"  type="time" class="form-control" id="validationDefault02"   required />
          </div>
        </div>
        <button onClick={Submit}  class="space btn btn-primary btn-lg " type="submit" >Add</button><br/>
       
      </form>
      <button class="totalNum">Total Number Of student :{props.details.length}</button>
       
 </div>

</div>




<div class=" split right">
  <div >
        <Sheet
          details={props.details}
        />
  </div>
</div>


</div>   

      
     
  );
}

export default Form;