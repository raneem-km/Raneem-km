import { Button, TextField } from '@mui/material'
import React, {useState} from 'react'

function Form() {

        const [formData, setformData] = useState({
          name:"",
          email:"",
          Password:""
        })
       const handleChange=()=>{
        const {name,value}=>
              
         




         const handleSubmit = async (e) => {
          e.preventDefault();

try{
  const response  = await fetch('http://localhost:3000/users',
  {
    method:'POST',
    headers: {
      'Content-Type':
    'application/json'
    },
    body :json-stringify(formData)
  });
  const data= awaitresponce.text();
  console.log("Responce:",data);
  alert("Users registered");
  
   catch (error)
  {
    console.error("Errors submitting from",error);
    alert ("Somthin went Wrrong");
  }

}
  return ( 
 <> 
   <div align='center'>   
 
<h1><b>Registation</b></h1>
<br>
</br>

<p>Name</p>
<TextField 
onChange={handleChange}
value={formData.name} label="Enter your Name"/>
<br></br>
<p>Email</p>
<TextField value={formData.email} label="Enter your Email"/>
<br></br>
<p>Password</p>
<TextField value={formData.Password} label="Enter your password"/>
<br></br>
<br></br>
<br></br>
<br></br>

<Button class="bg-blue-800 text-white" variant="Contained">Submit</Button>
</div>
</>

  )
}

export default Form