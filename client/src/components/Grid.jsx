import { useState, useEffect } from 'react'

const Grid = ({setButtonValue, buttonValue}) => {

    const [gridValues, setGridValues] = useState(Array(30).fill(null))
    const [wordEntered, setWordEntered] = useState('')
    const ansIndex = [4, 9, 14, 19, 24, 29]
    const checkIndex = [5, 10, 15, 20, 25]
    
    const [answersByUser, setAnswersByUser] = useState(new Map())
    const [wordEnterRowIndex, setWordEnterRowIndex] = useState(null)
    const [equalLetters, setEqualLetters] = useState([])
    const [differentPLaceLetters, setDifferentPlaceLetters] = useState([])
    
    const wordleAnswer = 'MAGIC'


     
    useEffect(() => {
        if(buttonValue === 'Backspace'){
            const tempIndex = gridValues.findIndex((value) => value === null) 
            if(tempIndex !== -1  && !answersByUser.has(tempIndex)){
                    const newValue = [...gridValues]
                    newValue[tempIndex - 1] = null
                    setGridValues(newValue)
                
            }
         
        }
        else if(buttonValue === 'Enter'){
            const tempIndex = gridValues.findIndex((value) => value === null) 
            let res = ''
            if(tempIndex !== -1){
                const enterIndex = ansIndex.indexOf(tempIndex - 1)
                if(enterIndex !== -1){
                    gridValues.slice(ansIndex[enterIndex] - 4, ansIndex[enterIndex] + 1).forEach((ch) => {
                        res += ch
                    })
                    setWordEntered(res)
                    setAnswersByUser((prevMap) => 
                    new Map(prevMap).set(ansIndex[enterIndex] + 1, res )
                    )
                    setWordEnterRowIndex(Math.floor((ansIndex[enterIndex] + 1) / 5))
                    
                    

                }
            }

        }
        else if(buttonValue){
            const index = gridValues.findIndex((value) => value === null)
            if(index !== -1){
                //  continue from here 
            
                const newLineIndex = checkIndex.indexOf(index)
                if(newLineIndex == -1){
                    const newGridValues = [...gridValues]
                        newGridValues[index] = buttonValue
                        setGridValues(newGridValues)
                }
                else if (newLineIndex !== -1){
                    if(answersByUser.has(checkIndex[newLineIndex])){
                        const newGridValues = [...gridValues]
                        newGridValues[index] = buttonValue
                        setGridValues(newGridValues)
                    }
                }
                
            }
        }
    },[buttonValue])

   



    


    useEffect(() => {
        if (wordleAnswer.length === wordEntered.length && wordEntered !== '') {
          const newEqualLetters = [];
          const newDifferentPlaceLetters = [];
      
          for (let i = 0; i < wordleAnswer.length; i++) {
            if (wordleAnswer[i] === wordEntered[i]) {
              newEqualLetters.push(i);
            } else if (wordleAnswer.includes(wordEntered[i])) {
              newDifferentPlaceLetters.push(i);
            }
          }
      
          setEqualLetters(newEqualLetters);
          setDifferentPlaceLetters(newDifferentPlaceLetters)
       
        } 
        else {
          setEqualLetters([]);
          setDifferentPlaceLetters([]);
        }
      }, [wordEntered]);

      useEffect(() => {
        const timer = setTimeout(() => {
          setDifferentPlaceLetters([]);
          setEqualLetters([]);

        }, 10000); // Reset state after 5 seconds
    
        return () => {
          clearTimeout(timer); // Clear the timer on unmount
        };
      }, [equalLetters, differentPLaceLetters]); 



    useEffect(()=>{
        console.log(wordEntered)
        console.log(answersByUser)

    },[wordEntered])

    
  return (
    <>
      <div className="text-center">
        {[...Array(6)].map((_, rowIndex) => (
          <div className={`flex justify-center m-[5px]`} key={rowIndex}>
            {[...Array(5)].map((_, itemIndex) => {
           
              return (
                <div
                  className={`border-2 text-center p-3 border-solid
                   border-gray-500 w-[52px] h-[52px] m-[5px]
                    ${equalLetters.indexOf(rowIndex * 5 + itemIndex) != -1 ? 'bg-green-700' : '' }
                    ${differentPLaceLetters.indexOf(rowIndex * 5 + itemIndex) != -1 ? 'bg-yellow-600': ''}
                    `}
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