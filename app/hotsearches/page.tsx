'use client'

import Header from "../component/Header"
import Hotsearches from "../component/Trending"
import { useEffect,useState } from 'react'
import { useRouter } from "next/navigation";
export default function Home() {
const router = useRouter();

  return (
    <div className="min-h-screen">
    <Header/>
    <Hotsearches/>
    </div>
    
  )
}
