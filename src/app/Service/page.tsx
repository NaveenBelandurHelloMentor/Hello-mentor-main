'use client'

import React from 'react'
import style from './page.module.css'
import PaperPlane from './ServiceSvg/paperPlane'
import Tool from './ServiceSvg/Tool'
import RankPredicator from './ServiceSvg/RankPredictor'
import AnalaysisSvg from './ServiceSvg/analaysis'
import Resourcessvg from './ServiceSvg/resources'
import ViewDetailsSvg from './ServiceSvg/viewDetails'
import ExploreSvg from './ServiceSvg/explore'
import AchieveSvg from './ServiceSvg/achieve'
import PreExamSvg from './ServiceSvg/PreExam'
import ScholorShipSvg from './ServiceSvg/ScholorShip'
import Link from 'next/link'
import Modal from './Component/ModalFree/Model'
import ExploreModal from './Component/ModalExplore/ExploreModel'
import AchiveModal from './Component/ModalAchieve/AchieveModel'
import {useState} from 'react'


const ServicePage = () => {
    const [modal,setModal] = useState(false)
    const [explore,setExplore] = useState(false)
    const [achieve,setAchieve] = useState(false)
    const [toogle,setToogle] = useState('free')

    const handleclickFree = (num: number) => {
      setModal(true)
    }

    const handleclickPopular = (num: number) => {
        setExplore(true)
       
    }

    const handleclickPremium = (num: number) => {
       setAchieve(true)
    }

    const handleState = (str:String) =>{
        if(str == 'free'){
            setToogle('free')
        }else if(str == 'explore'){
            setToogle('explore')
        }else if(str == 'achieve'){
            setToogle('achieve')
        }
      
        
    }

    return (
        <>
            <section className={style.maincontainer}>
                <div className={style.firstheading}>
                    <h2 className={`title-md-primary`}>Plans & Pricing</h2>
                    <p className={`body-md-tertiary`}>Your NEET UG conquest starts here with your personalised Medical Mentor</p>
                </div>
                <div className={style.mobilehide}>
                    <div className={style.mobileslidecontainer}>
                        <div className={style.mobilehead}>
                          <div className={style.mbl}>
                          <Link className={toogle == 'free' ? style.fnttoogle : style.fnt} onMouseEnter={()=>handleState('free')} href='#free'>Free</Link>
                          <Link className={toogle == 'explore' ? style.fnttoogle : style.fnt} onMouseEnter={()=>handleState('explore')} href='#explore'>Explore</Link>
                          <Link  className={toogle == 'achieve' ? style.fnttoogle : style.fnt} onMouseEnter={()=>handleState('achieve')} href='#achieve'>Achieve</Link>
                          </div>
                        </div>

                    </div>

                </div>
                <div className={style.firstcontainer}>
                    <div className={style.firstbox}>
                        <div className={style.firstBox__}>
                            <div className={style.cardContent}>
                                <div className={style.top} id='free'>
                                    <div className={style.firstheadingcontainer} >
                                        <div className={style.headings}>
                                            <div className={style.first__} >
                                                <PaperPlane />
                                                <h2 className={`title-sm-primary`}>Free</h2>
                                            </div>
                                            <div className={style.freeplan}>
                                                <p>FREE PLAN</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className={style.freeplantext}>Lorem ipsum dolor sit amet consectetur.</p>
                                        </div>
                                    </div>
                                    <div className={style.price}>
                                        <h2 className={`title-md-primary`}>₹ 0/-</h2>
                                        <div className={style.btndisable}>Current Plan</div>
                                    </div>
                                    <div className={style.basic} >
                                        <h2 className={`body-md-secondary `}>Basic Features,</h2>
                                    </div>
                                </div>
                                <div className={style.line}>
                                </div>
                                <div className={style.firsttoolcontainer__}>
                                    <div className={style.firsttoolbox__}>
                                        <div className={style.firsttoolcontainer}>
                                            <Tool />
                                            <p className={`title-xs-primary`}>Tools</p>
                                        </div>
                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>Rank Predictor</p>
                                        </div>
                                    </div>
                                    <div className={style.secondtoolcontainer__}>
                                        <div className={style.secondtoolcontainer}>
                                            <AnalaysisSvg />
                                            <p className={`title-xs-primary`}>Analysis</p>
                                        </div>
                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>5-Years Exam Paper</p>
                                        </div>
                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>5 year competition</p>
                                        </div>
                                    </div>
                                    <div className={style.thirdContainer__}>
                                        <div className={style.secondtoolcontainer}>
                                            <Resourcessvg />
                                            <p className={`title-xs-primary`}>Resources</p>
                                        </div>
                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>Latest Webinar recording (24 Hrs)</p>
                                        </div>
                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>All State Counselling e-books
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Free Modal Goes Here */}
                               {modal == true ? <Modal closeModal={setModal} /> : ''} 
                            <div className={style.lasttoolcontainer}>
                                <Link href='#' className={style.viewdetail} onClick={()=>handleclickFree(1)} >View Details</Link>
                                <ViewDetailsSvg  />
                            </div>
                        </div>
                        <div className={style.exploreBox_}>
                            <div className={style.cardContent}>
                                <div className={style.top} id='explore'>
                                    <div className={style.firstheadingcontainer}>
                                        <div className={style.headings}>
                                            <div className={style.first__} >
                                                <ExploreSvg />
                                                <h2 className={`title-sm-primary`}>Explore</h2>
                                            </div>
                                            <div className={style.freeplan}>
                                                <p>MOST POPULAR</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className={style.freeplantext}>Lorem ipsum dolor sit amet consectetur.</p>
                                        </div>
                                    </div>
                                    <div className={style.price__}>
                                        <div>
                                            <p className={style.price__fnt}>₹ 8,980/<span className={style.price_fnt_gst}>-+GST</span></p>
                                        </div>

                                        <div className={style.price} >
                                            <h2 className={`title-md-primary`}>₹ 4,980/-<span className={style.secondboxgst}>-+GST</span></h2>
                                            <button className={style.upgradebtn}>Upgrade Now</button>
                                        </div>
                                    </div>
                                    <div className={style.basic} >
                                        <h2 className={`body-md-secondary `}>Everything in FREE plus,</h2>
                                    </div>
                                </div>
                                <div className={style.line}>
                                </div>
                                <div className={style.firsttoolcontainer__}>
                                    <div className={style.firsttoolbox__}>
                                        <div className={style.firsttoolcontainer}>
                                            <Tool />
                                            <p className={`title-xs-primary`}>Tools</p>
                                        </div>
                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>NEET Score Booster</p>
                                        </div>
                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>Cut-off & allotment</p>
                                        </div>
                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>Fees & Seat Matrix</p>
                                        </div>
                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>College Predictor & Compare</p>
                                        </div>
                                    </div>
                                    <div className={style.secondtoolcontainer__}>
                                        <div className={style.secondtoolcontainer}>
                                            <AnalaysisSvg />
                                            <p className={`title-xs-primary`}>Analysis</p>
                                        </div>
                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>Merit List</p>
                                        </div>
                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>Seat Matrix</p>
                                        </div>
                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>Cut-off</p>
                                        </div>
                                    </div>
                                    <div className={style.thirdContainer__}>
                                        <div className={style.secondtoolcontainer}>
                                            <Resourcessvg />
                                            <p className={`title-xs-primary`}>Resources</p>
                                        </div>
                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>Document Checklist</p>
                                        </div>
                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>Medical Guide Handbook</p>
                                        </div>
                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>Webinars & Workshops</p>
                                        </div>
                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>Counselling Videos
                                            </p>
                                        </div>
                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>News & Alerts
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            { /* Explore Modal */}
                            {explore == true ? <ExploreModal closeModal={setExplore}/> : ''}
                            <div className={style.lasttoolcontainer}>
                                <Link href='#' className={style.viewdetail} onClick={() => handleclickPopular(2)}  >View Details</Link>
                                <ViewDetailsSvg />
                            </div>
                        </div>
                        <div className={style.premiumBox_}>
                            <div className={style.cardContent}>
                                <div className={style.top} id='achieve'>
                                    <div className={style.firstheadingcontainer}>
                                        <div className={style.headings}>
                                            <div className={style.first__} >
                                                <AchieveSvg />
                                                <h2 className={`title-sm-primary`}>Achieve</h2>
                                            </div>
                                            <div className={style.premium}>
                                                <p className={style.premiumfnt}>PREMIUM</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className={style.freeplantext}>Lorem ipsum dolor sit amet consectetur.</p>
                                        </div>
                                    </div>
                                    <div className={style.price__}>
                                        <div>
                                            <p className={style.price__fnt}>₹ 29,980/<span className={style.price_fnt_gst}>-+GST</span></p>
                                        </div>
                                        <div className={style.price} >
                                            <h2 className={`title-md-primary`}>₹ 24,980/-<span className={style.secondboxgst}>-+GST</span></h2>
                                            <button className={style.upgradebtn}>Upgrade Now</button>
                                        </div>
                                    </div>
                                    <div className={style.basic} >
                                        <h2 className={`body-md-secondary `}>Everything in EXPLORE plus,</h2>
                                    </div>
                                </div>
                                <div className={style.line}>
                                </div>
                                <div className={style.firsttoolcontainer__}>
                                    <div className={style.firsttoolbox__}>
                                        <div className={style.firsttoolcontainer}>
                                            <PreExamSvg />
                                            <p className={`title-xs-primary`}>Pre-Exam Mentorship</p>
                                        </div>
                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>Academic Mentor</p>
                                        </div>
                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>Success Coach</p>
                                        </div>
                                    </div>
                                    <div className={style.secondtoolcontainer__}>
                                        <div className={style.secondtoolcontainer}>
                                            <ScholorShipSvg />
                                            <p className={`title-xs-primary`}>Post-Exam Mentorship</p>
                                        </div>
                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>Junior Mentor</p>
                                        </div>
                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>Senior Mentor</p>
                                        </div>

                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>Shortlist Your Counselling & Colleges</p>
                                        </div>

                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>College Ranking</p>
                                        </div>

                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>Documentation & Verification
                                            </p>
                                        </div>
                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>Application Filling
                                            </p>
                                        </div>
                                        <div className={style.firsttoolcontainer}>
                                            <RankPredicator />
                                            <p className={`body-md-tertiary`}>Choice Filling
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                              
                              {/* Achieve Modal */}
                              {achieve == true ? <AchiveModal closeModal={setAchieve}/> : ''}
                            <div className={style.lasttoolcontainer}>
                                <Link href='#' className={style.viewdetail} onClick={() => handleclickPremium(3)}>View Details</Link>
                                <ViewDetailsSvg />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



export default ServicePage