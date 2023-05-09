import React from 'react'
import BottumImage from '../Components/BottumImage'
import Navbar from '../Components/Navbar'
import Topimage2 from '../Components/Topimage2'
import fruits from './Images/fruits.png'
import '../Components/CSS/Page6.css'


function PageN6() {
  return (
    <>
      <Navbar/>
      <Topimage2 image={fruits} title={"STRONG IMMUNITY"} width={"40vw"} />
      <br />
      <div className="contact-p6">
        <h3>This is Contact Page</h3>
      </div>
      <div><BottumImage/></div>

    </>
  )
}

export default PageN6
