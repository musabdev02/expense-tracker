import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
const Button = ({content , isIcon, theme}) => {
  let addTheme = "";
  if(theme === "red"){
    addTheme = "border-red-300 hover:bg-red-100 focus:bg-red-100 text-red-800"
  }else{
    addTheme = "border-blue-300 hover:bg-blue-100 focus:bg-blue-100 text-blue-800"
  }
  return (
    <button className={`flex items-center gap-2 border ${addTheme} cursor-pointer py-1 sm:py-2 rounded-md sm:px-4 px-2 text-sm sm:text-[16px] `}>
        {
            isIcon && <CiCirclePlus size={20} />  
        }
        {content}
    </button>
  )
}

export default Button
