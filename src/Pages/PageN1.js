import React from 'react'
import Navbar from '../Components/Navbar'
import Topimage from '../Components/Topimage'
import '../Components/CSS/Page1.css'
import Orangeline from '../Components/Orangeline'
import SpecialCard from '../Components/SpecialCard'
import image1 from './Images/simage1.png'
import image2 from './Images/simage2.png'
import image3 from './Images/simage3.png'
import image4 from './Images/simage4.png'
import topimage from './Images/topimage.png'



function PageN1() {
  return (
    <>
      <Navbar/>
      <Topimage image={topimage} title={"Apple Cider Vinegar"}/>
      <div className="text">
        <h2>CERTIFIED TO GOOD4ME</h2>
        <Orangeline/>
        <span> Pick your beauty products today. 50% OFF on the most popular GOOD4ME. </span>
        <span> Order all classy products today!</span>
      </div>

      <div className='special-collections'>
        <div className="text">
          <h2>SPECIAL COLLECTIONS</h2>
          <Orangeline/>
        </div>
        
        <div className="cards-container">
            <SpecialCard image={image1} title={"MULTI-VITAMIN: EVERYDAY WELLNESS"} price={"$39.96 NZD"} cutPrice={"$139.96 NZD"} />
            <SpecialCard image={image2} title={"FULL RANGE VALUE PACK (SAVE 33%)"} price={"$139.96 NZD"} cutPrice={"$339.96 NZD"}/>
            <SpecialCard image={image3} title={"VITAMIN C: IMMUNITY SUPPORT (3 MONTH SUPPLY)"} price={"$49.96 NZD"} cutPrice={"$149.66 NZD"}/>
            <SpecialCard image={image4} title={"IRON: ENERGY SUPPORT (3 MONTH SUPPLY)"} price={"$339.36 NZD"} cutPrice={"$689.94 NZD"}/>
        </div>
      </div>
    </>
  )
}

export default PageN1
