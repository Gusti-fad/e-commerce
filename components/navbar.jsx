import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className='flex mx-3 md:mx-20 md:mt-10 h-[5rem] bg-none items-center'>
            <h1 className='font-inter font-bold text-slate-900 ml-5 text-[20px]'>TTGUTE STORE</h1>
            <button className='md:hidden ml-auto mr-3'><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/></svg></button>
            <ul className='hidden md:flex ml-auto space-x-10 font-poppins text-slate-500'>
                <li><Link href=''>Home</Link></li>
                <li><Link href=''>About</Link></li>
                <li><Link href=''>Catalogue</Link></li>
                <li><Link href=''>Contact</Link></li>
                <li><input className='bg-slate-300 ml-3 px-3 py-1 rounded-full' type="text" placeholder='Search' /></li>
            </ul>
        </nav>
    )
}

export default Navbar