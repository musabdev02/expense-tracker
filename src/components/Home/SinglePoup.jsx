import React from 'react'

const SinglePoup = ({ title, holder, isNumber, changeFun, changeVal, saveFun}) => {
  return (
    <div className="w-full h-screen z-9 left-0 top-0 absolute bg-[#020202eb] flex items-center justify-center">
    <div className="w-[20%] h-[200px] bg-white rounded-lg p-8 text-center">
      <h3 className=" text-xl text-zinc-600">
        {title}
      </h3>
      <input
        type={isNumber ? "number" : "text"}
        placeholder={holder}
        className="capitalize border border-zinc-300 w-full px-4 py-3 rounded-lg outline-none mt-4 focus:border-blue-300"
        spellCheck={false}
        value={changeVal}
        onChange={(e) => changeFun(e.target.value)}
      />
      <button
        className="mt-2 border border-blue-300 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-100"
        onClick={saveFun}
      >
        Get Started
      </button>
    </div>
  </div>
  )
}

export default SinglePoup
