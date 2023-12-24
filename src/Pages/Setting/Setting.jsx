import React from 'react'
import './Setting.css'
import Sidebar from '../../Components/Sidebar/Sidebar'

function Setting() {
  return (
    <div className='settings'>
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingsupdateTitle">
                    Update your account
                </span>
                <span className="settingDeleteTitle">
                    Delete Account
                </span>
                
            </div>
            <form  className="settingForm">
                <label >
                    Profile picture
                </label>
                <div className="settingsPP" style={{display:'flex'}}>
                    <img src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <label htmlFor="fileInput">
                    <i class="settingPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput"  style={{display:'none'}}/>
                </div>
                
                <label>Username</label>
                <input type="text" placeholder='safk'/>
                <label>email</label>
                <input type="email" placeholder='safk@gmail.com'/>
                <label>password</label>
                <input type="password" />
                <button className="settingSubmit">update</button>
                 
            </form>
        </div>
           <Sidebar></Sidebar>
    </div>
  )
}

export default Setting