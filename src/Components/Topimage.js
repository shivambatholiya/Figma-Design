import React from 'react'
import './CSS/Topimage.css'

function Topimage(props) {
  return (
    <>
      <div className="containert1">
        <img src={props.image} alt="" />
        <div className="image-content">
            <h3>Good4Me</h3>
            <h1>{props.title}</h1> <br />
            <span>Good4Me Apple Cider Vinegar gummies are the newest addition to your <br /> morning health and and well being regime.</span>
            <br /> <br />
            <button>Shop Now</button>
        </div>
      </div>
    </>
  )
}

export default Topimage

