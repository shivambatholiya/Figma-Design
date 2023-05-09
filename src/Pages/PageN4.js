import React from 'react'
import Navbar from '../Components/Navbar'
import Topimage2 from '../Components/Topimage2'
import '../Components/CSS/Page4.css'
import SpecialCard from '../Components/SpecialCard'
import Vector from '../Components/Vector'
import LatestNews from '../Components/LatestNews'
import BottumImage from '../Components/BottumImage'
import image18 from './Images/image18.png'
import simage2 from './Images/simage2.png'
import image19 from './Images/image19.png'
import rectengle30 from './Images/Rectangle 30.png'
import news1 from './Images/image 47.png'
import news2 from './Images/image 48.png'
import news3 from './Images/image 49.png'
import what from './Images/what.png'
import vector from './Images/Vector.png'
import vector1 from './Images/Vector (1).png'
import vector2 from './Images/Vector (2).png'
import shopall1 from './Images/shopall2.png'
import shopall2 from './Images/shopall1.png'
import shopall3 from './Images/shopall3.png'
import shopall4 from './Images/shopall4.png'
import realreviews from './Images/REAL REVIEWS.png'
import image41 from './Images/image 41.png'
import image42 from './Images/image 42.png'
import image43 from './Images/image 43.png'
import image44 from './Images/image 44.png'
import image45 from './Images/image 45.png'
import image46 from './Images/image 46.png'


function PageN4() {
  return (
    <>
      <Navbar/>
      <Topimage2 image={shopall1} title={"STRONG IMMUNITY"}/>
      <div className='divs-container-p4'>
        <div className="div1-p4">
            <h3>New Collection For GOOD4ME <br /> Care Products</h3>
            <div className='img-wrap'><img src={simage2} alt="" /></div>
        </div>
        <div className="div2-p4">
            <img src={image19} alt="" />
            <img src={image18} alt="" />
        </div>
      </div>
      <div className="div3-p4">
          <div>
            <img src={rectengle30} alt="" />
          </div>
          <div className="rectangle-container-p4">
          <div className='para-p4'>
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
        </div>

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

      <img className='what-img' src={what} alt="" />

      <div className='vector-container'>
        <Vector image={vector} title={"WORLS WIDE SHIPPING"} para={"lorem hare tahh loyed humere "} para2={"hunhy saath shree "} />
        <Vector image={vector1} title={"30 DAYS GURANTEE"} para={"lorem hare tahh loyed humere "} para2={"hunhy saath shree "} />
        <Vector image={vector2} title={"SECURED PAYMENT"} para={"lorem hare tahh loyed humere "} para2={"hunhy saath shree "} />
      </div>

      <img className='real-reviews' src={realreviews} alt="" />

      <h3 className='lnh'>LATEST NEWS</h3>
      <div className='news-container-1'>
        <LatestNews image={news1} title={"We Donate One Week Supply"} para={"lorem hare tahh loyed humere "} para2={"hunhy saath shree "} />
        <LatestNews image={news2} title={"We Donate One Week Supply"} para={"lorem hare tahh loyed humere "} para2={"hunhy saath shree "} />
        <LatestNews image={news3} title={"We Donate One Week Supply"} para={"lorem hare tahh loyed humere "} para2={"hunhy saath shree "} />
      </div>

      <h3 className='lnh'>#GOOD4ME</h3> <br />
      <div className='good-img'>
        <img src={image41} alt="" />
        <img src={image42} alt="" />
        <img src={image43} alt="" />
        <img src={image44} alt="" />
        <img src={image45} alt="" />
        <img src={image46} alt="" />
      </div>

      <div><BottumImage/></div>


    </>
  )
}

export default PageN4
