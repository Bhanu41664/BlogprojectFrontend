import React, { useEffect, useState } from 'react'
import './SinglePost.css'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';
function SinglePost() {
  const location=useLocation();
  const path = location.pathname.split('/')[2]
  const [post,setPost]=useState({})
  const time=new Date(post.createdAt)
  useEffect(()=>{
    const getpost=async ()=>{
      const res=await axios.get(`http://localhost:5000/api/posts/${path}`)
      setPost(res.data)
    }
    getpost();
  },[path])
  return (
    <div className='singlepost'>
        <div className="singlePostWrapper">
            {post.photo && (
          <img  className="singlePostImg" src={post.photo} alt="" />

            )}
            
          <h1 className="singlePostTitle">
            {post.title}
          <div className="singlePostEdit">
          <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
          <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
          </h1>
          <div className="singlePostInfo">
            <span className='singlePostAuthor'>Autor: 
            <Link to={`/?username=${post.username}`} style={{color:'orange', textDecoration:'none'}} >
            <b>{post.username}</b>
            </Link>
            </span>
            <span className='singlePostDate'>{time.toDateString()} </span>



          </div>
          <p className='singlePostDesc'>
              {post.desc}
          </p>
        </div>
        </div>
  )
}

export default SinglePost