'use client'

import React from 'react'
import { useState } from 'react'
import style from './page.module.css'
import CloseSvg from '../popupsvg/CloseBtnsvg'
import ExploreSvg from '@/app/PopupDesign/Componentsvg/exploresvg'
import ToolSvg from '../popupsvg/ToolsSvg'
import RightSvg from '../popupsvg/Rightsvg'
import AnalaysisSvg from '../popupsvg/Analayasis'
import ResourceSvg from '../popupsvg/Resourcesvg'
import Compareplansvg from '../popupsvg/Compareplansvg'
import AchieveSvg from '@/app/PopupDesign/Componentsvg/achievesvg'
import PreExamSvg from '../popupsvg/PreExampSvg'
import PostExamSvg from '../popupsvg/PostExampSvg'



const Popup = () => {
    const [Toogle, setToogle] = useState(false)
    const [Plan, setPlan] = useState(false)

    const handleexplore = () => {
        setToogle(!Toogle)
    }


    return (
        <>
            <section className={style.mainContainer}>
                <span className={style.closebtn}><CloseSvg/></span>
                <div className={style.maincardcontainer}>
                    <div className={style.cardcontainer}>
                        <div className={style.firstcardcontainer}>
                            {Toogle ? <>
                                <div className={style.headingcontianer}>
                                    <div className={style.headinicons}>
                                        <ExploreSvg />
                                        <div>
                                            <p className={style.explorefnt}>Explore Plan</p>
                                            <p className={style.explorefbtpar}>Recommended for UG students</p>
                                        </div>
                                    </div>
                                    <div className={style.btncontianerexplore}>
                                        <p>MOST POPULAR</p>
                                    </div>
                                </div>
                                <p className={style.firstfnt}>Everything in FREE plus,</p>
                                <div className={style.lastcontianer}>
                                    <div className={style.last_}>
                                        <div className={style.lastheading_}>
                                            <ToolSvg />
                                            <p className={style.lastheadingfnt}>Tool</p>
                                        </div>
                                        <div className={style.lastheading_}>
                                            <RightSvg />
                                            <p className={style.lastheadingfnt_}>NEET Score Booster</p>
                                        </div>
                                        <div className={style.lastheading_}>
                                            <RightSvg />
                                            <p className={style.lastheadingfnt_}>Cut-off & allotment</p>
                                        </div>
                                        <div className={style.lastheading_}>
                                            <RightSvg />
                                            <p className={style.lastheadingfnt_}>Fees & Seat Matrix</p>
                                        </div>
                                        <div className={style.lastheading_}>
                                            <RightSvg />
                                            <p className={style.lastheadingfnt_}>College Predictor & Compare</p>
                                        </div>
                                    </div>
                                    <div className={style.last_}>
                                        <div className={style.lastheading_}>
                                            <AnalaysisSvg />
                                            <p className={style.lastheadingfnt}>Analysis</p>
                                        </div>
                                        <div className={style.lastheading_}>
                                            <RightSvg />
                                            <p className={style.lastheadingfnt_}>Merit List </p>
                                        </div>
                                        <div className={style.lastheading_}>
                                            <RightSvg />
                                            <p className={style.lastheadingfnt_}>Seat Matrix</p>
                                        </div>
                                        <div className={style.lastheading_}>
                                            <RightSvg />
                                            <p className={style.lastheadingfnt_}>Cut-off</p>
                                        </div>
                                    </div>
                                    <div className={style.last_}>
                                        <div className={style.lastheading_}>
                                            <ResourceSvg />
                                            <p className={style.lastheadingfnt}>Resources</p>
                                        </div>
                                        <div className={style.lastheading_}>
                                            <RightSvg />
                                            <p className={style.lastheadingfnt_}>Document Checklist</p>
                                        </div>
                                        <div className={style.lastheading_}>
                                            <RightSvg />
                                            <p className={style.lastheadingfnt_}>Medical Guide Handbook</p>
                                        </div>
                                        <div className={style.lastheading_}>
                                            <RightSvg />
                                            <p className={style.lastheadingfnt_}>Webinars & Workshops</p>
                                        </div>
                                        <div className={style.lastheading_}>
                                            <RightSvg />
                                            <p className={style.lastheadingfnt_}>Counselling Videos</p>
                                        </div>
                                        <div className={style.lastheading_}>
                                            <RightSvg />
                                            <p className={style.lastheadingfnt_}>News & Alerts</p>
                                        </div>
                                    </div>
                                </div>
                            </> : <>
                                <div className={style.headingcontianer}>
                                    <div className={style.headinicons}>
                                        <AchieveSvg />
                                        <div>
                                            <p className={style.explorefnt}>Achieve Plan</p>
                                            <p className={style.explorefbtpar}>Recommended for UG students</p>
                                        </div>
                                    </div>
                                    <div className={style.btncontianerachieve}>
                                        <p>PREMIUM</p>
                                    </div>
                                </div>
                                <p className={style.firstfnt}>Everything in EXPLORE plus,</p>
                                <div className={style.lastcontianer}>
                                    <div className={style.last_}>
                                        <div className={style.lastheading_}>
                                            <PreExamSvg />
                                            <p className={style.lastheadingfnt}>Pre-Exam Mentorship</p>
                                        </div>
                                        <div className={style.lastheading_}>
                                            <RightSvg />
                                            <p className={style.lastheadingfnt_}>Academic Mentor</p>
                                        </div>
                                        <div className={style.lastheading_}>
                                            <RightSvg />
                                            <p className={style.lastheadingfnt_}>Success Coach </p>
                                        </div>
                                    </div>
                                    <div className={style.last_}>
                                        <div className={style.lastheading_}>
                                            <PostExamSvg />
                                            <p className={style.lastheadingfnt}>Post-Exam Mentorship</p>
                                        </div>
                                        <div className={style.lastheading_}>
                                            <RightSvg />
                                            <p className={style.lastheadingfnt_}>Junior Mentor</p>
                                        </div>
                                        <div className={style.lastheading_}>
                                            <RightSvg />
                                            <p className={style.lastheadingfnt_}>Senior Mentor</p>
                                        </div>
                                        <div className={style.lastheading_}>
                                            <RightSvg />
                                            <p className={style.lastheadingfnt_}>Shortlist Your Counselling & Colleges</p>
                                        </div>
                                        <div className={style.lastheading_}>
                                            <RightSvg />
                                            <p className={style.lastheadingfnt_}>College Ranking</p>
                                        </div>
                                        <div className={style.lastheading_}>
                                            <RightSvg />
                                            <p className={style.lastheadingfnt_}>Documentation & Verification</p>
                                        </div>
                                        <div className={style.lastheading_}>
                                            <RightSvg />
                                            <p className={style.lastheadingfnt_}>Application Filling</p>
                                        </div>
                                        <div className={style.lastheading_}>
                                            <RightSvg />
                                            <p className={style.lastheadingfnt_}>Choice Filling</p>
                                        </div>
                                    </div>
                                </div>
                            </>}
                        </div>
                        <div className={style.secondcardcontainer} >
                            <div className={style.tooglecontainer}>
                                <div style={{ background: Toogle ? '#0A9CED' : '' }} className={style.toogleexplore} onClick={handleexplore}>
                                    <p style={{ color: Toogle ? '#FFF' : '#3D3D3D' }} className={style.tooglefnt}>Explore</p>
                                </div>
                                <div style={{
                                    background: Toogle ? ''
                                        : '#0A9CED'
                                }} onClick={handleexplore} className={style.toogleexplore} >
                                    <p style={{ color: Toogle ? '#3D3D3D' : '#FFF' }} className={style.tooglefnt}>Achieve</p>
                                </div>
                            </div>
                            {Toogle ? <div className={style.pricecontainer}>
                                <div className={style.pricebox}>
                                    <div>
                                        <p className={style.price_fnt}><del>₹ 8,980/-</del><span className={style.price_gst}><del>+GST</del></span></p>
                                        <p className={style.price_fnt_}>₹ 4,980/-+GST<span className={style.price_gst_}>+GST</span></p>
                                    </div>
                                    <div className={style.btncontianerexploremobile}>
                                        <p className={style.btncontianerexploremobile_par}>MOST POPULAR</p>
                                    </div>
                                    <p className={style.price___}>Lorem ipsum dolor sit amet consectetur. Porta dui sit orci varius commodo ut. Aliquet urna eu libero vel nisi enim.</p>
                                </div>
                                <div className={style.btncontainer}>
                                    <button className={style.btn_dsgdsgs}>Upgrade Now</button>
                                    <p className={style.compare}>Compare plan <Compareplansvg /></p>
                                </div>
                            </div> : <div className={style.pricecontainer}>
                                <div className={style.pricebox}>
                                    <div>
                                        <p className={style.price_fnt}><del>₹ 29,980/-</del><span className={style.price_gst}><del>+GST</del></span></p>
                                        <p className={style.price_fnt_}>₹ 24,980/-+GST<span className={style.price_gst_}>+GST</span></p>
                                    </div>
                                    <div className={style.btncontianerachievemobile}>
                                        <p className={style.btncontianerachievemobile_par}>PREMIUM</p>
                                    </div>
                                    <p className={style.price___}>Lorem ipsum dolor sit amet consectetur. Porta dui sit orci varius commodo ut. Aliquet urna eu libero vel nisi enim.</p>
                                </div>
                                <div className={style.btncontainer}>
                                    <button className={style.btn_dsgdsgs}>Upgrade Now</button>
                                    <p className={style.compare}>Compare plan <Compareplansvg /></p>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



export default Popup