import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 
import logo from '../assets/logo.svg';
import Basketball from '../assets/Basketball.svg';
import SoccerBall from '../assets/SoccerBall.svg';
import TennisBall from '../assets/TennisBall.svg';
import CaretDown from '../assets/CaretDown.svg';
import TelegramLogo from '../assets/TelegramLogo.svg';
import US from '../assets/US.svg';

const classNameFunc = ({ isActive }) => (isActive ? "active_link" : "" );

const Navbar = () => {
  return (
    <div className='w-full h-[140px] bg-[#1A1A1A] border-b '>
      <div className='max-w-[950px] m-auto w-full h-[76px] py-2 flex justify-between items-center'>
        <img src={logo} className='h-[48px] w-[48px]' />
        <div className='flex gap-20'>
        <div className='flex items-center gap-6'>
          <ul className='flex gap-8 text-white'>
            <li className='text-[14px] flex items-center hover:text-yellow-500'>Join us telegram<img src={TelegramLogo} className='mx-2 h-[16px] w-[16px]'/></li>
            <li className='text-[12px] flex items-center hover:text-yellow-500'><img src={US} className='mx-4 h-[16px] w-[16px]'/>English (US)<img src={CaretDown} className='mx-2 h-[16px] w-[16px]'/></li>
          </ul>
        </div>
        <div className='flex gap-7 items-center text-white'>
          <div className='text-[14px] font-semibold hover:text-yellow-500'>Login</div> 
          <button className='bg-yellow-500 rounded-[20px] px-5 py-2 text-[14px] font-semibold text-black hover:text-white'>Register</button>
        </div>
      </div>
      </div>
        
      <div className='max-w-[900px] m-auto w-full h-[64px] pt-[14px] pb-[10px] flex justify-between items-center'>
        <div className='flex items-center'>
          <ul className='flex gap-12 text-[16px] text-white items-center'>
              <li className='flex items-center'>
                <NavLink className={classNameFunc} to="/" >Home</NavLink>
              </li>
              <li className='flex items-center'>
                <img src={SoccerBall} className='mx-2 h-[16px] w-[16px]' alt="Soccer Ball" />
                <NavLink className={classNameFunc} to="/Football">Football</NavLink>
              </li>

              <li className='flex items-center'>
                <img src={Basketball} className='mx-2 h-[16px] w-[16px]' alt="Soccer Ball" />
                <NavLink className={classNameFunc} NavLink to="/Basketball">Basketball</NavLink>
              </li>
              <li className='flex items-center'>
                <img src={TennisBall} className='mx-2 h-[16px] w-[16px]' alt="Tennis" />
                <NavLink className={classNameFunc} to="/Tennis" ClassName={classNameFunc}>Tennis</NavLink>
              </li>
          </ul>
        </div>  
      </div>  
    </div>
  )
}

export default Navbar
