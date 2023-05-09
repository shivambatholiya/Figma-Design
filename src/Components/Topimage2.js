import React from 'react'
import './CSS/Topimage2.css'

function Topimage2(props) {
  return (
    <>
      <div className="container2">
        <img src={props.image} style={{width: props.width,}} alt="" />
        <div className="image-content">
            <h3>Good4Me</h3>
            <h1>{props.title} <br /> (3 MONTH SUPPLY)</h1> <br />
            <span>Good4Me Apple Cider Vinegar gummies are the newest addition to <br /> your morning health and and well being regime.</span>
            <br /> <br />
            <button>Shop Now</button>
        </div>
      </div>
    </>
  )
}

export default Topimage2

