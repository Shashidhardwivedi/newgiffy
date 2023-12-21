'use client'

import { getAuth, signOut } from "firebase/auth";



import React, { useEffect } from "react"
import { useState } from "react"
import Link from "next/link";
import auth from "../Firebase"
import 'bootstrap/dist/css/bootstrap.min.css'

import { useRouter } from "next/navigation";
// import { unsubscribe } from "diagnostics_channel";
//const auth = getAuth();
<style>
@media screen and (max-width: 450px) {
    
    
  }
</style>
export default function Home() {

    const router = useRouter();

    const handleSignOut = (e:any) => {
        e.preventDefault();
        const auth = getAuth();
        signOut(auth).then(() => {
            alert("signout succesfully")
            router.push("/login")
        }).catch((error) => {
            alert(error)
        });

    }
    return (
        <div className=" min-h-screen d-flex justify-content-center align-items-center vh-100 " style={{backgroundColor:"#E8EAEE"}} >
            <div className="bg-white p-9 rounded vh-30 justify-content-center align-items-center">
                <h6 className="justify-content-center align-items-center">are You sure you want to logout</h6>

                <button onClick={handleSignOut} className="btn btn-secondary w-100 rounded-0">
                    signout
                </button>
            </div>
        </div>

    );
}

