import React, { useState } from "react";
// ICONS
import { IoMdClose } from "react-icons/io";
import { FaShoppingBag, FaDog, FaCheese, FaDollarSign, FaFolder, FaGlassMartiniAlt, FaGraduationCap, FaHandHoldingHeart, FaHome, FaPaintRoller, FaPhoneAlt, FaRss, FaShoppingCart, FaSkull, FaSketch, FaStarAndCrescent, FaTooth, FaTools, FaUmbrellaBeach, FaTree, FaTshirt } from "react-icons/fa";
// components
import Button from "../components/UI/Button";
import Category from "../components/Categories/Category";
// ICONS
const Categories = () => {
  // avalaible icons
  const icons = [<FaShoppingBag />, <FaDog />, <FaCheese />, <FaDollarSign />, <FaFolder />, <FaGlassMartiniAlt />, <FaGraduationCap />, <FaHandHoldingHeart />, <FaHome />, <FaPaintRoller />, <FaPhoneAlt />, <FaRss />, <FaShoppingCart />, <FaSkull />, <FaSketch />, <FaStarAndCrescent />, <FaTooth />, <FaTools />, <FaUmbrellaBeach />, <FaTree />, <FaTshirt />]

  // states
  const [cateName, setCateName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null)
  const [newCate, setNewCate] = useState(false);
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const categories = JSON.parse(localStorage.getItem("categories")) || [];

  // functions
  const newCateRq = () => {
    setNewCate(true);
  };
  const abortCateRq = () => {
    setNewCate(false);
  };
  const saveCategory = () => {
    if (cateName !== "" && selectedIcon !== null) {
      const savedCategories = JSON.parse(localStorage.getItem("categories")) || [];
      
      const newOne = {
        title: cateName,
        icon: selectedIcon.type.name,
        date: new Date().getDate() + ", " + monthNames[new Date().getMonth()]
      };
  
      savedCategories.push(newOne);
      localStorage.setItem("categories", JSON.stringify(savedCategories));
      
      resetProps();
      setNewCate(false);
    }
  };
  const resetProps = () => {
    setSelectedIcon(null);
    setCateName("");
  };
  return (
    <>
    {
      newCate &&
      <div className="absolute flex justify-center items-center w-full h-screen bg-zinc-800/50 left-0 top-0 z-9">
        <div className="w-[30%] relative h-[auto] bg-white  my-4 rounded-lg px-8 py-16">
          <span onClick={abortCateRq} className="absolute right-5 top-5 cursor-pointer">
            <IoMdClose size={22} />
          </span>
          <h3 className="font-semibold text-3xl text-zinc-600">New Category</h3>
          <div className="mt-8 flex flex-col gap-4 items-start">
            <input
              type="text"
              placeholder="Category Name"
              className="border outline-none px-4 py-3 rounded-md border-zinc-300 focus:border-blue-300 shadow-sm font-semibold w-full"
              spellCheck={false}
              value={cateName}
              onChange={(e) => setCateName(e.target.value)}
            />
            <h3 className="font-[500] text-zinc-400 text-sm">ICONS</h3>
            <div className="mb-4 flex justify-start gap-2 flex-wrap">
              {
                icons.map((item, index) => (
                  <span 
                   key={index}
                   onClick={() => setSelectedIcon((prev) => item)}
                   className={`cursor-pointer rounded-md border p-2 text-lg transition ${
                    selectedIcon?.type === item.type ? "bg-blue-500 text-white" : "border-zinc-200 text-zinc-600 hover:bg-zinc-200"
                  }`}
                >
                   {item}
                  </span>))
              }
            </div>
            <span onClick={saveCategory}>
              <Button content={"Create Category"} isIcon={true} />
            </span>
          </div>
        </div>
      </div>
    }
    {/* category main content */}
      <div>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-3xl text-blue-900">
            All Categories
          </h3>
          <span onClick={newCateRq}>
          <Button content={"Add New Category"} isIcon={true} />
          </span>
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
          {
            categories.length >= 1 ? 
            categories.reverse().map((item, index) => (
              <Category title={item.title} icon={item.icon} date={item.date} key={index} />
            )):
            <h3 className="text-zinc-700">No categries created yet.</h3>
          }
        </div>
      </div>
    </>
  );
};

export default Categories;
