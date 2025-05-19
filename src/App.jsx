import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Blogs/Blogs'

function App() {
          
  const [bookmarked , setBookMarked] = useState([])
  const [readingCount,setReadingCount]=useState(0)
   
  const handleBookMark =(blog) => {
    setBookMarked([...bookmarked,  blog])
  }
  //  console.log(bookmarked)

  const handleMarkAsRead= (time,id)=>{
    const newTime = readingCount + time ;
    setReadingCount(newTime)

    handleRemoveFromBookMark(id)
    // console.log(time)
    // console.log(id);
  }
  // console.log(readingCount)

  const handleRemoveFromBookMark=(id)=>{
   const remaningBookMark= bookmarked.filter((mark)=> mark.id !== id);
  //  console.log(remaningBookMark)
  setBookMarked(remaningBookMark)
  }

  return (
    <>
    <Navbar></Navbar>
      
      <div className='main-container flex text-center'>
         <div className='left-container w-[70%]'>
       
           <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
         </div>
         <div className='right-container w-[30%]'>
          <h1>reading time : {readingCount}</h1>
          <h1>bookmark count: {bookmarked.length}</h1>
          {
            bookmarked.map((marked)=> <p className='bg-red-400 m-2 p-2 shadow-accent text-white'> {marked.title}</p>)
          }
         </div>

      </div>

    </>
  )
}

export default App
