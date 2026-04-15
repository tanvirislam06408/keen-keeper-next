import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-15 gap-5 text-center'>
            <h1 className='font-bold text-3xl md:text-5xl text-[#1F2937] '>Friends to keep close in your life</h1>
            <p className='text-[16px] text-[#64748B] font-normal'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</p>
            <button className='btn bg-[#244D3F] text-white hover:bg-[#244D3F99] hover:text-black'>+ Add a Friend</button>


           <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-6">
             <div className='flex flex-col justify-center items-center gap-2.5 px-3 py-7 border-2 w-full border-gray-100 rounded-2xl'>
                <h1 className='text-3xl font-semibold text-[#244D3F]'>8</h1>
                <p className='text-lg text-gray-500'>Total Friends</p>
            </div>
             <div className='flex flex-col justify-center items-center gap-2.5 px-3 py-7 border-2 w-full border-gray-100 rounded-2xl'>
                <h1 className='text-3xl font-semibold text-[#244D3F]'>3</h1>
                <p className='text-lg text-gray-500'>On Track</p>
            </div>
             <div className='flex flex-col justify-center items-center gap-2.5 px-3 py-7 border-2 w-full border-gray-100 rounded-2xl'>
                <h1 className='text-3xl font-semibold text-[#244D3F]'>6</h1>
                <p className='text-lg text-gray-500'>Need Attention</p>
            </div>
             <div className='flex flex-col justify-center items-center gap-2.5 px-3 py-7 border-2 w-full border-gray-100 rounded-2xl'>
                <h1 className='text-3xl font-semibold text-[#244D3F]'>10</h1>
                <p className='text-lg text-gray-500'>Interactions This Month</p>
            </div>
           </div>



        </div>
    );
};

export default Banner;