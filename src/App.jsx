import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Card from './Card'
import Footer from './Footer'
import Json from './Json'
import tickets from '../tickets.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <Navbar></Navbar>
   
      <Json></Json>
      <Footer></Footer>
     

    </>
  )
}

export default App
