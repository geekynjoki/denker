import React, {useEffect} from 'react'
import './home.scss'
import video from '../../Denkerreact/video1.mp4'
import {GoLocation} from 'react-icons/go'
import {FiFacebook} from 'react-icons/fi'
import{AiOutlineInstagram} from 'react-icons/ai'
import {SiTripadvisor} from 'react-icons/si'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
//add scroll animation with react hook
useEffect(()=>{
   Aos.init({duration: 2000})
}, [])

  return (
   <section className='home'>
    <div className="overlay"></div>
     <video src={video} muted autoPlay loop type="video1/mp4"></video>

<div className="homeContent container">
  <div className="textDiv">
    <span data-aos="fade-up"
    className="smallText">
      Popular Destinations
    </span>
    <h1 data-aos="fade-up"
    className="homeTitle">
      Go On Exciting Adventures with Us!
    </h1>
  </div>

  <div data-aos="fade-up" className="cardDiv grid">

  <div className="destinationInput">
      <label htmlFor="city">Search for Destination:</label>
      <div className="input flex">
        <input type="text" placeholder='Enter Destination...' />
        <GoLocation className="icon"/>
      </div>
     </div>

     <div className="dateInput">
      <label htmlFor="date">Select Date:</label>
      <div className="input flex">
        <input type="date" placeholder='Enter Date...' />
      </div>
     </div>

     <div className="daysInput">
     <div className="label_total flex">
      <label htmlFor="days">Maximum Number of Days:</label>
     <h3 className="total">20days</h3>
     </div>

     <div className="input flex">
       <input type="range" max="20" min="1"/>
     </div>

     </div>
 

  </div>


</div>

   </section>
  )
}

export default Home