import { useState, useEffect } from 'react'

const Grid = ({setButtonValue, buttonValue}) => {

    const [gridValues, setGridValues] = useState(Array(30).fill(null))
     
    useEffect(() => {
        if(buttonValue === 'Backspace'){
            const tempIndex = gridValues.findIndex((value) => value === null) 
            if(tempIndex !== -1){
                const newValue = [...gridValues]
                newValue[tempIndex - 1] = null
                setGridValues(newValue)
            }
        }
        else if(buttonValue){
            const index = gridValues.findIndex((value) => value === null)
            if(index !== -1){
                const newGridValues = [...gridValues]
                newGridValues[index] = buttonValue
                setGridValues(newGridValues)
            }
        }
    },[buttonValue])

    
  return (
    <>
      <div className="text-center">
        {[...Array(6)].map((_, rowIndex) => (
          <div className="flex justify-center m-[5px]" key={rowIndex}>
            {[...Array(5)].map((_, itemIndex) => {
        

              return (
                <div
                  className="border-2 text-center p-3 border-solid border-gray-500 w-[52px] h-[52px] m-[5px]"
                  key={itemIndex}
                >
                  {gridValues[rowIndex * 5 + itemIndex]}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}

export default Grid