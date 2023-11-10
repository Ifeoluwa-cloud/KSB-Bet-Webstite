import React from 'react'
import logo from '../assets/logo.svg';
import Facebook from '../assets/Facebook.svg';
import Twitter from '../assets/Twitter.svg';
import Instagram from '../assets/Instagram.svg';

const Footer = () => {
  return (
    <div className='w-full h-[140px] bg-[#080231] flex items-center justify-center text-white text-12'>
        <div className='pt-10'>
            <div className='flex items-center justify-center  gap-40'>
                <div>
                    <img src={logo} className='h-12 w-12'/>
                </div>
                <div className='flex items-center justify-center  gap-4'>
                    <div><a href='#'>Contact us</a></div>
                    <div><a href='#'>Blog</a></div>
                    <div><a href='#'>Terms and Condition</a></div>
                    <div><a href='#'>Privacy Policy</a></div>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <img src={Facebook}/>
                    <img src={Twitter}/>
                    <img src={Instagram}/>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <p className=''>King Solomon Bet &copy; 2023</p>
            </div>
        </div>    
    </div>
  )
}

export default Footer
