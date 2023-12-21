'use client'
import React from "react"
import { useState,useEffect } from "react"
import Link from "next/link";
import auth from "../Firebase";
import 'bootstrap/dist/css/bootstrap.min.css'

import { useRouter } from "next/navigation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// const auth = getAuth();

export default function Home() {

  const router = useRouter();
  const [Name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState({})

  useEffect(() => {
    //check if user is already authenticated or not
    const unsubscribe = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        setUser(authuser);
        router.push('/')
      } else {
        setUser({});
        router.push("/signup")
      }
    });

    return () => unsubscribe();
  }, [])

  const handleSubmit = (e:any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert("signup successfully");
        router.push("/login")
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });
  }
  return (
    <div className=" min-h-screen d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#E8EAEE" }}>
      <div className="bg-white p-3 rounded " id="signmain" style={{ width: "42%" }}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input type="text"
              placeholder="Enter Name"
              autoComplete="on"
              name="Name"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            Register
          </button>
        </form>
        <p>Already Have an Account</p>
        <Link href="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
          Login
        </Link>

      </div>

    </div>
  );
}
