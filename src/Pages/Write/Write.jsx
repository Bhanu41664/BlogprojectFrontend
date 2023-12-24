import React from 'react'
import "./Write.css"

function Write() {
  return (
    <div className='write'>
        <img className='writeImg' src="https://img.freepik.com/free-photo/worker-reading-news-with-tablet_1162-83.jpg?w=740&t=st=1701750444~exp=1701751044~hmac=9b3116220cbdded607b55cf3a200601b69154e00d534583e7c32c3a70e681f49" alt="" />
        <form className="WriteForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i class="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:'none'}} />
                <input type="text" placeholder='title' className='writeInput' autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea  id="" cols="30" rows="10" placeholder='Tell your story...' type="text" className='writeInput writeText'></textarea>

            </div>
            <button className='writeSubmit'>publish</button>

        </form>
    </div>
  )
}

export default Write