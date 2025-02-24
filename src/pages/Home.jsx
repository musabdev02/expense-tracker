import React, {useEffect, useState} from 'react'
// ICONS
import { IoMdClose } from 'react-icons/io'
// components
import Button from '../components/UI/Button'
import Card from '../components/Home/Card'
import TransactionsContainer from '../components/Home/TransactionsContainer'
import SinglePoup from '../components/Home/SinglePoup'
import Alert from '../components/UI/Alert'

const Home = () => {
  // userName
  const [userName, setUserName] = useState("");
  const [isUserPopup, setIsUserPopup] = useState(false);
  // balance
  const [balance, setBalance] = useState(0);
  const [hasBalance, setHasBalance] = useState(false);
  const [newBalance, setNewBalance] = useState(false);
  // expense
  const [expense, setExpense] = useState(0);
  // transcations
  const [transcations, setTranscations] = useState([]);
  const [transName, setTransName] = useState("");
  const [transAmount, setTransAmount] = useState(0);
  const [transDesc, setTransDesc] = useState("");
  const [newTrans, setNewTrans] = useState(false);
  // alert
  const [alertContent, setAlertContent] = useState({
    title: "",
    color: "red",
    isVisible: false
  });
  // effects
  useEffect(() => {
    const name = localStorage.getItem("name");
    if(name){
      setUserName(name)
      setIsUserPopup(false)
    }else{
      setIsUserPopup(true)
    }
    
  }, []);
  useEffect(() => {
    const savedBalance = JSON.parse(localStorage.getItem("balance"))
    if(savedBalance){
      setHasBalance(true);
      setBalance(savedBalance.balance);
      setExpense(savedBalance.expense);
    }
  }, [transcations])

  // functions
  const saveName = () => {
    if(userName !== ""){
      localStorage.setItem("name", userName);
      setIsUserPopup(false)
    }else{
      setAlertContent({
        title: "Please enter valid name",
        isVisible: true,
        color: "red"
      });
      closeAlert()
    };
  };
  const saveBalance = () => {
    if(balance > 1){
      localStorage.setItem("balance", JSON.stringify({
        balance: Number(balance),
        expense: Number(expense)
      }));
      setNewBalance(false);
      setHasBalance(true);
      setAlertContent({
        title: "New Balance Added!",
        color: "green",
        isVisible: true
      });
      closeAlert()
    }else{
      setAlertContent({
        title: "Please enter valid balance",
        isVisible: true,
        color: "red"
      });
      closeAlert()
    }
  };
  const newBalanceRq = () => {
    setNewBalance(true)
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
      resetProps();
      setAlertContent({
        title: "Created New Transaction",
        color: "green",
        isVisible: true
      });
      setNewTrans(false);
      closeAlert();
      calculateRemain()
    };
  };
  const resetProps = () =>{
    setTransName("");
    setTransAmount("");
    setTransDesc("");
  };
  const closeAlert = () => {
    setTimeout(() => {
      setAlertContent({isVisible: false})
    }, 1500);
  };
  const calculateRemain = () => {
    let oldBalance = JSON.parse(localStorage.getItem("balance"));
    localStorage.setItem("balance", JSON.stringify({
      balance: balance - transAmount,
      expense: oldBalance.expense += Number(transAmount)
    }));
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
        newBalance &&
        <SinglePoup title={"Enter Your Balance"} holder={"Your Balance"} isNumber={true} changeFun={setBalance} changeVal={balance} saveFun={saveBalance} />
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
              balance={expense}
            />
          </div>
          <TransactionsContainer newTransRq={newTransRq}/>
          </div>
          {/* info & news */}
          <div className="w-[30%] py-8 px-14">
            <h4 className="mb-6 text-lg text-zinc-500">News & Information</h4>
            {/* add balance card! */}
            {
              hasBalance === true ? "Nothing here.." : 
              <div className="w-[300px] h-52 bg-yellow-200 rounded-md p-8">
                <h3 className="font-[500] text-xl text-yellow-900 leading-7">Add a Balance to Get Started Your Finanical Journey.</h3>
                <p className="mt-8 font-semibold cursor-pointer text-yellow-800 hover:underline" onClick={newBalanceRq}>Add Balance</p>
              </div>
            }
          </div>
          </section>
        </section>
        
      <Alert content={alertContent.title} color={alertContent.color} isVisible={alertContent.isVisible}/>
      </>
      );
}

export default Home
