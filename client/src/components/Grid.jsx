import { useState, useEffect } from 'react'
import WinModal from './Modal'


const Grid = ({setButtonValue, buttonValue}) => {

  const [win, setWin] = useState(false)

  const validate = (wordleAnswer, word) => { 
    const colors = []
    if (wordleAnswer.length === word.length && word !== '') {
      if(wordleAnswer === word){
        setWin(true)
      }
  
      for (let i = 0; i < wordleAnswer.length; i++) {
        if (wordleAnswer[i] === word[i]) {
          colors.splice(i, 0, 'green');
        } else if (wordleAnswer.includes(word[i])) {
          colors.splice(i, 0, 'yellow')
        }
        else{
          colors.splice(i, 0, 'black')
        }
      }

   }
   return colors

  }

    const [gridValues, setGridValues] = useState(Array(30).fill(null))


    const [wordEntered, setWordEntered] = useState('')


    const ansIndex = [4, 9, 14, 19, 24, 29]

    const checkIndex = [5, 10, 15, 20, 25]
    
    const [answersByUser, setAnswersByUser] = useState(new Map())

    const [wordEnterRowIndex, setWordEnterRowIndex] = useState(null)

    const [equalLetters, setEqualLetters] = useState([])

    const [differentPLaceLetters, setDifferentPlaceLetters] = useState([])
    const [totalAttempts, setTotalAttempts]  = useState([])
    const wordLength = 5

    const [attempt, setAttempts] = useState([
      {rowNumber: null, word: '', color: []},
      {rowNumber: null, word: '', color: []},
      {rowNumber: null, word: '', color: []},
      {rowNumber: null, word: '', color: []},
      {rowNumber: null, word: '', color: []},
      {rowNumber: null, word: '', color: []}
    ])
    

  
    
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
                    setTotalAttempts(prevArray => [...prevArray, res])
                    setAnswersByUser((prevMap) => 
                    new Map(prevMap).set(ansIndex[enterIndex] + 1, res )
                    )
                    setWordEnterRowIndex(Math.floor((ansIndex[enterIndex] + 1) / 5))

                    setAttempts((prevArray) => {
                      const newArray = [...prevArray]
                      newArray[Math.floor((ansIndex[enterIndex] + 1) / 5) - 1  ] = { ...newArray[Math.floor((ansIndex[enterIndex] + 1) / 5) - 1  ], 
                        rowNumber: Math.floor((ansIndex[enterIndex] + 1) / 5) - 1  ,
                        word: res,
                        color: res ? validate(wordleAnswer, res) : []
                       }
                       return newArray
                    
                    })
                    

                   
                    
                    

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

   



    


    // useEffect(() => {
    //     if (wordleAnswer.length === wordEntered.length && wordEntered !== '') {
    //       const newEqualLetters = [];
    //       const newDifferentPlaceLetters = [];
      
    //       for (let i = 0; i < wordleAnswer.length; i++) {
    //         if (wordleAnswer[i] === wordEntered[i]) {
    //           newEqualLetters.push(i);
    //         } else if (wordleAnswer.includes(wordEntered[i])) {
    //           newDifferentPlaceLetters.push(i);
    //         }
    //       }
      
    //       setEqualLetters(newEqualLetters);
    //       setDifferentPlaceLetters(newDifferentPlaceLetters)
       
    //     } 
    //     else {
    //       setEqualLetters([]);
    //       setDifferentPlaceLetters([]);
    //     }
    //   }, [wordEntered]);



   



    useEffect(()=>{
        console.log(wordEntered)
        console.log(answersByUser)
        // console.log(validateAnswer())
        console.log(typeof(wordEntered))
        console.log(totalAttempts)
        
        


    },[wordEntered])

    useEffect(() => {
      console.log(attempt)
      // validate(attempt)
    },[attempt])

    
  return (
    <>
      <div className="text-center">
        {[...Array(6)].map((_, rowIndex) => (
          <div className={`flex justify-center m-[3px]`} key={rowIndex}>
            {[...Array(5)].map((_, itemIndex) => {
              
              return (
                <div
                  className={`border-2 text-center p-3 border-solid
                   border-black text-[20px] font-semibold w-[52px] h-[52px] m-[5px]
                    ${
                      // equalLetters.indexOf(rowIndex * 5 + itemIndex) != -1 ? 'bg-green-700' : ''
                      attempt[rowIndex].rowNumber == rowIndex ? 
                        attempt[rowIndex].color[itemIndex] === 'green' ? 'bg-green-700'
                         : 
                        attempt[rowIndex].color[itemIndex] === 'yellow' ? 'bg-[#b59f3b]' 
                        : ''
                        : ''
                       
                    }
                    
                    `}
                  key={itemIndex}
                >
                  {gridValues[rowIndex * 5 + itemIndex]}
                </div>
              );
            })}
          </div>
        ))}
        <WinModal win={win} />
      </div>
    </>
  );
}

export default Grid