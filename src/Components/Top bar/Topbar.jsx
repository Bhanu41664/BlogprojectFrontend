import React from 'react'
import './Topbar.css'
import { Link } from 'react-router-dom'

function Topbar() {
  const user=false;
  return (
    <div className='top'>
       <div className='topleft'>
       <i class=" topIcons fa-brands fa-square-facebook"></i>
       <i class=" topIcons fa-brands fa-square-youtube"></i>
       <i class= "topIcons fa-brands fa-square-instagram"></i>
       </div>
       <div className='topcenter'>
        <ul className='topList'>
            <li className=' topListItem'>
              <Link to={'/'} style={{textDecoration:'none',color:'inherit'}}>Home</Link>
              </li>
           
            <li className=' topListItem'>
              <Link to={'/'} style={{textDecoration:'none',color:'inherit'}}>ABOUT</Link>
              </li>
              <li className=' topListItem'>
              <Link to={'/'} style={{textDecoration:'none',color:'inherit'}}>CONTACT</Link>
              </li>
              <li className=' topListItem'>
              <Link to={'/write'} style={{textDecoration:'none',color:'inherit'}}>WRITE</Link>
              </li>
              
           
           
            <li className=' topListItem'>{user && 'LOGOUT'}</li>


        </ul>
        </div>
       <div className='topright'>
        {
          user ? (
            <img 
            className='topImage'
            src="data:image/jpeg;base64,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" alt="" />
          ) :
        
        (
          <>
           <ul className='topList'>

       
           <li className=' topListItem'>
              <Link to={'/login'} style={{textDecoration:'none',color:'inherit'}}>LOGIN</Link>

              </li>
              <li className=' topListItem'>
              <Link to={'/register'} style={{textDecoration:'none',color:'inherit'}}>REGISTER</Link>
              
              </li>
              </ul>
          </>
        )
  }
       
       <i class="TopSearch fa-solid fa-magnifying-glass"></i>
       </div>

        </div>
  )
}

export default Topbar