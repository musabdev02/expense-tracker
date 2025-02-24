import React from "react";
import Button from "../components/UI/Button";
import Category from "../components/Categories/Category";
// ICONS
const Categories = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-3xl text-blue-900">All Categories</h3>
          <Button content={"Add New Category"} isIcon={true} />
      </div>
      <div className="mt-12 flex justify-between text-zinc-600 px-6">
        <div>Category Name</div>
        <div className="flex items-center justify-between w-4/12">
          <div>Created On</div>
          <div>Actions</div>
        </div>
      </div>
      {/* categories */}
      <div className="mt-12 flex flex-col gap-4">
        <Category />
      </div>
    </div>
  );
};

export default Categories;
