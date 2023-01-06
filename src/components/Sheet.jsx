import React from "react";

function Sheet(props){

// const obj=
//     {
//           Sl_No:"1",      
//           Student_Name: "abcd",
//           Roll_Number:"dfboihjfdg53",
//           Check_in_Time:"12:21",
//           Check_out_Time:"12:21"
// }


return (


<div class="sheet" >

<div class="container thead">
  <div class="row">
  <div class="col-sm">
    Sl No.
    </div>
    <div class="col-sm">
    Student Name
    </div>
    <div class="col-sm">
    Roll Number 
    </div>
    <div class="col-sm">
    Check-in Time
    </div>
    <div class="col-sm">
    Check-out Time
    </div>
  </div>
</div>

{props.details.map(function(detailed,index){
  
  return(
<div class="container tdetails">
  <div class="row">
  <div class="col-sm">
   {index+1}
    </div>
    <div class="col-sm">
   {detailed.Student_Name}
    </div>
    <div class="col-sm">
 {detailed.Roll_Number}
    </div>
    <div class="col-sm">
    {detailed.Check_in_Time}
    </div>
    <div class="col-sm">
    {detailed.Check_out_Time}
    </div>
  </div>
</div>
);}
)}

  {console.log("debug:",props.details)}
</div>
);
}

export default Sheet;