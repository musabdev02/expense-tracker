import React, { useState } from 'react'
// components
import Transaction from './Transaction'
import Button from '../UI/Button'
import Transdetail from './Transdetail'
const Transactions = ({ newTransRq }) => {
  let transcations = JSON.parse(localStorage.getItem("transcations")) || [];
  const [rqDetails, setRqDetails] = useState(false);
  const [details, setDetails] = useState({});
  // funcs
  const openDetails = (index) => {
    setRqDetails(true)
    setDetails(transcations[index]);
  };
  const closeDetails = () => {setRqDetails(false)}
  return (
    <>
    {
      rqDetails && <Transdetail details={details} closeDetails={closeDetails} />
    }
    <div className='mt-12'>
      <h3 className='text-xl sm:text-2xl font-semibold text-zinc-600'>Recent Transactions</h3>
      <div className='flex justify-between mt-4 text-zinc-600 w-[98%] relative addUnderline pb-3'>
        <p>Transaction name</p>
        <p>Amount</p>
        <p className='hidden sm:block'>Date</p>
        <p className='hidden sm:block'>Time</p>
        <p>Actions</p>
      </div>
      <div className='hiddenScrollbar mb-20 md:h-[330px] sm:overflow-y-auto'>
        {
          transcations.length >= 1 ?
          transcations.reverse().map((item, index) => (
            <Transaction title={item.title} amount={item.amount} key={index} i={index} date={item.date} time={item.time} icon={item.icon} openDetails={openDetails} closeDetails={closeDetails}/> 
          )):
          <div className='h-full flex items-center justify-center flex-col gap-4'>
            <h4 className='text-md sm:text-lg text-zinc-600'>There is no transcations yet..</h4>
           <span onClick={newTransRq}><Button content={"Add Transcation"} /></span> 
          </div>
        }
      </div>
    </div>
    </>
  )
}

export default Transactions
