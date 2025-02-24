import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
const Button = ({content , isIcon, theme}) => {
  let addTheme = "";
  if(theme === "red"){
    addTheme = "border-red-300 hover:bg-red-100 text-red-800"
  }else{
    addTheme = "border-blue-300 hover:bg-blue-100 text-blue-800"
  }
  return (
    <button className={`flex items-center gap-2 border ${addTheme} cursor-pointer py-2 rounded-md px-4 `}>
        {
            isIcon && <CiCirclePlus size={20} />  
        }
        {content}
    </button>
  )
}

export default Button
