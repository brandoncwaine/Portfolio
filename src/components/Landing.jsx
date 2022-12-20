import React from 'react';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import brandon from '../assets/brandon.png'

function Landing() {
    return (
        <main>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-[#e91d63] font-medium md:text-6xl'>Brandon Waine</h2>
            <h3 className='text-2xl py-2 dark:text-white'>Front-end web developer.</h3>
            <div className='relative mx-auto bg-gradient-to-r from-[#e91d63] to-[#c12081] rounded-full w-80 h-80 my-10 overflow-hidden'>
              <img src={brandon} alt="Portrait of Brandon" />
            </div>
            <p className='text-lg py-5 leading-8 text-gray-800 dark:text-gray-400'>
              I&apos;m passionate about creating stunning web applications using the latest technologies.
            </p>
            <div className='text-5xl flex justify-center gap-16 text-gray-800 dark:text-gray-400'>
              <AiFillLinkedin/>
              <AiFillGithub/>
            </div>
          </div>
      </main>
    );
}

export default Landing;