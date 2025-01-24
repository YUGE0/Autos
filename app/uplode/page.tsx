"use client";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { sellCarAction } from "../actions";
import SubmitButton from "../components/submitbutton";

export default function Page() {
  const inState:any = {
    message: "",
    error: null,
  };
  const [state, formAction] = useFormState(sellCarAction, inState);
  const {pending} = useFormStatus();

  return (
    <div className="p-2 flex justify-center text-2xl font-semibold">
      <form className="w-full grid rounded-2xl border-2 border-black p-2 md:w-1/2" action={formAction}>
      <h1>Add your car details here:</h1>
        <span className="py-5 w-full flex justify-center">
          {state?.type==="error" && <p>{state.message}</p>}
          {state?.type==="success" && <p>{state.message}</p>}
        </span>
        <div className="grid grid-cols-2">
            <label className="">Brand Name:</label>
            <input className="p-1 border-black border-b-2" type="text" name="cname" placeholder={"cname"} required/>
        </div>
        <div className="grid grid-cols-2">
            <label className="">Model Name:</label>
            <input className="p-1 border-black border-b-2" type="text" name="model" placeholder={"model"} required/>
        </div>
        <div className="grid grid-cols-2">
            <label className="">Description:</label>
            <input className="p-1 border-black border-b-2" type="text" name="description" placeholder={"description"} required/>
        </div>
        <div className="grid grid-cols-2">
            <label className="">Price:</label>
            <input className="p-1 border-black border-b-2" type="text" name="price" placeholder={"price"} required/>
        </div>
        <div className="grid grid-cols-2">
            <label className="">Speed:</label>
            <input className="p-1 border-black border-b-2" type="text" name="speed" placeholder={"speed"} required/>
        </div>
        <div className="grid grid-cols-2">
            <label className="">Power:</label>
            <input className="p-1 border-black border-b-2" type="text" name="power" placeholder={"power"} required/>
        </div>
        <div className="grid grid-cols-2">
            <label className="">Time:</label>
            <input className="p-1 border-black border-b-2" type="text" name="time" placeholder={"time"} required/>
        </div>
        <div className="grid grid-cols-2">
            <label className="">Card Image:</label>
            <input className="p-1 border-black border-b-2" type="file" name="url" required/>
        </div>
        <div className="grid grid-cols-2">
            <label className="">Side Image:</label>
            <input className="p-1 border-black border-b-2" type="file" name="imgs" required/>
        </div>
        <div className="grid grid-cols-2">
            <label className="">Back Image:</label>
            <input className="p-1 border-black border-b-2" type="file" name="imgb" required/>
        </div>
        <div className="grid grid-cols-2">
            <label className="">Front Image:</label>
            <input className="p-1 border-black border-b-2" type="file" name="imgf" required/>
        </div>
        <div className="grid grid-cols-2">
            <label className="">Interior Front Image:</label>
            <input className="p-1 border-black border-b-2" type="file" name="imginf" required/>
        </div>
        <div className="grid grid-cols-2">
            <label className="">Interior Back Image:</label>
            <input className="p-1 border-black border-b-2" type="file" name="imginb" required/>
        </div>
        <div className="grid grid-cols-2">
            <label className="">Boost:</label>
            <input className="p-1 border-black border-b-2" type="text" name="boost" placeholder={"boost"} required/>
        </div>
        <div className="grid grid-cols-2">
            <label className="">Logo:</label>
            <input className="p-1 border-black border-b-2" type="file" name="logo" required/>
        </div>
        <div className="grid grid-cols-2">
            <label className="">Overview:</label>
            <input className="p-1 border-black border-b-2" type="text" name="Overview" placeholder={"Overview"} required/>
        </div>
        <div className="grid grid-cols-2">
            <label className="">Sound:</label>
            <input className="p-1 border-black border-b-2" type="file" name="sound" required/>
        </div>
        <SubmitButton/>
      </form>
    </div>
  );
}
