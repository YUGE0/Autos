import { sellCars } from "@/Actions";
import { error } from "console";
import Image from "next/image";
import { useState } from "react";
import { useFormStatus } from "react-dom";

const instate = {
  message:"",
  error:null
}

const [formData, setFormData] = useState({
  uname:"",
});
const handleSubmit = (e) => {
  e.preventDefault();
  // Process form data (e.g., send it to a server or display it)
  console.log("Form Submitted:", formData);
};

export default function Sell() {
  //const[state,formAction] = useFormStatus<any>(sellCars,instate)
  return (
    <div className="min-h-screen items-center justify-between p-20">
      <h1>Sell Your car</h1>  
      <form action={setFormData} className="w-96 grid grid-cols-2 gap-0">
        <div className="">
          <label>Name</label>
          <input className="px-2 border border-black" type="text" id="uname" name="uname"/>
        </div>
        <button type="submit">Update User Name</button>
      </form>    
    </div>
  );
}
