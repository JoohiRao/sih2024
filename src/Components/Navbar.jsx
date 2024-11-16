import React from 'react'
import { BsBell } from 'react-icons/bs'
import { BiUser, BiHome, BiChevronRight, BiFilterAlt } from 'react-icons/bi'


function Navbar() {
  return (
    <div className='w-full h-48  rounded-lg shadow-md flex  items-center justify-between flex-col px-1 gap-0 '>
        <div className=' h-20 w-[90%] p-4 flex border-b-2 border-gray-300 justify-between'>
            <input type="text" placeholder='Search...' className='w-[50%] h-full rounded-lg p-2 bg-slate-100' />
            <div className='flex gap-10 items-center justify-between pr-3'>
            <BsBell className="text-2xl cursor-pointer" />
            <BiUser className="text-2xl cursor-pointer" />
            </div>
        </div>

        <div className=' h-9 shadow-md border-b-2 border-gray-300 w-[90%] flex items-center'>
            <div className=' h-full w-[50%] rounded-lg flex gap-2 items-center px-5'>
            <BiHome className="text-xl cursor-pointer" />
            <BiChevronRight className="text-xl" />
            <p className='text-xl font-bold'>Map View</p>
            </div>

           
        </div>

 
        <div className='h-20 w-[90%] flex items-center justify-between py-4'>
            <h2 className='text-xl font-bold'>Map View</h2>

            <div className='flex gap-2'>
            <button className='bg-blue-500 text-white  px-4 py-2 rounded-lg'><BiFilterAlt className="text-2xl cursor-pointer" /> </button>
            <button className='bg-blue-900 text-white px-4 py-2'>Export Data </button>


            </div>
           
        </div>


      
    </div>
  )
}

export default Navbar
