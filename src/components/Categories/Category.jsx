import React from "react";
import Button from "../UI/Button";
// ICONS
import * as Icons from "react-icons/fa";

const Category = ({ title, icon, date, i, deleteF }) => {
  const IconComponent = Icons[icon] || Icons.FaQuestionCircle;
  return (
    <div className="flex justify-between hover:bg-blue-100 p-2 sm:p-4 rounded-lg border-b border-zinc-200">
      <div className="flex items-center gap-2 sm:gap-4">
        <span className="bg-blue-400 p-2 text-md sm:text-lg rounded-md">
          <IconComponent />
        </span>
        <h3 className="text-md sm:text-lg capitalize">{title}</h3>
      </div>
      <div className="flex items-center justify-between w-6/12 sm:w-4/12">
        <p className="text-sm sm:text-lg text-zinc-700">{date}</p>
        <span onClick={() => deleteF(i)}>
        <Button content={"Delete"} isIcon={false} theme={"red"} />
        </span>
      </div>
    </div>
  );
};

export default Category;
