import React, {useEffect, useState} from 'react'
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
  const [hasBalance, setHasBalance] = useState(false)
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
  }, [])

  // functions
  const saveName = () => {
    if(userName !== ""){
      localStorage.setItem("name", userName);
      setIsUserPopup(false)
    }
  }
  const saveBalance = () => {
    if(balance !== ""){
      localStorage.setItem("balance", JSON.stringify({
        balance: Number(balance),
        expense: 0
      }));
      setHasBalance(true)
    }
  }
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
