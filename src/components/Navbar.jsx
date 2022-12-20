import React from 'react'
function Navbar() {
    return (
        <>
            <nav className='py-10 mb-12 flex justify-between'>
                <h1 className='text-xl dark:text-white'> Brandon Waine </h1>
                <ul className='flex items-center text-white gap-20'>
                    <li><a href="https://docs.google.com/document/d/1uKE3MtJCa4JPfJBIDbJRPDRUPP_Y6s_a4MA_T-fGNmw/edit?usp=sharing" className='bg-[#e91d63] text-white px-10 py-2 rounded ml-8 hover:shadow-lg hover:bg-[#c51552]'> CV </a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;