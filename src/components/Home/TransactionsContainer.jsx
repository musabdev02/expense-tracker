import React from 'react'
// components
import Transaction from './Transaction'
import Button from '../UI/Button'
const Transactions = ({ newTransRq }) => {
  let transcations = JSON.parse(localStorage.getItem("transcations")) || [];
  return (
    <div className='mt-12'>
      <h3 className='text-2xl font-semibold text-zinc-600'>Recent Transactions</h3>
      <div className='flex justify-between mt-4 text-zinc-600 w-[98%] relative addUnderline pb-3'>
        <p>Transaction name</p>
        <p>Amount</p>
        <p>Date</p>
        <p>Time</p>
        <p>Actions</p>
      </div>
      <div className='removeScroll h-[330px] overflow-y-auto'>
        {
          transcations.length >= 1 ?
          transcations.reverse().map((item, index) => (
            <Transaction title={item.title} amount={item.amount} key={index} date={item.date} time={item.time} /> 
          )):
          <div className='h-full flex items-center justify-center flex-col gap-4'>
            <h4 className='text-lg text-zinc-600'>There is no transcations yet..</h4>
           <span onClick={newTransRq}><Button content={"Add Transcation"} /></span> 
          </div>
        }
      </div>
    </div>
  )
}

export default Transactions
