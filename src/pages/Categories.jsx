import React, { useState } from "react";
// ICONS
import { IoMdClose } from "react-icons/io";
import {
  FaShoppingBag,
  FaDog,
  FaCheese,
  FaDollarSign,
  FaFolder,
  FaGlassMartiniAlt,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaHome,
  FaPaintRoller,
  FaPhoneAlt,
  FaRss,
  FaShoppingCart,
  FaSkull,
  FaSketch,
  FaStarAndCrescent,
  FaTooth,
  FaTools,
  FaUmbrellaBeach,
  FaTree,
  FaTshirt,
} from "react-icons/fa";
// components
import Button from "../components/UI/Button";
import Category from "../components/Categories/Category";
import Alert from "../components/UI/Alert";
// ICONS
const Categories = () => {
  // avalaible icons
  const icons = [
    <FaShoppingBag />,
    <FaDog />,
    <FaCheese />,
    <FaDollarSign />,
    <FaFolder />,
    <FaGlassMartiniAlt />,
    <FaGraduationCap />,
    <FaHandHoldingHeart />,
    <FaHome />,
    <FaPaintRoller />,
    <FaPhoneAlt />,
    <FaRss />,
    <FaShoppingCart />,
    <FaSkull />,
    <FaSketch />,
    <FaStarAndCrescent />,
    <FaTooth />,
    <FaTools />,
    <FaUmbrellaBeach />,
    <FaTree />,
    <FaTshirt />,
  ];
  // states
  const [categories, setCategories] = useState(
    JSON.parse(localStorage.getItem("categories")) || []
  );
  const [cateName, setCateName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("");
  const [newCate, setNewCate] = useState(false);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // alert
  const [alertContent, setAlertContent] = useState({
    title: "",
    color: "red",
    isVisible: false,
  });

  // functions
  const newCateRq = () => {
    setNewCate(true);
  };
  const abortCateRq = () => {
    setNewCate(false);
  };
  const saveCategory = () => {
    if (cateName !== "" && selectedIcon !== null) {
      const savedCategories =
        JSON.parse(localStorage.getItem("categories")) || [];
      const newOne = {
        title: cateName,
        icon: selectedIcon.type.name,
        date: new Date().getDate() + ", " + monthNames[new Date().getMonth()],
      };
      savedCategories.push(newOne);
      localStorage.setItem("categories", JSON.stringify(savedCategories));
      setCategories(savedCategories)
      setAlertContent({
        title: "New Category Created!",
        color: "green",
        isVisible: true,
      });
      resetProps();
      setNewCate(false);
    }
  };
  const resetProps = () => {
    setSelectedIcon(null);
    setCateName("");
  };
  const deleteCategory = (i) => {
    let updatedCategories = categories.filter((_, index) => index !== i);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
    setCategories(updatedCategories);
  };
  return (
    <>
      {newCate && (
        <div className="fixed inset-0 flex justify-center items-center w-full h-screen bg-zinc-800/50 z-[99]">
          <div className="w-[90%] sm:w-[30%] relative h-[auto] bg-white  my-4 rounded-lg px-8 py-16">
            <span
              onClick={abortCateRq}
              className="absolute right-5 top-5 cursor-pointer"
            >
              <IoMdClose size={22} />
            </span>
            <h3 className="font-semibold text-2xl sm:text-3xl text-zinc-600">
              New Category
            </h3>
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
                {icons.map((item, index) => (
                  <span
                    key={index}
                    onClick={() => setSelectedIcon(item)}
                    className={`cursor-pointer rounded-md border p-2 text-lg transition ${
                      selectedIcon === item
                        ? "bg-blue-500 text-white"
                        : "border-zinc-200 text-zinc-600 hover:bg-zinc-200"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <span onClick={saveCategory}>
                <Button content={"Create Category"} isIcon={true} />
              </span>
            </div>
          </div>
        </div>
      )}
      {/* category main content */}
      <div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-center justify-between">
          <h3 className="font-semibold text-xl sm:text-3xl text-blue-900">
            All Categories
          </h3>
          <span onClick={newCateRq}>
            <Button content={"Add New Category"} isIcon={true} />
          </span>
        </div>
        <div className="mt-12 flex justify-between text-zinc-600 sm:px-6">
          <div className="text-sm sm:text-md">Category Name</div>
          <div className="flex items-center justify-between w-6/12 sm:w-4/12">
            <div className="text-sm sm:text-md">Created On</div>
            <div className="text-sm sm:text-md">Actions</div>
          </div>
        </div>
        {/* categories */}
        <div className="mt-6 sm:mt-12 flex flex-col gap-4 sm:h-[70vh] overflow-y-auto hiddenScrollbar">
          {categories.length >= 1 ? (
            [...categories]
              .reverse()
              .map((item, index) => (
                <Category
                  title={item.title}
                  icon={item.icon}
                  date={item.date}
                  i={index}
                  key={index}
                  deleteF={deleteCategory}
                />
              ))
          ) : (
            <h3 className="text-zinc-700">No categries created yet.</h3>
          )}
        </div>
      </div>
      <Alert
        content={alertContent.title}
        color={alertContent.color}
        isVisible={alertContent.isVisible}
      />
    </>
  );
};

export default Categories;
