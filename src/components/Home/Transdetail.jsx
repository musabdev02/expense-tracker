import React, {useEffect} from 'react'
// components
import Button from '../UI/Button'
const Transdetail = ({ details, closeDetails }) => {
  
  useEffect(() => {
    if (details) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
    
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [details]);
  return (
    <div className="fixed inset-0 flex justify-center items-center w-full h-screen bg-zinc-800/50 z-[99]">
  <div className="w-[90%] sm:w-[25%] relative bg-white rounded-lg px-8 py-8">
    <h3 className="font-semibold text-xl sm:text-3xl text-zinc-600">Details</h3>
    <div className="mt-6 flex flex-col gap-4 items-start">
      <div className="flex gap-2 items-center">
        <h3 className="font-[500] text-zinc-600">Date:</h3>
        <span>{details.date}</span>
      </div>
      <div className="flex gap-2 items-center">
        <h3 className="font-[500] text-zinc-600">Time:</h3>
        <span>{details.time}</span>
      </div>
      <div className="flex gap-2 items-center">
        <h3 className="font-[500] text-zinc-600">Name:</h3>
        <span>{details.title}</span>
      </div>
      <div className="flex gap-2 items-center">
        <h3 className="font-[500] text-zinc-600">Amount:</h3>
        <span>${details.amount}</span>
      </div>
      <div className="flex gap-2 items-start">
        <h3 className="font-[500] text-zinc-600">Description:</h3>
        <span>{details.description === "" ? "-" : details.description}</span>
      </div>
      <span onClick={closeDetails}>
        <Button content={"Close details"} isIcon={false} theme={"red"} />
      </span>
    </div>
  </div>
</div>

  )
}

export default Transdetail
