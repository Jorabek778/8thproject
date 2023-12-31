import React from 'react'
import {FaLayerGroup} from 'react-icons/fa'
import './Testimonial.css'

const Testimonial = () => {
  return (
    <div className='testimonial'>
        <div className='container'>
        <div className='outline'>
            <div className='content'>
                <i><FaLayerGroup/> Staxx</i>
                <p className='body'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minus totam optio maiores, delectus deserunt rerum quae officiis inventore magni.
                </p>
                <div className='name'>
                    <p>Marie Chilvers</p>
                    <p>CEO, Staxx</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Testimonial