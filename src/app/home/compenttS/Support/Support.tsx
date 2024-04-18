import React from 'react'
import Style from './page.module.css'
import Phone from './SupportSvg/phone'
import Message from './SupportSvg/message'
import Location from './SupportSvg/location'
import Accordin from '../../compentt/Faq/Accordin'


const Support = () =>{
    return (
        <>
          <section className={Style.mainContainer}>
            <div>
                <div className={Style.mainHeading}>
                    <h2 className={`title-md-primary`}>Support</h2>
                    <p className={`body-md-tertiary`}>Check References for Your Document</p>
                </div>

                <div className={Style.cardContainer}>
                  <div className={Style.cardmain}>
                    <div className={Style.cardfirst}>
                      <div className={Style.cardfirst_box}>
                      <h2 className={`title-sm-primary ${Style.cardfnt}`}>Are you facing any problem?</h2>
                      <p>Lorem ipsum dolor sit amet consectetur. Volutpat nibh aenean sit nulla sit convallis feugiat ullamcorper faucibus.</p>
                      </div>

                      <div className={Style.cardsecond_box}>

                        <div className={Style.cardinside__}>
                          <div>
                            <Phone/>
                          </div>
                        <p className={`body-md-tertiary`}>+91 99999 33333</p>
                        
                        </div>

                        <div className={Style.cardinside__}>
                          <div>
                            <Message/>
                          </div>
                        <p className={`body-md-tertiary`}>support @gmail.com</p>
                        
                        </div>

                        <div className={Style.cardinside__}>
                          <div>
                           <Location/>
                          </div>
                        <p className={`body-md-tertiary`}>location.uvf4ryhb</p>
                        
                        </div>
                        
                      </div>

  
                    </div>

                    <div className={Style.cardsecond}> 
                   <p className={`${Style.cardInside_second} body-lg-secondary `}>General query</p>
                   <div className={Style.formFirst__}>
                    <p className={`body-sm-secondary`}>Type of querry</p>
                    <input className={Style.InputSecond} placeholder='Placeholder'/>
                    <p className={`body-sm-secondary ${Style.des}` }>Description</p>
                    <textarea className={Style.textAr} ></textarea>
                    <div>
                      <button className={`${Style.btn}`}>Submit</button>
                    </div>
                   
                   </div>
                       
                   
                      
                 



                   
                    </div>


                    <div>
                  
                  </div>

                  </div>

                </div>

            </div>
          </section>
          <Accordin/>
        </>
    )
}




export default Support