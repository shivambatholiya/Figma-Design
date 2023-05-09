import React from 'react'
import './CSS/SpecialCard.css'


function SpecialCard(props) {
  return (
    <>
      <div className="card-container-sp1">
        <div className="image-container-sp1">
            <img src={props.image} alt="" />
        </div> <br />
        <span>{props.title}</span> <br />
        <p><span >{props.price}</span> 
        <span> <del>{props.cutPrice}</del> </span></p>
      </div>

    </>
  )
}

export default SpecialCard
