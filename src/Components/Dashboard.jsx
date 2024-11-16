import React from 'react'
import { FaCamera } from 'react-icons/fa'

function Dashboard() {

    const data=[
        {
            title:"Live Recognition",
            percent:98.2,
            icon:<FaCamera className='text-2xl cursor-pointer text-green-700'/>,
            desc:"Accuracy Rate"

        },{
            title:"Active Alerts",
            percent:12,
            icon:<FaCamera className='text-2xl cursor-pointer text-green-700'/>,
            desc:"Total Records"
        }
        ,
        {
            title:"Database Entries",
            percent:1234,
            icon:<FaCamera className='text-2xl cursor-pointer text-green-700'/>,
            desc:"Total Records"
        }
        ,
        {
            title:"System Health",
            percent:100,
            icon:<FaCamera className='text-2xl cursor-pointer text-green-700'/>,
            desc:"All Systems Operational"
        }
    ]
  return (

    <div className='w-full h-full bg-gray-100'  >

<div className='w-full h-34 py-6 px-10 flex gap-4 bg-gray-100'>

{data.map((elem,idx)=>
<div className='w-72 rounded-md shadow-md card  flex flex-col h-32 p-3 px-6 bg-white'>
    <p className='text-xl font-bold'>{elem.title}</p>
    <div className='flex items-center justify-between'>

        <h2 className='percent text-2xl font-bold text-green-500'>{elem.percent}%</h2>
        {elem.icon}

    </div>

    <p className='text-sm'>{elem.desc}</p>
   



</div>
)}



</div>

<div className='w-full flex gap-2'>
    <div className='w-[67%] flex flex-col gap-2'>
    <div className='h-64 mt-3 w-full bg-white'></div>
    <div className='h-64 mt-3 w-full bg-white p-3 px-10'>
        <p className='text-xl font-bold mb-2'>Live Feeds</p>
        <div className='flex flex-col mb-2 w-full py-1 px-10 bg-blue-50'>
            <p className='font-bold'>Activity Detected - Camera 1</p>
            <p>2 minutes ago</p>
        </div>
        <div className='flex flex-col mb-2 w-full py-1 px-10 bg-blue-50'>
            <p className='font-bold'>Activity Detected - Camera 2</p>
            <p>2 minutes ago</p>
        </div>
        <div className='flex flex-col mb-2 w-full py-1 px-10 bg-blue-50'>
            <p className='font-bold'>Activity Detected - Camera 3</p>
            <p>2 minutes ago</p>
        </div>


    </div>
    </div>

<div className='w-[31%] h-full flex flex-col'>

        <div className='w-full h-52 shadow-md flex flex-col gap-2 p-2 px-5 py-3 mt-3 bg-white'>
        <p className='text-xl font-bold'>System Status</p>
        <div className='flex justify-between items-center'>
            <p>Server Status</p>
            <button className='bg-green-500 text-white px-2 py-1 rounded-md'>Operational</button>
        </div>
        <div className='flex justify-between items-center'>
            <p>Database</p>
            <button className='bg-green-500 text-white px-2 py-1 rounded-md'>Operational</button>
        </div>
        <div className='flex justify-between items-center'>
            <p>API</p>
            <button className='bg-yellow-500 text-white px-2 py-1 rounded-md'>Degraded</button>
        </div>

    </div>

    

    

    
</div>
   

    



</div>

    
    </div>
   
  )
}

export default Dashboard
