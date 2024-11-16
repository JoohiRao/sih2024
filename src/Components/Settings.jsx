import React from 'react'
import { IoNotifications } from "react-icons/io5";
import { IoShieldCheckmark } from "react-icons/io5";

import { IoRefreshCircle } from "react-icons/io5";
import { IoCloudUpload } from "react-icons/io5";



function Settings() {
  return (
    <div className='w-full px-5 py-[5%] h-[80%] overflow-y-auto overflow-x-hidden bg-slate-100'>

        <div className='w-[40%] h-[80%] shadow-lg bg-white py-2 px-8'>
            <h2 className='text-xl font-bold px-4 py-2 mb-3'>System Settings</h2>

            <div className='flex items-center mb-3 justify-between bg-zinc-100 py-4 px-8'>
                <div className='flex items-center gap-3'>
                <IoNotifications className="text-xl" />
                    <p className='font-bold'>Notifications</p>
                </div>
                <a href="">Configure</a>
            </div>
            <div className='flex items-center mb-3 justify-between bg-zinc-100 py-4 px-8'>
                <div className='flex items-center gap-3'>
                <IoShieldCheckmark className="text-xl" />
                    <p className=' font-bold'>Security</p>
                </div>
                <a href="">Configure</a>
            </div>
            <div className='flex items-center mb-3 justify-between bg-zinc-100 py-4 px-8'>
                <div className='flex items-center gap-3'>
                <IoCloudUpload className="text-xl" />

                    <p className='font-bold'>Backup</p>
                </div>
                <a href="">Configure</a>
            </div>
            <div className='flex items-center mb-3 justify-between bg-zinc-100 py-4 px-8'>
                <div className='flex items-center gap-3'>
                   
                <IoRefreshCircle className="text-xl" />
                    <p className='font-bold'>Updates</p>
                </div>
                <a href="">Configure</a>
            </div>

        </div>
      
    </div>
  )
}

export default Settings
