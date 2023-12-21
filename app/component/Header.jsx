import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from "../styles.module.css"

function Header() {
    const [navbar, setNavbar] = useState(false);
    return (
        <div className={styles.header}>
            <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10 ">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link href="/">
                                <h2 className="text-2xl text-cyan-600 font-bold " style={{textDecoration:"none",color:"black"}}>GIFFY</h2>
                            </Link>
                            {/* HAMBURGER BUTTON FOR MOBILE */}
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <Image src="./burger-menu-svgrepo-com.svg" width={30} height={30} alt="logo" />
                                    ) : (
                                        <Image
                                            // src="./burger-menu-svgrepo-com.svg"
                                            src={"./burger-menu-svgrepo-com.svg"}
                                            width={30}
                                            height={30}
                                            alt="logo"
                                            className="focus:border-none active:border-none"
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                                }`}
                        >
                            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                                <li className="pb-6 text-xl text-rgb(161, 169, 177) py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-cyan-600 md:hover:bg-transparent">
                                    <Link href="/hotsearches" style={{textDecoration:"none",color:"black"}} onClick={() => setNavbar(!navbar)}>
                                        Hot Searches
                                    </Link>
                                </li>
                                <li className="pb-6 text-xl text-rgb(161, 169, 177) py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-cyan-600 md:hover:bg-transparent">
                                    <Link href="/logout" style={{textDecoration:"none" ,color:"black"}} onClick={() => setNavbar(!navbar)}>
                                        Log Out
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Header;