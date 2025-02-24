
const Card = ({ content, addClass, balance}) => {
    return (
      <div className={` ${addClass} shadow-md p-4 w-[50%] h-[200px] rounded-md flex flex-col justify-between`}>
        <p className='text-zinc-200'>{content}</p>
        {
          <h3 className='font-bold text-5xl text-white'>${balance}</h3>
        }
      </div>
    )
  }
  
  export default Card
  