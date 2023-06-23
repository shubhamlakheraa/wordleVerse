import Head from "next/head";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Grid from "@/components/Grid";
import Keyboard from "@/components/Keyboard";
import { useState, useEffect } from "react";
const poppin = Poppins({ weight: "600", subsets: ["latin"] });

const API_URL = 'https://wordleverse.onrender.com'

export async function getServerSideProps(context) {
  let answer 
  try {
    const response  = await fetch(`${API_URL}/answer`)
    const data = await response.json()
    answer = data
    console.log(data)
  } catch (error) {
    console.log(error.response.data)
  }

  return {
    props: {
      answer
    }
  }
}

export default function Home(props) {

  
  const [buttonValue, setButtonValue] = useState("");
  const [colSchema, setColSchema] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  // console.log(props.answer)

  return (
    <>
      <div>
        <Head>
          <title>WordleVerse</title>
        </Head>
        <div className="flex justify-center mt-5">
          <img src="/icon.png" />
          <h1 className={`ml-5 text-4xl text-center  ${poppin.className} `}>
            WordleVerse
          </h1>
        </div>

        <Grid
          setButtonValue={setButtonValue}
          buttonValue={buttonValue}
          setColSchema={setColSchema}
          setWordEntered={setWordEntered}
          wordEntered={wordEntered}
          answer={props.answer}
        />
        <Keyboard
          setButtonValue={setButtonValue}
          buttonValue={buttonValue}
          colSchema={colSchema}
          wordEntered={wordEntered}
        />
      </div>
    </>
  );
}
