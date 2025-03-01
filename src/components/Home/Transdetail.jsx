import React from 'react'
// components
import Button from '../UI/Button'
import { fixedtheBody } from '../../helper'
const Transdetail = ({ details, closeDetails }) => {
  fixedtheBody();
  return (
    <div className="absolute flex justify-center items-center w-full h-[100vh] bg-zinc-800/50 left-0 top-0 z-99">
          <div className="w-[90%] sm:w-[25%] relative h-[auto] bg-white  my-4 rounded-lg px-8 py-16">
            <h3 className="font-semibold text-xl sm:text-3xl text-zinc-600">
            Details
            </h3>
            <div className="mt-8 flex flex-col gap-4 items-start">
                <div className='flex gap-2 items-center'>
                    <h3 className='font-[500] text-zinc-600'>Date:</h3>
                    <span>{details.date}</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <h3 className='font-[500] text-zinc-600'>Time:</h3>
                    <span>{details.time}</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <h3 className='font-[500] text-zinc-600'>Name:</h3>
                    <span>{details.title}</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <h3 className='font-[500] text-zinc-600'>Amount:</h3>
                    <span>${details.amount}</span>
                </div>
                <div className='flex gap-2 items-start'>
                    <h3 className='font-[500] text-zinc-600'>Description:</h3>
                    <span>{details.description === "" ? "-" : details.description}</span>
                </div>
              <span onClick={closeDetails}>
                <Button content={"Close details"} isIcon={false} theme={"red"}/>
              </span>
            </div>
          </div>
        </div>
  )
}

export default Transdetail
