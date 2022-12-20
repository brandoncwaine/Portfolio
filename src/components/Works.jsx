import React from 'react';
import work1 from '../assets/muusite.png'

function Works() {
    return (
        <section className='text-black dark:text-white pb-10'>
            <h2 className='my-4 py-10 max-w-5xl mx-auto'> My Works </h2>
            <div className='mx-auto w-full pb-10 bg-slate-100 rounded-xl overflow-hidden lg:w-[70%] xl:w-[60%] dark:bg-slate-800'>
                <img src={work1} alt="Preview of the Muu Website" />
                <h2 className='py-2 font-bold px-5 mt-5'> Muu eCommerce Site </h2>
                <p className='text-gray-500 px-5 py-5 dark:text-gray-100'>
                    Built for a University assignment with PHP and SCSS featuring password hashing,
                    responsive user interface and a mySqli database.
                </p>
                <a 
                    href="https://s5407535.bucomputing.uk/site/index.php" 
                    className='bg-[#e91d63] mx-5 text-white px-10 py-2 rounded  hover:shadow-lg hover:bg-[#c51552]'
                > 
                View 
                </a>
            </div>
        </section>
    );
}

export default Works;