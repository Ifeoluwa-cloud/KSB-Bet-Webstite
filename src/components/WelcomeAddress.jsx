import React from 'react'
import logo from '../assets/logo.svg'

const WelcomeAddress = () => {
  return (
    <div>
      <div className='py-4'>
      <img src={logo} className='h-12 w-12'/>
      </div>
      <div className='text-sm sm:text-base md:text-lg text-justify pb-4'>
            <p className='mb-4'>
                Welcome to KSB - a membership-based sports prediction website 
                where you can access accurate and detailed predictions for your 
                favorite sports events. We focus on Football, Basketball, and Tennis, 
                providing registered users with in-depth predictions and analysis to 
                help them make informed betting decisions.
            </p>
            <p className='mb-4'>
                Our website is designed to be user-friendly and easy to navigate, with 
                a landing page that allows both registered and unregistered users to 
                access a limited number of predictions. However, to access more detailed 
                predictions, you'll need to register as a member.
            </p>
            <p className='mb-4'>
                At KSB, we believe in providing our users with the most up-to-date and 
                accurate predictions, which is why we have a dedicated team of experts 
                who continuously analyze and research different sports events to bring 
                you the most reliable predictions.
            </p>
            <p className='mb-4'>
                In addition to predictions, our website also features banner placements 
                and ads from leading sport betting brands, making it easy for you to 
                place bets on your preferred sports events. Additionally, we have a 
                Telegram channel where you can stay updated on the latest predictions 
                and tips.
            </p>
            <p>
                If you're looking for a reliable and user-friendly website to help you 
                make informed betting decisions, look no further than KSB. Join today 
                and start reaping the benefits of our expert predictions!
                </p>
      </div>
    </div>
  )
}

export default WelcomeAddress


