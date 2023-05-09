import React from 'react'
import './CSS/Vector.css'


function Vector(props) {
    return (
        <>
            <div className="containers">
                <div className="image-vector">
                    <img src={props.image} alt="" />
                </div>
                <br />
                <h5>{props.title}</h5> <br />
                <p><small>{props.para}</small></p>
                <p><small>{props.para2}</small></p>
            </div>

        </>
    )
}

export default Vector
