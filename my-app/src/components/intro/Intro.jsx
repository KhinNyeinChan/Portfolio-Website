import React from 'react'
import './intro.css'
import Me from '../../img/minion.png'

const Intro = () => {
  return (
    <div className='i'>
      <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className='i-intro'>Hello, I'm</h2>
            <h1 className="i-name">Khin Nyein Chan</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">UI/UX Designer</div>
                <div className="i-title-item">Content Creator</div>
              </div>  
            </div>
            <p className="i-desc">
              I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.  
            </p>
          </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="my-pic" className="i-img" />
      </div>
    </div>
  )
}

export default Intro