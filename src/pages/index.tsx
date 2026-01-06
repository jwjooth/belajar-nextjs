// import styles from "@/styles/Home.module.css";
// import { Geist, Geist_Mono } from "next/font/google";
// import Head from "next/head";
// import Image from "next/image";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

import { ChangeEventHandler, ReactNode, useState } from "react";
import Head from "next/head";

export type User = {
  name: string
  age: number
  email: string
}

export type ButtonProps = {
  className?: string
  onClick(): void
  children: ReactNode
}

// props
function Button(props: ButtonProps): ReactNode {
  return (
    <>
      <button onClick={props.onClick} className={props.className}>
        {props.children}
      </button>
    </>
  )
}


export default function Home() {
  // state
  const [text, setText] = useState<string>("")
  const [myState, setMyState] = useState<number>(0)
  const [currentUser] = useState<User>({
    name: "jordan theovandy",
    age: 20,
    email: "jordantheovandyferdinand@gmail.com"
  })

  const handlingText: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value)
    console.log(e.target.value)
  }

  function handlingState(): void {
    setMyState(myState + 1)
  }

  function resetState(): void {
    setMyState(0)
  }

  return (
    <>
    <Head>
      <title>Dashboard Page</title>
    </Head>
      <p>hello world jordan!</p>
      <button onClick={handlingState}>
        <p>{myState}</p>
      </button>
      <button onClick={resetState}>reset button</button>
      <div className="">
        <p>{currentUser.name}</p>
        <p>{currentUser.age}</p>
        <p>{currentUser.email}</p>
      </div>
      <Button onClick={function () { }}>
        hai miskah
      </Button>
      <input type="text" onChange={handlingText} className="p-4 border rounded-md w-[540px] text-black" />
    </>
  );
}
