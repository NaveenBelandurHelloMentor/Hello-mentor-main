'use client'

import React from 'react'
import style from './page.module.css'
import FreeSvg from '../Componentsvg/freesvg'
import ExploreSvg from '../Componentsvg/exploresvg'
import AchieveSvg from '../Componentsvg/achievesvg'
import ToolSvg from '../Componentsvg/toolsvg'
import RightSvg from '../Componentsvg/rightsvg'
import WrongSvg from '../Componentsvg/wrongsvg'
import AnalaysisSvg from '../Componentsvg/analaysis'

const Popup = () => {

   const handleCLick = () => {
      alert('Hello world')
   }
   return (
      <section className={style.mainContainer}>
         <div className={style.popupcontianer}>
            <div className={style.popupfirstcontainer}>
               <p className={style.popupheading}>Choose a Plan that’s right for you</p>
            </div>
            <div className={style.mainpopupcontainer}>
               <div className={style.maincardcontainer}>
                  <div className={style.firstcard}>
                     <div className={style.firstcard_}>
                        <div className={style.firstcardinsideheading}>
                           <div className={style.first_}>
                              <FreeSvg />
                              <p className={style.first_fnt}>Free</p>
                           </div>
                           <div className={style.first__}>
                              <p className={style.first___}>FREE PLAN</p>
                           </div>
                        </div>
                        <div>
                           <p className={style.price_}>₹ 0/-<span className={style.gst_}>+GST</span></p>
                        </div>
                        <div>
                           <p className={style.price__}>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                     </div>
                     <div>
                        <input type='checkbox' />
                     </div>
                  </div>
                  <div className={style.firstcard}>
                     <div className={style.firstcard_}>
                        <div className={style.firstcardinsideheading}>
                           <div className={style.first_}>
                              <ExploreSvg />
                              <p className={style.first_fnt}>Explore</p>
                           </div>
                           <div className={style.first__}>
                              <p className={style.first___}>MOST POPULAR</p>
                           </div>
                        </div>
                        <div>
                           <p className={style.strike}><del>₹ 8,980/-</del><span className={style.strike_}><del>+GST</del></span></p>
                           <p className={style.price_}>₹ 4,980/-<span className={style.gst_}>+GST</span></p>
                        </div>
                        <div>
                           <p className={style.price__}>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                     </div>
                     <div>
                        <input type='checkbox' />
                     </div>
                  </div>
                  <div className={style.firstcard}>
                     <div className={style.firstcard_}>
                        <div className={style.firstcardinsideheading}>
                           <div className={style.first_}>
                              <AchieveSvg />
                              <p className={style.first_fnt}>Achieve</p>
                           </div>
                           <div className={style.first__}>
                              <p className={style.first___}>PREMIUM</p>
                           </div>
                        </div>
                        <div>
                           <p className={style.strike}><del>₹ 8,980/-</del><span className={style.strike_}><del>+GST</del></span></p>
                           <p className={style.price_}>₹ 24,980/-<span className={style.gst_}>+GST</span></p>
                        </div>
                        <div>
                           <p className={style.price__}>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                     </div>
                     <div>
                        <input type='checkbox' />
                     </div>
                  </div>
               </div>

               <div className={style.middlecontainer}>
                  <div className={style.middlecontainericon}>
                     <FreeSvg />
                     <p className={style.first_fnt}>Free</p>
                  </div>


                  <div className={style.middlebox__}>
                  <div className={style.middlebox}>
                   <ToolSvg/>
                   <p className={style.toolfnt}>Tools</p>
                  </div>
                  <div className={style.middletoolpar}>
                   <RightSvg/>
                   <div>
                     <p className={style.middletextfnt}>Rank Predictor</p>
                     <p className={style.middletextfnt_}>An advanced algorithm comparing marks vs. rank data to predict (estimate) a rank based on your NEET Score.</p>
                   </div>
                  </div>
                  <div className={style.middletoolpar}>
                   <WrongSvg/>
                   <div >
                     <p className={style.middletextfnt}>NEET Score Boosterr</p>
                     <p className={style.middletextfnt_}>An advanced algorithm comparing marks vs. rank data to predict (estimate) a rank based on your NEET Score.</p>
                   </div>
                  </div>
                  <div className={style.middletoolpar}>
                  <WrongSvg/>
                   <div>
                     <p className={style.middletextfnt}>Cut-off & Allotments</p>
                     <p className={style.middletextfnt_}>An advanced algorithm comparing marks vs. rank data to predict (estimate) a rank based on your NEET Score.</p>
                   </div>
                  </div>
                  <div className={style.middletoolpar}>
                  <WrongSvg/>
                   <div>
                     <p className={style.middletextfnt}>Fees & Seat Matrix</p>
                     <p className={style.middletextfnt_}>An advanced algorithm comparing marks vs. rank data to predict (estimate) a rank based on your NEET Score.</p>
                   </div>
                  </div>


                  <div className={style.middlebox}>
                   <AnalaysisSvg/>
                   <p className={style.toolfnt}>Analysis</p>
                  </div>
                  <div className={style.middletoolpar}>
                   <RightSvg/>
                   <div>
                     <p className={style.middletextfnt}>5-Years Exam Paper</p>
                     <p className={style.middletextfnt_}>An advanced algorithm comparing marks vs. rank data to predict (estimate) a rank based on your NEET Score.</p>
                   </div>
                  </div>
                  <div className={style.middletoolpar}>
                   <WrongSvg/>
                   <div>
                     <p className={style.middletextfnt}>5-Years Competetion</p>
                     <p className={style.middletextfnt_}>An advanced algorithm comparing marks vs. rank data to predict (estimate) a rank based on your NEET Score.</p>
                   </div>
                  </div>
                  <div className={style.middletoolpar}>
                  <WrongSvg/>
                   <div>
                     <p className={style.middletextfnt}>Cut-off & Allotments</p>
                     <p className={style.middletextfnt_}>An advanced algorithm comparing marks vs. rank data to predict (estimate) a rank based on your NEET Score.</p>
                   </div>
                  </div>
                  <div className={style.middletoolpar}>
                  <WrongSvg/>
                   <div>
                     <p className={style.middletextfnt}>Fees & Seat Matrix</p>
                     <p className={style.middletextfnt_}>An advanced algorithm comparing marks vs. rank data to predict (estimate) a rank based on your NEET Score.</p>
                   </div>
                  </div>
                  
                  



                   
                   </div>




               </div>



            </div>

            <div className={style.lastheading}>
               <div className={style.lastheading_}>
                  <div className={style.lasthead____}>
                     <p className={style.lastheading__}>Learn more about our MM Achieve Plan</p>
                     <p className={style.lastheading___}>Get a Personalised Mentorship for MM Achieve plan.</p>
                  </div>
                  <div>
                     <button className={style.btn}>Proceed</button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}


export default Popup