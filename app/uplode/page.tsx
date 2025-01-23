"use client";
import React from "react";
import { useFormState } from "react-dom";
import { sellCarAction } from "../actions";

export default function Page() {
  const inState:any = {
    message: "",
    error: null,
  };

  const [state, formAction] = useFormState(sellCarAction, inState);

  return (
    <div className="p-20 flex justify-center text-2xl font-semibold">
      <form className="grid rounded-2xl border-2 border-black p-10 w-1/2" action={formAction}>
      <h1>Add your car details here:</h1>
        <div className="py-5 w-full flex justify-center">
          {state?.type==="error" && <p>{state.message}</p>}
          {state?.type==="success" && <p>{state.message}</p>}
        </div>
        <div className="grid grid-cols-2">
            <label className="">Image:</label>
            <input className="p-1 border-black border-b-2" type="file" name="ImageURL" required/>
        </div>
        <div className="grid grid-cols-2">
            <label className="">Brand Name:</label>
            <input className="p-1 border-black border-b-2" type="text" name="BrandName" placeholder={"BrandName"} required/>
        </div>
        <div className="grid grid-cols-2">
            <label className="">Description:</label>
            <input className="p-1 border-black border-b-2" type="text" name="Description" placeholder={"Description"} required/>
        </div>
        <div className="grid grid-cols-2">
            <label className="">Car Name:</label>
            <input className="p-1 border-black border-b-2" type="text" name="CarName" placeholder={"CarName"} required/>
        </div>
        <div className="grid grid-cols-2">
            <label className="">Price:</label>
            <input className="p-1 border-black border-b-2" type="text" name="Price" placeholder={"Price"} required/>
        </div>
        <button className="mt-5 p-2 px-10 rounded-xl bg-black text-white" type="submit">Sell Car</button>
      </form>
    </div>
  );
}
