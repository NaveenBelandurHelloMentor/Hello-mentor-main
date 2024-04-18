'use client'

import React from 'react'
import style from './page.module.css'
import AllandStateButton from '../utils/components/filters/AllandStateButton/AllandStateButton'
import Image from 'next/image'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react'
import Ebooksvg from './ebooksvg/ebook'
import {Ebookjson} from './ebooksvg/ebookfakejson'


const settings = {
    draggable: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    centerPadding: '150px',
    className: 'slidercontainer',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};


const EBook = () => {
    const [isHovered, setIsHovered] = useState(true);
    const [indexs,setIndexs] = useState()
    const handleclick = () => {
        alert('Hello world')
    }

    const handleMouseEnter = (index) => {
            setIndexs(index)
            setIsHovered(true);
    
      
    };

    const handleMouseLeave = () => {
       setIndexs(null)
    };
    return (
        <>
            <section className={style.mainContainer}>
                <div className={style.container}>
                    <div className={style.firstcontainer}>
                        <div className={style.firstbox_}>
                            <div className={style.firstbox__}>
                            </div>
                            <div className={style.firstboxcontainer__}>
                                <p className={`title-sm-primary`} >E-books</p>
                                <p className={`body-md-tertiary`}>Streamlined NEET UG Application Links at Your Fingertips!</p>
                            </div>
                        </div>
                        <div>
                            <AllandStateButton children='All' onClick={handleclick} />
                        </div>
                    </div>
                    {/* This is the Second Container */}
                    <div className={style.secondContainer}>
                        <div className={style.slidercontainer}>
                            <Slider {...settings}>
                                {Ebookjson.map((data,index)=>{
                                    return (
                                        <div className={style.cardcontainer} onMouseEnter={()=>handleMouseEnter(index)} onMouseLeave={handleMouseLeave} key={data.id} >
                                        <div className={style.cardbox}>
                                            {index == indexs  ? <>    <Image className={style.cardimage} src={data.imagesrc} width={146} height={188} alt='karnatakImage' />
                                                <div className={style.cardimagecover}>
                                                    <span className={style.cardsvg}><Ebooksvg /></span>
                                                </div>   </> : <>
                                                <Image className={style.cardimage} src={data.imagesrc} width={146} height={188} alt='karnatakImage' />
                                            </>
                                            }
                                        </div>
                                        <div>
                                            <p className={style.cardfnt}>{data.state}</p>
                                        </div>
                                    </div>  
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



export default EBook