'use client'

import Header from "./component/Header"
import GiphySearch from "./component/GiphySearch"
import "./Firebase"
import { useEffect,useState } from 'react'
import { useRouter } from "next/navigation";
import { getAuth} from "firebase/auth";
export default function Home() {
const router = useRouter();
const [user, setUser] = useState({})
const auth = getAuth();
  useEffect(()=>{
        //check if user is already authenticated or not
        const unsubscribe =  auth.onAuthStateChanged((authuser)=>{
            if(authuser){
                setUser(authuser);
                router.push('/')
              }else{
                setUser({});
                router.push('/login')
            }
        });

        return () => unsubscribe();
    },[])

  return (
    <div className="min-h-screen">
    <Header/>
    {/* <Giffy/> */}
    <GiphySearch/>
    </div>
    
  )
}
