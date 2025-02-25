
const Card = ({ content, addClass, balance}) => {
    return (
      <div className={` ${addClass} shadow-md p-4 sm:w-[50%] h-[150px] sm:h-[200px] rounded-md flex flex-col justify-between`}>
        <p className='text-zinc-200'>{content}</p>
        {
          <h3 className='font-bold text-4xl sm:text-5xl text-white'>${balance}</h3>
        }
      </div>
    )
  }
  
  export default Card
  