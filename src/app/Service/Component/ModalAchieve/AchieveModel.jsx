import React from 'react'
import AchieveSvg from '../../ServiceSvg/achieve'
import AchieveSvgmodal from '../ModelSvg/achievesvg'
import PostExamSvg from '../ModelSvg/postExamsvg'
import Style from './achieve.module.css'

import {useState} from 'react'

const AchiveModal = (props) =>{
    const handleClick = () =>{
        props.closeModal(false)
    }
    return (
        <> <>
            <dialog open className={Style.mainContianer}>
            <div className={Style.modelContainer}>
            <div className={Style.modelheading}>
               <div className={Style.closeicon} onClick={handleClick}>
               <span className={Style.modelfreetext} onClick={handleClick}>X</span>
               </div>
                <div className={Style.model__}>
                <div className={Style.modelheading_}>
                    <div className={Style.firstheading__}>
                       <AchieveSvg/>
                    <h2 className='title-sm-primary'>Achieve</h2>
                    </div>
                    <div className={Style.modelfreeplanachieve}>
                        <p className={Style.freeplanachieve}>PREMIUM</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className={Style.modelpricetagcontainer}>
                   <div>
                    <p className={Style.modelexplorefnt}>₹ 29,980/-+GST</p>
                   <p className='title-md-primary'>₹ 24,980/-+GST</p>
                   </div>
                   <div >
                     <button className={Style.btnfreeplanExplore}>Upgrade Now</button>
                    </div>
                </div>
                <div>
                    <p className={Style.basicftn}>Everything in FREE plus,</p>
                </div>
                <div className={Style.line}>

                </div>
            </div>

            <div className={Style.modelmain}>
                <div className={Style.modeltool}>
                   <div className={Style.modeltool_}>
                   <AchieveSvgmodal/>
                   <p className={Style.tooltext}>Pre-Exam Mentorship</p>
                   </div>
                   <div>
                    <h2 className={Style.tooltext_}>Academic Mentor</h2>
                    <p className={Style.tooltext__}>Personalized sessions with NEET Toppers, share key exam insights for quick subject mastery and success</p>
                   </div>
                   <div>
                    <h2 className={Style.tooltext_}>Success Coach</h2>
                    <p className={Style.tooltext__}>Expert ensures students stay focused & confident for exam while tracking academic progress to ease the burden of constant monitoring for parents</p>
                   </div>
                </div>
                <div className={Style.modeltool}>
                   <div className={Style.modeltool_}>
                   <PostExamSvg/>
                   <p className={Style.tooltext}>Post-Exam Mentorship</p>
                   </div>
                   <div>
                    <h2 className={Style.tooltext_}>Senior Mentor</h2>
                    <p className={Style.tooltext__}>Personalized sessions guiding you through every step of the NEET Counselling, Empowering you to make informed and strategic decisions</p>
                   </div>
                   <div>
                    <h2 className={Style.tooltext_}>Junior Mentor</h2>
                    <p className={Style.tooltext__}>One point of contact for students & parents, diligently overseeing Student Progress and ensuring seamless coordination throughout the process</p>
                   </div>
                   <div>
                    <h2 className={Style.tooltext_}>Junior Mentor</h2>
                    <p className={Style.tooltext__}>One point of contact for students & parents, diligently overseeing Student Progress and ensuring seamless coordination throughout the process</p>
                   </div>
                </div>
            </div>
            </div>
        </dialog>
        </>
        </>
    )
}





export default AchiveModal