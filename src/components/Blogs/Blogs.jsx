import React, { useEffect, useState } from 'react';

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
        </div>
    );
};

export default Blogs;