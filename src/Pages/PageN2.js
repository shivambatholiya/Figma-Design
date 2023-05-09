/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Navbar from '../Components/Navbar'
import Topimage from '../Components/Topimage'
import '../Components/CSS/Page2.css'
import Orangeline from '../Components/Orangeline'
import SpecialCard from '../Components/SpecialCard'
import Vector from '../Components/Vector'
import LatestNews from '../Components/LatestNews'
import BottumImage from '../Components/BottumImage'
import image1 from './Images/simage1.png'
import image17 from './Images/image 17.png'
import image2 from './Images/simage2.png'
import group36 from './Images/Group 36.png'
import image3 from './Images/simage3.png'
import image4 from './Images/simage4.png'
import vector from './Images/Vector.png'
import vector1 from './Images/Vector (1).png'
import vector2 from './Images/Vector (2).png'
import rectangle16 from './Images/Rectangle 16.png'
import rectangle17 from './Images/Rectangle 17.png'
import rectangle18 from './Images/Rectangle 18.png'
import image49 from './Images/image 49.png'
import image24 from './Images/image 24.png'
import image36 from './Images/image 36.png'
import image37 from './Images/image 37.png'
import image38 from './Images/image 38.png'
import image39 from './Images/image 39.png'
import shopall1 from './Images/shopall2.png'
import shopall2 from './Images/shopall1.png'
import shopall3 from './Images/shopall3.png'
import shopall4 from './Images/shopall4.png'
import news1 from './Images/news1.png'
import news2 from './Images/news2.png'
import news3 from './Images/news3.png'
import realreviews from './Images/REAL REVIEWS.png'
import topimage2 from './Images/simage1.png'
import topimage from './Images/topimage.png'






function Page2() {
  return (
    <>
      <Navbar />
      <Topimage image={topimage} title={"Shop Your Favourite Products"}/>
      <div className="text">
        <h2>GOOD4ME DEAL</h2>
        <Orangeline />
        <span> Pick your beauty products today. 50% OFF on the most popular GOOD4ME. </span>
        <span> Order all classy products today!</span>
      </div>
      <br />
      <div className='special-collections-2'>
        <div className="card-contain">
          <SpecialCard image={image1} title={"MULTI-VITAMIN: EVERYDAY WELLNESS"} />
          <SpecialCard image={image2} title={"FULL RANGE VALUE PACK (SAVE 33%)"} />
          <SpecialCard image={image3} title={"VITAMIN C: IMMUNITY SUPPORT "} />
          <SpecialCard image={image4} title={"IRON: ENERGY SUPPORT "} />
        </div>
      </div>

      <div className='vector-container'>
        <Vector image={vector} title={"WORLS WIDE SHIPPING"} para={"lorem hare tahh loyed humere "} para2={"hunhy saath shree "} />
        <Vector image={vector1} title={"30 DAYS GURANTEE"} para={"lorem hare tahh loyed humere "} para2={"hunhy saath shree "} />
        <Vector image={vector2} title={"SECURED PAYMENT"} para={"lorem hare tahh loyed humere "} para2={"hunhy saath shree "} />
      </div>

      {/* rectangle component */}

      <div className='rectangle-container'>

        <div className="para-container">
          <div className='para'>
            <h1>TAKE CONTROLL OF <br></br>
              YOUR HEALTH
            </h1>
            <span>
              The Good4Me range has been formulated based on scientific & <br></br>

              traditional evidence.<br></br><br></br>

              Our vitamins are here and ready to boost your mood, immunity and<br></br>

              overall well-being!<br></br><br></br>
              Made in New Zealand from local and imported ingredients.<br></br><br></br>
            </span>
            <button className='para-btn'>BROWSE OUR RANGE</button>
          </div>
        </div>

        <div className='rectangle-17_18'>
          <img src={rectangle17}></img>
          <img src={rectangle18}></img>
        </div>

        <div className='rectangle16'><img src={rectangle16}></img></div>

      </div>

      {/* our products */}



      <div className='special-collections-2'>
        <h3>OUR PRODUCTS ARE</h3> <br />
        <div className="card-contain  ">
          <SpecialCard image={image17} title={"MULTI-VITAMIN: (3 MONTH SUPPLY)"} price={"$39.95 NZD"} />
          <SpecialCard image={group36} title={"VITAMIN C: IMMUNITY SUPPORT"} price={"$39.95 NZD"} />
          <SpecialCard image={image3} title={"MULTI-VITAMIN: (3 MONTH SUPPLY)"} price={"$39.95 NZD"} />
          <SpecialCard image={image4} title={"APPLE CIDER VINEGER(3 MONTH SUPPLY)"} price={"$39.95 NZD"} />
        </div> 
        <button className='product-btn'>VIEW ALL THE PRODUCTS</button>
      </div>

      {/* <Review image={reviewimg}></Review> */}

      <img className='real-reviews' src={realreviews} alt="" />

      <div className='special-collections-2'>
        <h3>SHOP ALL</h3> <br />
        <div className="card-contain  ">
          <SpecialCard image={shopall1} title={"MULTI-VITAMIN: (3 MONTH SUPPLY)"} price={"$39.95 NZD"} cutPrice={"$139.96 NZD"}/>
          <SpecialCard image={shopall2} title={"VITAMIN C: IMMUNITY SUPPORT"} price={"$39.95 NZD"} cutPrice={"$139.96 NZD"}/>
          <SpecialCard image={shopall3} title={"MULTI-VITAMIN: (3 MONTH SUPPLY)"} price={"$39.95 NZD"} cutPrice={"$139.96 NZD"}/>
          <SpecialCard image={shopall4} title={"APPLE CIDER VINEGER(3 MONTH SUPPLY)"} price={"$39.95 NZD"} cutPrice={"$139.96 NZD"}/>
        </div>
        <button className='product-btn'>VIEW ALL PRODUCTS</button> <br /> <br />
      </div>

      <h3 className='lnh'>LATEST NEWS</h3>
      <div className='news-container-1'>
        <LatestNews image={news1} title={"We Donate One Week Supply"} para={"lorem hare tahh loyed humere "} para2={"hunhy saath shree "} />
        <LatestNews image={news2} title={"We Donate One Week Supply"} para={"lorem hare tahh loyed humere "} para2={"hunhy saath shree "} />
        <LatestNews image={news3} title={"We Donate One Week Supply"} para={"lorem hare tahh loyed humere "} para2={"hunhy saath shree "} />
      </div>

      <h3 className='lnh'>#GOOD4ME</h3> <br />
      <div className='good-img'>
        <img src={image49} alt="" />
        <img src={image36} alt="" />
        <img src={image24} alt="" />
        <img src={image37} alt="" />
        <img src={image38} alt="" />
        <img src={image39} alt="" />
      </div>
      <BottumImage/>
    </>

  )
}

export default Page2
