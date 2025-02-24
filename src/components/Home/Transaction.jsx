import React from 'react'
// ICONS
import { LuCakeSlice } from "react-icons/lu";
import Button from '../UI/Button';
const Transaction = () => {
  return (
    <div className='mt-6 flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <span className='bg-blue-300 p-2 rounded-md'><LuCakeSlice /></span>
        <h3>Mummy's cake</h3>
      </div>
      {/* amount */}
      <div>
        <h4>-$58.99</h4>
      </div>
      {/* date */}
      <div>
        <h3>27/10</h3>
      </div>
      {/* time */}
      <div>
        <h3>11:30Am</h3>
      </div>
      {/* actions */}
      <Button content={"Details"} isIcon={false} />
    </div>
  )
}

export default Transaction
