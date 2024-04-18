'use client'

import React from 'react'
import style from './page.module.css'
import AllandStateButton from '../utils/components/filters/AllandStateButton/AllandStateButton'
import Image from 'next/image'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const settings = {
    draggable:true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    centerPadding:'150px',
    className:'testing'
  };


const EBook = () =>{
    const handleclick = () =>{
        alert('hello world')
    }

    return (
        <>
        <section className={style.mainContainer}>
         <div className={style.container}>
            <div className={style.firstcontainer}>
                <div className={style.firstbox_}>
                    <div className={style.firstbox__}>
                    </div>
                    <div>
                        <p className={`title-sm-primary`}>E-books</p>
                        <p className={`body-md-tertiary`}>Streamlined NEET UG Application Links at Your Fingertips!</p>
                        </div>
                </div>
                <div>
                <AllandStateButton  children='All' onClick={handleclick}/>
                </div>
            </div>
            {/* This is the Second Container */}
  



      



          <div className={style.secondContainer}>
          <div className={style.testing}>
         <Slider {...settings}>
         <div className={style.cardcotnainer}>
                <div className={style.cardbox}>
                <Image className={style.cardimage} src={'/ebook.png'}  width={146} height={188} alt='karnatakImage'/>
                </div>
                <div>
                    <p className={style.cardfnt}>Karnataka Counselling</p>
                </div>
               </div>
               <div className={style.cardcotnainer}>
                <div className={style.cardbox}>
                <Image className={style.cardimage} src={'/ebook.png'}  width={146} height={188} alt='karnatakImage'/>
                </div>
                <div>
                    <p className={style.cardfnt}>Karnataka Counselling</p>
                </div>
               </div>      <div className={style.cardcotnainer}>
                <div className={style.cardbox}>
                <Image className={style.cardimage} src={'/ebook.png'}  width={146} height={188} alt='karnatakImage'/>
                </div>
                <div>
                    <p className={style.cardfnt}>Karnataka Counselling</p>
                </div>
               </div>      <div className={style.cardcotnainer}>
                <div className={style.cardbox}>
                <Image className={style.cardimage} src={'/ebook.png'}  width={146} height={188} alt='karnatakImage'/>
                </div>
                <div>
                    <p className={style.cardfnt}>Karnataka Counselling</p>
                </div>
               </div>      <div className={style.cardcotnainer}>
                <div className={style.cardbox}>
                <Image className={style.cardimage} src={'/ebook.png'}  width={146} height={188} alt='karnatakImage'/>
                </div>
                <div>
                    <p className={style.cardfnt}>Karnataka Counselling</p>
                </div>
               </div>      <div className={style.cardcotnainer}>
                <div className={style.cardbox}>
                <Image className={style.cardimage} src={'/ebook.png'}  width={146} height={188} alt='karnatakImage'/>
                </div>
                <div>
                    <p className={style.cardfnt}>Karnataka Counselling</p>
                </div>
               </div>      <div className={style.cardcotnainer}>
                <div className={style.cardbox}>
                <Image className={style.cardimage} src={'/ebook.png'}  width={146} height={188} alt='karnatakImage'/>
                </div>
                <div>
                    <p className={style.cardfnt}>Karnataka Counselling</p>
                </div>
               </div>      <div className={style.cardcotnainer}>
                <div className={style.cardbox}>
                <Image className={style.cardimage} src={'/ebook.png'}  width={146} height={188} alt='karnatakImage'/>
                </div>
                <div>
                    <p className={style.cardfnt}>Karnataka Counselling</p>
                </div>
               </div>
               <div className={style.cardcotnainer}>
                <div className={style.cardbox}>
                <Image className={style.cardimage} src={'/ebook.png'}  width={146} height={188} alt='karnatakImage'/>
                </div>
                <div>
                    <p className={style.cardfnt}>Karnataka Counselling</p>
                </div>
               </div>
               <div className={style.cardcotnainer}>
                <div className={style.cardbox}>
                <Image className={style.cardimage} src={'/ebook.png'}  width={146} height={188} alt='karnatakImage'/>
                </div>
                <div>
                    <p className={style.cardfnt}>Karnataka Counselling</p>
                </div>
               </div>
               <div className={style.cardcotnainer}>
                <div className={style.cardbox}>
                <Image className={style.cardimage} src={'/ebook.png'}  width={146} height={188} alt='karnatakImage'/>
                </div>
                <div>
                    <p className={style.cardfnt}>Karnataka Counselling</p>
                </div>
               </div>
               <div className={style.cardcotnainer}>
                <div className={style.cardbox}>
                <Image className={style.cardimage} src={'/ebook.png'}  width={146} height={188} alt='karnatakImage'/>
                </div>
                <div>
                    <p className={style.cardfnt}>Karnataka Counselling</p>
                </div>
               </div>
               <div className={style.cardcotnainer}>
                <div className={style.cardbox}>
                <Image className={style.cardimage} src={'/ebook.png'}  width={146} height={188} alt='karnatakImage'/>
                </div>
                <div>
                    <p className={style.cardfnt}>Karnataka Counselling</p>
                </div>
               </div>
               <div className={style.cardcotnainer}>
                <div className={style.cardbox}>
                <Image className={style.cardimage} src={'/ebook.png'}  width={146} height={188} alt='karnatakImage'/>
                </div>
                <div>
                    <p className={style.cardfnt}>Karnataka Counselling</p>
                </div>
               </div>
               <div className={style.cardcotnainer}>
                <div className={style.cardbox}>
                <Image className={style.cardimage} src={'/ebook.png'}  width={146} height={188} alt='karnatakImage'/>
                </div>
                <div>
                    <p className={style.cardfnt}>Karnataka Counselling</p>
                </div>
               </div>
      </Slider>
      </div>
            </div> 
         </div>
         
  
        </section>
        </>
    )
}



export default EBook