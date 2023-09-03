import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const PostPoo = () => {
    return (
        <div className='md:flex justify-center  gap-36 my-20'>
            <section className='w-1/2'>
                <img src="https://www.aesop.com/u1nb1km7t5q7/6m4yuIyUcyfXMyKT17ZYsr/9bc9ba78322632d97323d73f364113f0/Aesop_Home_2023_Post-Poo_Drops_Web_Homepage_Secondary_Mid_Desktop_2560x1540px.png" alt="" />
            </section>
            <section className='w-1/2'>
           <h3 className='text-2xl '>
Post-Poo Drops has returned</h3>
<p className='my-8'>Here to make the malodorous melodious once <br /> again. Dispense this favoured formulation into the <br /> toilet bowl after flushing to effectively mask disagreeable odours.</p>
<button className=' flex  items-center gap-5  px-14 py-4  border-2 border-red hover:bg-black hover:text-white'> Discover post-poo-drops<span><AiOutlineArrowRight></AiOutlineArrowRight></span></button>
            </section>
                    </div>
    );
};

export default PostPoo;