import React from 'react'
import { MdFileUpload, MdFileDownload } from 'react-icons/md'

const data=[
    {
        name:"Camera 1",
        status:"Active",
        lastMotion:"2m ago"
    }
    ,
    {
        name:"Camera 2",
        status:"Active",
        lastMotion:"2m ago"
    },
    {
        name:"Camera 3",
        status:"InActive",
        lastMotion:"6m ago"
    },
    {
        name:"Camera 4",
        status:"InActive",
        lastMotion:"60m ago"
    }
    ,
    {
        name:"Camera 5",
        status:"Active",
        lastMotion:"10m ago"
    },
    {
        name:"Camera 6",
        status:"Active",
        lastMotion:"11m ago"
    }
]

function Surveillance() {
  return (
    <div className='w-full px-5 py-[5%] h-[80%] overflow-y-auto overflow-x-hidden flex items-center gap-5 flex-wrap  bg-slate-100'>

        {data.map((elem,idx)=>
            
                <div key={idx} className='w-64 h-60 px-4 py-4 bg-white rounded flex flex-col shadow-xl'>
                <div className='w-full h-11 bg-white rounded flex justify-between items-center'>
                    <h2 className='text-xl font-bold'>Camera 1</h2>
                    <div className='flex justify-between p-2 items-center'>
                    <MdFileUpload className="text-xl cursor-pointer hover:text-blue-500" />
                    <MdFileDownload className="text-xl cursor-pointer hover:text-blue-500" />
                    </div>
                </div>
                <div className='w-full h-32 bg-zinc-100 rounded'>
                    <img src="" alt="" />
                </div>
    
                <div className='w-full h-21 py-2 bg-white rounded flex justify-between items-center'>
                    <p className='text-sm text-gray-600'>Status:Active</p>
                    <p className='text-sm  text-gray-600'>Last Motion : 2m ago</p>
                </div>
            </div>
            
        )}
       
      
    </div>
  )
}

export default Surveillance
