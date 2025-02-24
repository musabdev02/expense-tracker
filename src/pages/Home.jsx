import React, {useEffect, useState} from 'react'
// components
import Button from '../components/UI/Button'
import Card from '../components/Home/Card'
import TransactionsContainer from '../components/Home/TransactionsContainer'

const Home = () => {
  const [userName, setUserName] = useState("");
  const [isUserPopup, setIsUserPopup] = useState(false)
  useEffect(() => {
    const name = localStorage.getItem("name");
    if(name){
      setUserName(name)
      setIsUserPopup(false)
    }else{
      setIsUserPopup(true)
    }
  }, [])
  // saveName
  const saveName = () => {
    if(userName !== ""){
      localStorage.setItem("name", userName);
      setUserExist(false)
    }
  }
    return (
      <>
      {/* name Popup */}
      {
        isUserPopup && <div className="w-full h-screen z-9 left-0 top-0 absolute bg-[#020202eb] flex items-center justify-center">
        <div className="w-[20%] h-[200px] bg-white rounded-lg p-8 text-center">
          <h3 className=" text-xl text-zinc-600">
            Enter Your Name to Continue
          </h3>
          <input
            type="text"
            placeholder="Your Name..."
            className="capitalize border border-zinc-300 w-full px-4 py-3 rounded-lg outline-none mt-4 focus:border-blue-300"
            spellCheck={false}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            className="mt-2 border border-blue-300 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-100"
            onClick={saveName}
          >
            Get Started
          </button>
        </div>
      </div>
      }
        
      {/* homePage */}
        <section>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-4xl text-blue-900">
                Hey there, {userName.slice(0, 1).toUpperCase() + userName.slice(1)}
              </h3>
              <p className="pt-2 text-zinc-700 text-md">
                Have a great day! Good luck on your finanical journey.
              </p>
            </div>
            <span>
              <Button content={"New Transcation"} isIcon={true} />
            </span>
          </div>
          <section className="flex gap-6">
          {/* cards & transcations */}
          <div className="w-[70%]">
          <div className="mt-8 flex gap-4 w-full">
            <Card
              content={"Total balance"}
              addClass={"card1"}
              balance={"0"}
            />
            <Card
              content={"Total Expenses"}
              addClass={"card2"}
              balance={"0"}
            />
          </div>
          <TransactionsContainer/>
          </div>
          {/* info & news */}
          <div className="w-[30%] py-8 px-14">
            <h4 className="mb-6 text-lg text-zinc-500">News & Information</h4>
            {/* add balance card! */}
            {
              0 > 1 ? "Nothing here.." : 
              <div className="w-[300px] h-52 bg-yellow-200 rounded-md p-8">
                <h3 className="font-[500] text-xl text-yellow-900 leading-7">Add a Balance to Get Started Your Finanical Journey.</h3>
                <p className="mt-8 font-semibold cursor-pointer text-yellow-800 hover:underline">Add Balance</p>
              </div>
            }
          </div>
          </section>
        </section>
      </>
      );
}

export default Home
