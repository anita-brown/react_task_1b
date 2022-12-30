import React from 'react'

const TableHeading = () => {

    

    return (
        <section>
            <div className='lg:flex lg:flex-row flex-col items-center justify-between mt-16'>
                <h1 className='text-white font-[200]'>Today’s leaderboard</h1>
                <div className='flex gap-2 mt-[1rem] text-white font-[100] text-xs items-center justify-center bg-secondary rounded-[1rem] px-4 py-4 lg:px-8 lg:py-4'>
                    <p>30 May 2022</p> <span className='font-bold text-[#696969]'>.</span>
                    <button className='rounded-md bg-btnColor py-[.1rem] md:px-2 md:py-1 lg:px-2 lg:py-1 text-gray-600'>SUBMISSIONS OPEN</button><span className='font-bold text-[#696969]'>.</span>
                    <p>11:34</p>
                </div>
            </div>

        </section>
    )
}

   


export default TableHeading
