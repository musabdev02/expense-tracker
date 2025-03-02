import React from 'react'
// components
import Button from '../components/UI/Button'
const Transactions = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-center justify-between">
          <h3 className="font-semibold text-xl sm:text-3xl text-blue-900">
            All Transactions
          </h3>
          <span>
            <Button content={"Add New Transaction"} isIcon={true} />
          </span>
        </div>
    </div>
  )
}

export default Transactions
