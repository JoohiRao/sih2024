import React from 'react'
import Sidebar from './Components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Surveillance from './Components/Surveillance'
import Database from './Components/Database'
import Suspects from './Components/Suspects'
import Map from './Components/Map'
import Control from './Components/Control'
import Settings from './Components/Settings'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 p-4'>
        <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/surveillance" element={<Surveillance />} />
        <Route path="/database" element={<Database />} />
        <Route path="/suspects" element={<Suspects />} />
        <Route path="/map" element={<Map />} />
        <Route path="/control" element={<Control />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>

        </div>
   
    </div>
  )
}

export default App
