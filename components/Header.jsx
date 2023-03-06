import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {SlMenu} from 'react-icons/sl'
import {TfiClose} from 'react-icons/tfi'


export default function Header() {
    const [toggle, setToggle] = useState(false)

  return (
    <div className="flex justify-between items-center">
        {/* navbar desktop */}
        <nav className="hidden md:flex space-x-36 text-[1.3rem]">
            <Link href='/'>
                <p>Home</p>
            </Link>
            <Link href='/contact'>
                <p>Contact</p>
            </Link>
        </nav>

        {/* navbar mobile */}
        <div className="flex flex-col md:hidden group z-10">
        {toggle
            ? <TfiClose size={'2rem'} onClick={() => setToggle(false)} />
            : <SlMenu size={'2rem'} onClick={() => setToggle(true)} />
        }
        {toggle &&
            <div className="absolute w-full left-0 top-16 bg-cor30 flex flex-col items-center gap-28 text-[2rem] py-8">
                <Link href='/'onClick={() => setToggle(false)} >
                <p>Home</p>
                </Link>
                <Link href='/contact'>
                    <p>Contact</p>
                </Link>
            </div>
        }
        </div>

        {/* logo */}
        <Link href='/'>
            <Image src='/logo.png' width={50} height={50} alt='Logo' />
        </Link>
    </div>
  )
}
