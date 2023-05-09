import React from 'react'
import './CSS/LatestNews.css'

function LatestNews(props) {
  return (
    <div>
      <div className='latest-news-container'>
        <div className="latest-card-1">
            <div className="latest-image-container">
                <img src={props.image} alt="" />
            </div>
            <span className='date1'>August 26, 2020</span>
            <h4>{props.title}</h4>
            <span >{props.para}</span> <br />
            <button>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default LatestNews
