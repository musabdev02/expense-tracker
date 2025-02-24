import React from "react";
import Button from '../UI/Button'
// ICONS
import { LuCakeSlice } from "react-icons/lu";

const Category = () => {
  return (
    <div className="flex justify-between hover:bg-blue-100 p-4 rounded-lg">
    <div className="flex items-center gap-4">
      <span className="bg-blue-400 p-2 rounded-md"> <LuCakeSlice size={26}/></span>
      <h3 className="text-lg">Deserts</h3>
    </div>
    <div className="flex items-center justify-between w-4/12">
        <p className="text-lg text-zinc-700">27, Jan</p>
        <Button content={"Delete"} isIcon={false} theme={"red"} />
    </div>
    </div>
  );
};

export default Category;
