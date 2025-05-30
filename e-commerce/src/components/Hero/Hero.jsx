import React from 'react'
import './Hero.css'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_image from '../../assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="hero-hand-icon">
              <p>New</p>
              <img src={hand_icon} alt="" />
            </div>
            <p>Collection</p>
            <p>For Everyone</p>
          </div>
          <button className="hero-latest-btn">
            <p>Latest Collection</p>
            <img src={arrow_icon} alt="" />
          </button>
        </div>
        <div className="hero-right">
          <img className='hero-image' src={hero_image} alt="" />
        </div>
    </div>
  )
}
export default Hero
