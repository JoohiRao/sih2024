import React from 'react'
import { MdFileUpload, MdFileDownload } from 'react-icons/md'  // Add this import


const data=[
    {
        id:"12345",
        status:"Active",
        lastSeen:"2 hours ago"
    }
    ,
    {
        id:"12345",
        status:"Active",
        lastSeen:"2 hours ago"
    }
    ,
    {
        id:"12345",
        status:"Active",
        lastSeen:"2 hours ago"
    }
    ,
    {
        id:"12345",
        status:"Active",
        lastSeen:"2 hours ago"
    }
    ,
    {
        id:"12345",
        status:"Active",
        lastSeen:"2 hours ago"
    },
    {
        id:"12345",
        status:"Active",
        lastSeen:"2 hours ago"
    },
        {
            id:"12345",
            status:"Active",
            lastSeen:"2 hours ago"
        }
        ,
        {
            id:"12345",
            status:"Active",
            lastSeen:"2 hours ago"
        }
]

function Suspects() {
  return (
    <div className='w-full h-[80%] flex gap-10 flex-wrap overflow-y-auto overflow-x-hidden py-10'>

        {data.map((elem,idx)=>
        <div  className='w-64 h-80 px-3 py-4 bg-white rounded flex flex-col shadow-xl'>

                <div className='w-full h-11 bg-white rounded flex justify-between items-center px-4'>
                    <h2 className=''>Suspect Profile</h2>
                    <a href="#" className='text-blue-500 hover:text-blue-700 transition-colors'>
                        View Details
                    </a>
                </div>

                <div className='w-full h-32 bg-zinc-100 rounded'>
                    <img src="" alt="" />
                </div>
    
                <div className='w-full h-21 py-2 bg-white rounded flex flex-col justify-between'>
                    <div className='flex items-center justify-between mb-2'>

                    <p className='text-sm text-gray-600'>ID:</p>
                    <p className='text-sm  text-gray-600'>#12345</p>

                    </div>


                    <div className='flex items-center justify-between mb-2'>

                    <p className='text-sm text-gray-600'>Status:</p>
                    <button className='bg-blue-500 text-white px-2 py-1 rounded'>Active</button>

                    </div>


                    <div className='flex items-center justify-between mb-2'>

                    <p className='text-sm text-gray-600'>Last Seen:</p>
                    <p className='text-sm  text-gray-600'>2 hours ago</p>

                    </div>
                   
                </div>
            </div>
        )}
     
    </div>
  )
}

export default Suspects
