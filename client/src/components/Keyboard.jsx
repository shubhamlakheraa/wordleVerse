import { Arapey } from 'next/font/google'
import { useState, useEffect } from 'react'

const Keyboard = ({setButtonValue, buttonValue}) => {

    const [isPressing, setIsPressing] = useState(false)


    // const handleClick = (value) => { 
    //         setButtonValue(value)
    //  }

     const handleMouseDown = (value) => {
        setIsPressing(true)
        setButtonValue(value)
     }

     const handleMouseUp = () => {
        setIsPressing(false)
        setButtonValue(null)
     }

     useEffect(()=>{
        if(isPressing){
            const timeoutId = setInterval(()=>{
                setButtonValue(buttonValue)
            },2000)
            return ()=> {
                clearInterval(timeoutId)
            }
        }
     },[isPressing])

  return (
    <>
    <div>
        <div className='flex justify-center'>
            {
                [...Array('Q','W','E','R','T','Y','U','I','O','P')].map((res, rowIndex) => (
                        <button 
                        // onClick={() => handleClick(res)} 
                        onMouseDown={() => handleMouseDown(res)}
                        onMouseUp={handleMouseUp}  
                        key={rowIndex} 
                        className='m-[0.5rem] w-[50px] text-center p-5 rounded-md text-[20px] bg-[#393E46]'>{res}</button>
                ))}    

        </div>

        <div className='flex justify-center'>
            {
                [...Array('A','S','D','F','G','H','J','K','L')].map((res, rowIndex) => (
                        <button 
                        // onClick={() => handleClick(res)} 
                        onMouseDown={() => handleMouseDown(res)}
                        onMouseUp={handleMouseUp}
                        key={rowIndex} 
                        className='m-[0.5rem] w-[50px]  p-5 rounded-md text-[20px] bg-[#393E46] text-center'>{res}</button>
                ))}    

        </div>

        <div className='flex justify-center'>

        <button 
        // onClick={() => handleClick('Enter')}
        onMouseDown={() => handleMouseDown('Enter')}
        onMouseUp={handleMouseUp} 
        className='m-[0.5rem] w-[90px]  p-5 rounded-md text-[20px] bg-[#393E46]'>
            Enter
        </button>

            {
                [...Array('Z','X','C','V','B','N','M')].map((res, rowIndex) => (
                        <button 
                        // onClick={() => handleClick(res)} 
                        onMouseDown={() => handleMouseDown(res)}
                        onMouseUp={handleMouseUp}
                        key={rowIndex} 
                        className='m-[0.5rem] w-[50px]  p-5 rounded-md text-[20px] bg-[#393E46]'>{res}</button>
                ))}    
        <button 
        //  onClick={() => handleClick('Backspace')}
         onMouseDown={() => handleMouseDown('Backspace')}
         onMouseUp={handleMouseUp}
         className='m-[0.5rem] w-[80px]  p-5 rounded-md text-[20px] bg-[#393E46]'><img src='/clear.png' /></button>
        </div>
        

    </div>
    </>
  )
}

export default Keyboard