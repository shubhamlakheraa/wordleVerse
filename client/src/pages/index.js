import Head from 'next/head'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Grid from '@/components/Grid'
import Keyboard from '@/components/Keyboard'
import {useState, useEffect} from "react"
const poppin = Poppins({ weight: '600', subsets: ['latin'] })

export default function Home() {

const [buttonValue, setButtonValue] = useState('')



  return (
    <>
    <div>
      <Head>
        <title>WordleVerse</title>
      </Head>
      <div className='flex justify-center mt-5'>
      <img src='/icon.png' />
      <h1 className={`ml-5 text-4xl text-center  ${poppin.className} `}>
        
      WordleVerse
      </h1>
      
      </div>
      
      <Grid setButtonValue={setButtonValue} buttonValue={buttonValue} />
      <Keyboard setButtonValue={setButtonValue} buttonValue={buttonValue} />
      
    </div>
    </>
  
  )
}
