import React, {useEffect, useState} from 'react'
// ICONS
import { IoMdClose } from 'react-icons/io'
// components
import Button from '../components/UI/Button'
import Card from '../components/Home/Card'
import TransactionsContainer from '../components/Home/TransactionsContainer'
import SinglePoup from '../components/Home/SinglePoup'

const Home = () => {
  // userName
  const [userName, setUserName] = useState("");
  const [isUserPopup, setIsUserPopup] = useState(false);
  // balance
  const [balance, setBalance] = useState(0);
  const [hasBalance, setHasBalance] = useState(false);
  // transcations
  const [transcations, setTranscations] = useState([]);
  const [transName, setTransName] = useState("");
  const [transAmount, setTransAmount] = useState(0);
  const [transDesc, setTransDesc] = useState("");
  const [newTrans, setNewTrans] = useState(false)
  // effects
  useEffect(() => {
    const name = localStorage.getItem("name");
    if(name){
      setUserName(name)
      setIsUserPopup(false)
    }else{
      setIsUserPopup(true)
    }
    // balance
    const savedBalance = JSON.parse(localStorage.getItem("balance"))
    if(savedBalance){
      setHasBalance(true)
      setBalance(savedBalance.balance)
    }else{setHasBalance(false)}
  }, []);

  // functions
  const saveName = () => {
    if(userName !== ""){
      localStorage.setItem("name", userName);
      setIsUserPopup(false)
    }
  };
  const saveBalance = () => {
    if(balance !== ""){
      localStorage.setItem("balance", JSON.stringify({
        balance: Number(balance),
        expense: 0
      }));
      setHasBalance(true)
    }
  };
  const newTransRq = () => {
    setNewTrans(true);
  };
  const abortTransRq = () => {setNewTrans(false)}
  const saveTranscation = () => {
    if(transName !== "" && transAmount > 0){
      const savedTranscations = JSON.parse(localStorage.getItem("transcations")) || [];
      if(!savedTranscations){
        localStorage.setItem("transcations", JSON.stringify([]))
      }
      const newOne = {
        title: transName,
        amount: Number(transAmount),
        description: transDesc
      };
      savedTranscations.push(newOne);
      localStorage.setItem("transcations", JSON.stringify(savedTranscations));
      setTranscations(savedTranscations)
      console.log(transcations)
      resetProps();
    };
  };
  const resetProps = () =>{
    setTransName("");
    setTransAmount("");
    setTransDesc("");
  };
    return (
      <>
      {/* name Popup */}
      {
        isUserPopup && 
        <SinglePoup title={"Enter your name to continue"} holder={"Your Name"} isNumber={false} changeFun={setUserName} changeVal={userName} saveFun={saveName}/>
      }
      {/* balance popup */}
      {
        hasBalance === false ?
        <SinglePoup title={"Enter your balance to continue"} holder={"Your Balance"} isNumber={true} changeFun={setBalance} changeVal={balance} saveFun={saveBalance} />: ""
      }
      {/* transition popup */}
      {
        newTrans &&
        <div className="absolute flex justify-center items-center w-full h-screen bg-zinc-800/50 left-0 top-0 z-9">
          <div className="w-[30%] relative h-[auto] bg-white  my-4 rounded-lg px-8 py-16">
            <span
              onClick={abortTransRq}
              className="absolute right-5 top-5 cursor-pointer"
            >
              <IoMdClose size={22} />
            </span>
            <h3 className="font-semibold text-3xl text-zinc-600">
              New Transcation
            </h3>
            <div className="mt-8 flex flex-col gap-4 items-start">
              <input
                type="text"
                placeholder="Transcation Name"
                className="border outline-none px-4 py-3 rounded-md border-zinc-300 focus:border-blue-300 shadow-sm font-semibold w-full"
                spellCheck={false}
                value={transName}
                onChange={(e) => setTransName(e.target.value)}
              />
              <input
                type="number"
                placeholder="Amount"
                className="border outline-none px-4 py-3 rounded-md border-zinc-300 focus:border-blue-300 shadow-sm font-semibold w-full"
                spellCheck={false}
                value={transAmount}
                onChange={(e) => setTransAmount(e.target.value)}
              />
              <textarea
                placeholder="Description"
                className="border outline-none px-4 py-3 rounded-md border-zinc-300 focus:border-blue-300 shadow-sm font-semibold h-40 resize-none w-full"
                value={transDesc}
                onChange={(e) => setTransDesc(e.target.value)}
                spellCheck={false}
              ></textarea>
              <span onClick={saveTranscation}>
                <Button content={"Create New Transcation"} isIcon={true} />
              </span>
            </div>
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
            <span onClick={newTransRq}>
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
              balance={balance}
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
              hasBalance === true ? "Nothing here.." : 
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
