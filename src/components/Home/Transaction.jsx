import React from 'react'
// ICONS
import * as Icons from "react-icons/fa";
import Button from '../UI/Button';
const Transaction = ({ title, amount, date, time, icon, i, openDetails }) => {
  const IconComponent = Icons[icon] || Icons.FaQuestionCircle
  return (
    <div className='mt-6 flex items-center justify-between'>
      <div className='flex items-center gap-2 w-[144px]'>
        <span className='bg-blue-300 p-2 rounded-md'><IconComponent /></span>
        <h3>{title}</h3>
      </div>
      {/* amount */}
      <div>
        <h4>-${amount}</h4>
      </div>
      {/* date */}
      <div className='hidden sm:block'>
        <h3>{date}</h3>
      </div>
      {/* time */}
      <div className='hidden sm:block leading-1'>
        <h3>{time}</h3>
      </div>
      {/* actions */}
      <span onClick={() => openDetails(i)}>
      <Button content={"Details"} isIcon={false} />
      </span>
    </div>
  )
}

export default Transaction
