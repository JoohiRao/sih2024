import React from 'react'
import { IoNotifications } from "react-icons/io5";
import { IoShieldCheckmark } from "react-icons/io5";

import { IoRefreshCircle } from "react-icons/io5";
import { IoCloudUpload } from "react-icons/io5";



function Control() {
  return (
    <div className='w-full px-5 py-[5%] h-[80%] overflow-y-auto overflow-x-hidden bg-slate-100'>

    <div className='w-[60%] h-[80%] shadow-lg bg-white py-2 px-8'>
        <div className='flex items-center justify-between'>
        <h2 className='text-xl font-bold px-4 py-2 mb-3'>User Roles & Permissions</h2>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Add Role</button>

        </div>
        

      
        <div className='flex items-center mb-3 justify-between bg-zinc-100 py-4 px-8'>
            <div className='flex items-center gap-3'>
            <IoShieldCheckmark className="text-xl" />
                <div>
                    <p className='font-bold'>Administrator</p>
                    <p className='text-sm text-gray-600'>3 users</p>
                </div>
            </div>
            <a href="#" className='text-blue-500 hover:text-blue-700'>Edit</a>
        </div>

        <div className='flex items-center mb-3 justify-between bg-zinc-100 py-4 px-8'>
            <div className='flex items-center gap-3'>
            <IoShieldCheckmark className="text-xl" />
                <div>
                    <p className='font-bold'>Operator</p>
                    <p className='text-sm text-gray-600'>3 users</p>
                </div>
            </div>
            <a href="#" className='text-blue-500 hover:text-blue-700'>Edit</a>
        </div>
        <div className='flex items-center mb-3 justify-between bg-zinc-100 py-4 px-8'>
            <div className='flex items-center gap-3'>
            <IoShieldCheckmark className="text-xl" />
                <div>
                    <p className='font-bold'>Viewer</p>
                    <p className='text-sm text-gray-600'>3 users</p>
                </div>
            </div>
            <a href="#" className='text-blue-500 hover:text-blue-700'>Edit</a>
        </div>

       

    </div>
  
</div>
  )
}

export default Control
