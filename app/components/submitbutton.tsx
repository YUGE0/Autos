import React from 'react'
import { useFormStatus } from 'react-dom'

export default function SubmitButton() {
    const{pending} = useFormStatus()
  return (
    <button className="mt-5 p-2 px-10 rounded-xl bg-black text-white" type="submit" disabled={pending}>{pending?"Adding...":"Sell Car"}</button>
  )
}
