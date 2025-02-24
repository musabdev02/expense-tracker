import React from 'react'
import Transaction from './Transaction'
const Transactions = () => {
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
        <Transaction />
      </div>
    </div>
  )
}

export default Transactions
