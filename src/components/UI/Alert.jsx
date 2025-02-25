import React from 'react'

const Alert = ({ content, color, isVisible }) => {
  return (
    <div className={`z-99 absolute top-4 sm:top-[inherit] right-10 sm:bottom-10 ${isVisible ? "opacity-100" : "opacity-0"} ${isVisible ? "visible" : "invisible"}`}>
      <div className={`w-80 sm:w-96 p-2 px-4 border ${color === "red" ? "border-red-300 bg-red-100" : "border-green-300 bg-green-100"} rounded-lg flex items-center gap-4`}>
        <div className={`w-[15px] h-[15px] ${color === "red" ? "bg-red-500" : "bg-green-500"} rounded-[50%]`}></div>
        <h1 className='font-semibold text-md text-zinc-600'>{content}</h1>
      </div>
    </div>
  )
}

export default Alert
