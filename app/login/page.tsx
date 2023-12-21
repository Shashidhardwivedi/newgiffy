'use client'
import React, { useEffect } from "react"
import { useState } from "react"
import Link from "next/link";
import auth from "../Firebase";
import 'bootstrap/dist/css/bootstrap.min.css'


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
// import { unsubscribe } from "diagnostics_channel";
// const auth = getAuth();


export default function Home() {

    const router = useRouter();
    const [Name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState({})



    const handleSubmit = (e:any) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert("login sucessfully")
                router.push("/")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
        
    }
    return (
        <div className="  min-h-screen d-flex justify-content-center align-items-center  vh-100" style={{backgroundColor:"#E8EAEE"}}>
            <div className="bg-white p-3 rounded  vh-50 " style={{width:"35%"}}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="email"
                            placeholder="Enter email"
                            autoComplete="on"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>password</strong>
                        </label>
                        <input type="password"
                            placeholder="Enter password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-secondary w-100 rounded-0">
                        Login
                    </button>
                </form>
                <p>Dont Have an Account</p>
                <Link href="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Sign up
                </Link>

            </div>
        </div>
    );
}
