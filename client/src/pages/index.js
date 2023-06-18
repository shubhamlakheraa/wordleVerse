import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Grid from '@/components/Grid'
import Keyboard from '@/components/Keyboard'
import {useState, useEffect} from "react"
const poppin = Poppins({ weight: '700', subsets: ['latin'] })

export default function Home() {

const [buttonValue, setButtonValue] = useState('')



  return (
    <>
    <div>
      <h1 className={`text-4xl text-center ${poppin.className} `}>
      WordleVerse
      </h1>
      <Grid setButtonValue={setButtonValue} buttonValue={buttonValue} />
      <Keyboard setButtonValue={setButtonValue} buttonValue={buttonValue} />
      
    </div>
    </>
  
  )
}
