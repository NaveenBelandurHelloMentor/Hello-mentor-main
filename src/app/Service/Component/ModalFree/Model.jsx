import React from 'react'
import PaperPlane from '../../ServiceSvg/paperPlane'
import ToolSvg from '../ModelSvg/toolsvg'
import AnalaysisSvg from '../ModelSvg/achievesvg'
import ResourceSvg from '../ModelSvg/resource'
import style from './modalfree.module.css'
import  CloseSvg from '../ModelSvg/close'
import {useState} from 'react'


const Modal = (props) =>{
     const handleClick = () =>{
       props.closeModal(false)
     }

    return (
        <> <>
            <dialog open className={style.mainContianer}>
            <div className={style.modelContainer}>
            <div className={style.modelheading}>
               <div className={style.closeicon} onClick={handleClick}>
               <span className={style.modelfreetext} onClick={handleClick}>X</span>
               </div>
                <div className={style.model__}>
                <div className={style.modelheading_}>
                    <div className={style.firstheading__}>
                    <PaperPlane/>
                    <h2 className='title-sm-primary'>Free</h2>
                    </div>
                    <div className={style.modelfreeplan}>
                        <p className={style.freeplan}>FREE PLAN</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className={style.modelpricetagcontainer}>
                   <div>
                   <p className='title-md-primary'>₹ 0/-</p>
                   </div>
                   <div >
                     <button className={style.btnfreeplan}>Current Plan</button>
                    </div>
                </div>
                <div>
                    <p className={style.basicftn}>Basic Features</p>
                </div>
                <div className={style.line}>
                </div>
            </div>
            <div className={style.modelmain}>
                <div className={style.modeltool}>
                   <div className={style.modeltool_}>
                   <ToolSvg/>
                   <p className={style.tooltext}>Tools</p>
                   </div>
                   <div>
                    <h2 className={style.tooltext_}>Rank Predictor</h2>
                    <p className={style.tooltext__}>An advanced algorithm comparing marks vs. rank data to predict (estimate) a rank based on your NEET Score</p>
                   </div>
                </div>
                <div className={style.modeltool}>
                   <div className={style.modeltool_}>
                 <AnalaysisSvg/>
                   <p className={style.tooltext}>Analysis</p>
                   </div>
                   <div>
                    <h2 className={style.tooltext_}>5-Years Exam Paper</h2>
                    <p className={style.tooltext__}>Porem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                   </div>
                   <div>
                    <h2 className={style.tooltext_}>5-Years Exam Paper</h2>
                    <p className={style.tooltext__}>Porem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                   </div>
                </div>
                <div className={style.modeltool}>
                   <div className={style.modeltool_}>
                <ResourceSvg/>
                   <p className={style.tooltext}>Resources</p>
                   </div>
                   <div>
                    <h2 className={style.tooltext_}>Latest Webinar Recording (24 Hrs)</h2>
                    <p className={style.tooltext__}>Dorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                   </div>
                   <div>
                    <h2 className={style.tooltext_}>Latest Webinar Recording (24 Hrs)</h2>
                    <p className={style.tooltext__}>Virtual guides containing detailed information of state-wise NEET Counseling processes</p>
                   </div>
                </div>
            </div>
            </div>
        </dialog>
        </>
        </>
    )
}





export default Modal