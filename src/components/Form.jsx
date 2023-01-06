import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
// import "./Form.css";
function Form(){
    return(
       
      
<div >
<nav class="navbar navbar-dark bg-primary">
        <h1 class="heading">Add Attendence</h1>
       </nav>
    <div class="Form col-md-2">
        <form class="col-md-2" >
        

 
        <div class="form-row">
          <div class="col-md-2 mb-3">
            <label >Name</label>
            <input type="text" class="form-control" id="validationDefault01" placeholder="Name"  required />
          </div>
          <div class="col-md-2 mb-3">
            <label>Roll Number</label>
            <input type="text" class="form-control" id="validationDefault02" placeholder="Roll Number"  required />
          </div>
          <div class="col-md-2 mb-3">
            <label >Check-In Time</label>
            <input type="time" class="form-control" id="validationDefault02"  required />
          </div>

          <div class="col-md-2 mb-3">
            <label >Check-Out Time</label>
            <input type="time" class="form-control" id="validationDefault02"   required />
          </div>
        </div>
        {/* <button class="space btn btn-primary btn-lg " type="submit" >Add</button> */}
        
        {/* <h8>Total Number Of student: #65464</h8> */}
      </form>
 </div>



      
      </div>
      
     
    );
}

export default Form;