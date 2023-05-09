import React from 'react'
import './CSS/TopImage3.css'

function Topimage3(props) {
  return (
    <>
      <div className="container2-ti3">
        <div className="image-content-ti3">
            {/* <h3>Good4Me</h3> */}
            <h1>{props.title} (3 MONTH SUPPLY)</h1> <br />
            <span>Good4Me Apple Cider Vinegar gummies are the newest addition to your </span><span> morning health and and well being regime.</span>
            <br />
            <button>Shop Now</button>
        </div>
        <img src={props.image} alt="" />
      </div>
    </>
  )
}

export default Topimage3

