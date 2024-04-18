import React from 'react'
import ToolSvg from '../ModelSvg/toolsvg'
import Analaysis from '../../ServiceSvg/analaysis'
import DiamondSvg from '../ModelSvg/diamondsvg'
import Style from './explore.module.css'
import {useState} from 'react'

const ExploreModal = (props) =>{
    const handleClick = () =>{
        props.closeModal(false)
    }
    return (
        <> 
            <dialog open className={Style.mainContianer}>
            <div className={Style.modelContainer}>
            <div className={Style.modelheading}>
               <div className={Style.closeicon} onClick={handleClick}>
               <span className={Style.modelfreetext}  onClick={handleClick}>X</span>
               </div>
                <div className={Style.model__}>
                <div className={Style.modelheading_}>
                    <div className={Style.firstheading__}>
                       <DiamondSvg/>
                    <h2 className='title-sm-primary'>Explore</h2>
                    </div>
                    <div className={Style.modelfreeplanexplore}>
                        <p className={Style.freeplanexplore}>MOST POPULAR</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className={Style.modelpricetagcontainer}>
                   <div>
                    <p className={Style.modelexplorefnt}>₹ 8,980/-+GST</p>
                   <p className='title-md-primary'>₹ 4,980/-+GST</p>
                   </div>
                   <div >
                     <button className={Style.btnfreeplanExplore}>Current Plan</button>
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
                 <ToolSvg/>
                   <p className={Style.tooltext}>Tools</p>
                   </div>
                   <div>
                    <h2 className={Style.tooltext_}>NEET Score Booster</h2>
                    <p className={Style.tooltext__}>Online AI Mock Test Platform for Revision, Practice & Performance Insights</p>
                   </div>
                   <div>
                    <h2 className={Style.tooltext_}>Cut-off & Allotments</h2>
                    <p className={Style.tooltext__}>Category-wise Closing Ranks and corresponding seat allotments. Depending on college type.</p>
                   </div>
                   <div>
                    <h2 className={Style.tooltext_}>Fees & Seat Matrix</h2>
                    <p className={Style.tooltext__}>Category-wise seat distribution and fee-structures to identify the best-fit colleges based on your requirements</p>
                   </div>
                   <div>
                    <h2 className={Style.tooltext_}>College Predictor</h2>
                    <p className={Style.tooltext__}>A tool to help students identify top colleges by comparing their ranks to past NEET Cut-Offs, Available seats and possible changes.</p>
                   </div>
                   <div>
                    <h2 className={Style.tooltext_}>College Compare</h2>
                    <p className={Style.tooltext__}>Torem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                   </div>
                </div>
                <div className={Style.modeltool}>
                   <div className={Style.modeltool_}>
                 <Analaysis/>
                   <p className={Style.tooltext}>Analysis</p>
                   </div>
                   <div>
                    <h2 className={Style.tooltext_}>5-Years Exam Paper</h2>
                    <p className={Style.tooltext__}>Porem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                   </div>
                   <div>
                    <h2 className={Style.tooltext_}>5-Years Exam Paper</h2>
                    <p className={Style.tooltext__}>Porem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                   </div>
                </div>
            </div>
            </div>
        </dialog>
        </>
    )
}





export default ExploreModal