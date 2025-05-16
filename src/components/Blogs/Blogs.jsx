import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {

    const [blogs, setBlogs] =useState([])

    useEffect(()=>{
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    } ,[])
    console.log(blogs)

    return (
        <div className='text-3xl'> 
             <h1>total: {blogs.length}</h1>

             <div className="all-blogs">
        {
            blogs.map((blog) => <Blog blog={blog} key={blog.id}></Blog>)
        }
             </div>
        </div>
      
    );
};

export default Blogs;