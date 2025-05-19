import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Blogs/Blogs'

function App() {
          
  const [bookmarked , setBookMarked] = useState([])
   
  const handleBookMark =(blog) => {
    setBookMarked([...bookmarked,  blog])
  }
   console.log(bookmarked)

  return (
    <>
    <Navbar></Navbar>
      
      <div className='main-container flex text-center'>
         <div className='left-container w-[70%]'>
       
           <Blogs handleBookMark={handleBookMark}></Blogs>
         </div>
         <div className='right-container w-[30%]'>
          <h1>reading time : 0</h1>
          <h1>bookmark count: 0</h1>
         </div>

      </div>

    </>
  )
}

export default App
