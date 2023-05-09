/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './CSS/review.css'
import star from './Images/Vector.png'
import img00 from './Images/IMAGE00.png'

function Review1() {
    return (
        <>
            <div className='review-block'>
                <div className='review_box'>
                    <h6>REAL REVIEWS </h6>
                    <h3>REAL RESULTS</h3>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img><br></br>
                    <div>
                        <span>“We have perfected our formulas over time,<br></br> based on your feedback. Check out hundreds of <br></br> reviews on our website.We can't wait until you <br></br>are a part of our Good4Me Family.”</span>
                    </div><br></br>
                    <span id='check_it'><small>Check it</small></span><br></br><br></br>
                    <div><a href="/" class="previous round">&#8249;</a>
                        <a href="/" class="next round">&#8250;</a></div>

                </div>
                <div>
                    <img scr={img00}></img>
                </div>
            </div>
        </>
    )
}

export default Review1
