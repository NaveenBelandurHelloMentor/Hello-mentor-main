import React from 'react'
import Style from './model.module.css'
import AllandStateButton from '@/app/utils/components/filters/AllandStateButton/AllandStateButton'
import {useState} from 'react'
import CalenderSvg from './calendersvg'
import ArrowSvg from './arrowsvg'
import SmallArrow from './smallArrow'
import ArrowSvgRight from './ArrowSvgRight'

 

const ModelContainer  = ({open}) =>{
    const [toogle, setToogle] = useState<boolean>(false)

    const handleClick = () =>{
        alert('Hello World')
    }
    const handleOn = () => {
        setToogle(false)
      }
    
      const handleOff = () => {
        setToogle(true)
      }
       
    
      const modelOff = () =>{
        open(false)
      }
    
    return (
        <>    
          <section className={Style.maincontainer}>
            <div className={Style.container}>
            <div className={Style.firstContainer}>
                <button className={Style.icons} onClick={modelOff} >X</button>
            <div className={Style.firstBox}>
              <div>
                <p className={Style.bar}></p>
              </div>
              <div>
                <h2 className={`title-sm-primary`}>Webinars</h2>
                <p className={`body-md-tertiary`}>From aspirants to achievers: MM webinars and unlock your full potential</p>
              </div>
            </div>
            <div>
              <AllandStateButton children='All' onClick={handleClick} />
            </div>
          </div>

    

          <div className={Style.tooglecontianer}>
            <p className={toogle == false ? `${Style.tooglefnt}` : `title-xs-primary`} onClick={handleOn} >Upcoming (9)</p>
            <p className={toogle == true ? `${Style.tooglefnt}` : `title-xs-primary`} onClick={handleOff} >Recorded (80)</p>
          </div>
          {toogle == false ? <>
          <div className={Style.secondcontainerrr}>
     <div className={Style.secondcontainer}>
            <div className={Style.card}>
              <div className={Style.cardimage}>
              </div>
              <div className={Style.cardHead}>
                <h2 className={`title-sm-primary`}>Tamil Nadu Counselling</h2>
                <p className={`body-xs-secondary ${Style.textfnt}`}><CalenderSvg /> 5:30 PM / 20th Sept, 2023</p>
                <p className={`body-sm-tertiary`}>Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque</p>
              </div>
              <div className={Style.cardBottom}>
                <div className={Style.cardBottomcontainer} >
                  <div className={Style.profile}>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>10</p>
                    <p className={`body-xs-tertiary`}>days</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>12</p>
                    <p className={`body-xs-tertiary`}>hrs</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>50</p>
                    <p className={`body-xs-tertiary`}>min</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>50</p>
                    <p className={`body-xs-tertiary`}>sec</p>
                  </div>
                </div>
                <button className={Style.btn}>Book Now</button>
                <div>
                </div>
              </div>
            </div>
            <div className={Style.card}>
              <div className={Style.cardimage}>
              </div>
              <div className={Style.cardHead}>
                <h2 className={`title-sm-primary`}>Tamil Nadu Counselling</h2>
                <p className={`body-xs-secondary ${Style.textfnt}`}><CalenderSvg /> 5:30 PM / 20th Sept, 2023</p>
                <p className={`body-sm-tertiary`}>Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque</p>
              </div>
              <div className={Style.cardBottom}>
                <div className={Style.cardBottomcontainer} >
                  <div className={Style.profile}>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>10</p>
                    <p className={`body-xs-tertiary`}>days</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>12</p>
                    <p className={`body-xs-tertiary`}>hrs</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>50</p>
                    <p className={`body-xs-tertiary`}>min</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>50</p>
                    <p className={`body-xs-tertiary`}>sec</p>
                  </div>
                </div>
                <button className={Style.btn}>Book Now</button>
                <div>
                </div>
              </div>
            </div>
            <div className={Style.card}>
              <div className={Style.cardimage}>
              </div>
              <div className={Style.cardHead}>
                <h2 className={`title-sm-primary`}>Tamil Nadu Counselling</h2>
                <p className={`body-xs-secondary ${Style.textfnt}`}><CalenderSvg /> 5:30 PM / 20th Sept, 2023</p>
                <p className={`body-sm-tertiary`}>Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque</p>
              </div>
              <div className={Style.cardBottom}>
                <div className={Style.cardBottomcontainer} >
                  <div className={Style.profile}>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>10</p>
                    <p className={`body-xs-tertiary`}>days</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>12</p>
                    <p className={`body-xs-tertiary`}>hrs</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>50</p>
                    <p className={`body-xs-tertiary`}>min</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>50</p>
                    <p className={`body-xs-tertiary`}>sec</p>
                  </div>
                </div>
                <button className={Style.btn}>Book Now</button>
                <div>
                </div>
              </div>
            </div>
          </div>

          <div className={Style.secondcontainer}>
            <div className={Style.card}>
              <div className={Style.cardimage}>
              </div>
              <div className={Style.cardHead}>
                <h2 className={`title-sm-primary`}>Tamil Nadu Counselling</h2>
                <p className={`body-xs-secondary ${Style.textfnt}`}><CalenderSvg /> 5:30 PM / 20th Sept, 2023</p>
                <p className={`body-sm-tertiary`}>Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque</p>
              </div>
              <div className={Style.cardBottom}>
                <div className={Style.cardBottomcontainer} >
                  <div className={Style.profile}>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>10</p>
                    <p className={`body-xs-tertiary`}>days</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>12</p>
                    <p className={`body-xs-tertiary`}>hrs</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>50</p>
                    <p className={`body-xs-tertiary`}>min</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>50</p>
                    <p className={`body-xs-tertiary`}>sec</p>
                  </div>
                </div>
                <button className={Style.btn}>Book Now</button>
                <div>
                </div>
              </div>
            </div>
            <div className={Style.card}>
              <div className={Style.cardimage}>
              </div>
              <div className={Style.cardHead}>
                <h2 className={`title-sm-primary`}>Tamil Nadu Counselling</h2>
                <p className={`body-xs-secondary ${Style.textfnt}`}><CalenderSvg /> 5:30 PM / 20th Sept, 2023</p>
                <p className={`body-sm-tertiary`}>Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque</p>
              </div>
              <div className={Style.cardBottom}>
                <div className={Style.cardBottomcontainer} >
                  <div className={Style.profile}>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>10</p>
                    <p className={`body-xs-tertiary`}>days</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>12</p>
                    <p className={`body-xs-tertiary`}>hrs</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>50</p>
                    <p className={`body-xs-tertiary`}>min</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>50</p>
                    <p className={`body-xs-tertiary`}>sec</p>
                  </div>
                </div>
                <button className={Style.btn}>Book Now</button>
                <div>
                </div>
              </div>
            </div>
            <div className={Style.card}>
              <div className={Style.cardimage}>
              </div>
              <div className={Style.cardHead}>
                <h2 className={`title-sm-primary`}>Tamil Nadu Counselling</h2>
                <p className={`body-xs-secondary ${Style.textfnt}`}><CalenderSvg /> 5:30 PM / 20th Sept, 2023</p>
                <p className={`body-sm-tertiary`}>Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque</p>
              </div>
              <div className={Style.cardBottom}>
                <div className={Style.cardBottomcontainer} >
                  <div className={Style.profile}>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>10</p>
                    <p className={`body-xs-tertiary`}>days</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>12</p>
                    <p className={`body-xs-tertiary`}>hrs</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>50</p>
                    <p className={`body-xs-tertiary`}>min</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>50</p>
                    <p className={`body-xs-tertiary`}>sec</p>
                  </div>
                </div>
                <button className={Style.btn}>Book Now</button>
                <div>
                </div>
              </div>
            </div>
          </div>

          <div className={Style.secondcontainer}>
            <div className={Style.card}>
              <div className={Style.cardimage}>
              </div>
              <div className={Style.cardHead}>
                <h2 className={`title-sm-primary`}>Tamil Nadu Counselling</h2>
                <p className={`body-xs-secondary ${Style.textfnt}`}><CalenderSvg /> 5:30 PM / 20th Sept, 2023</p>
                <p className={`body-sm-tertiary`}>Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque</p>
              </div>
              <div className={Style.cardBottom}>
                <div className={Style.cardBottomcontainer} >
                  <div className={Style.profile}>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>10</p>
                    <p className={`body-xs-tertiary`}>days</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>12</p>
                    <p className={`body-xs-tertiary`}>hrs</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>50</p>
                    <p className={`body-xs-tertiary`}>min</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>50</p>
                    <p className={`body-xs-tertiary`}>sec</p>
                  </div>
                </div>
                <button className={Style.btn}>Book Now</button>
                <div>
                </div>
              </div>
            </div>
            <div className={Style.card}>
              <div className={Style.cardimage}>
              </div>
              <div className={Style.cardHead}>
                <h2 className={`title-sm-primary`}>Tamil Nadu Counselling</h2>
                <p className={`body-xs-secondary ${Style.textfnt}`}><CalenderSvg /> 5:30 PM / 20th Sept, 2023</p>
                <p className={`body-sm-tertiary`}>Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque</p>
              </div>
              <div className={Style.cardBottom}>
                <div className={Style.cardBottomcontainer} >
                  <div className={Style.profile}>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>10</p>
                    <p className={`body-xs-tertiary`}>days</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>12</p>
                    <p className={`body-xs-tertiary`}>hrs</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>50</p>
                    <p className={`body-xs-tertiary`}>min</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>50</p>
                    <p className={`body-xs-tertiary`}>sec</p>
                  </div>
                </div>
                <button className={Style.btn}>Book Now</button>
                <div>
                </div>
              </div>
            </div>
            <div className={Style.card}>
              <div className={Style.cardimage}>
              </div>
              <div className={Style.cardHead}>
                <h2 className={`title-sm-primary`}>Tamil Nadu Counselling</h2>
                <p className={`body-xs-secondary ${Style.textfnt}`}><CalenderSvg /> 5:30 PM / 20th Sept, 2023</p>
                <p className={`body-sm-tertiary`}>Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque</p>
              </div>
              <div className={Style.cardBottom}>
                <div className={Style.cardBottomcontainer} >
                  <div className={Style.profile}>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>10</p>
                    <p className={`body-xs-tertiary`}>days</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>12</p>
                    <p className={`body-xs-tertiary`}>hrs</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>50</p>
                    <p className={`body-xs-tertiary`}>min</p>
                  </div>
                  <div className={Style.timecounter}>
                    <p className={`body-xs-secondary`}>50</p>
                    <p className={`body-xs-tertiary`}>sec</p>
                  </div>
                </div>
                <button className={Style.btn}>Book Now</button>
                <div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </>
            : 
              <div className={Style.secondcontainerrr}>
            <div className={Style.secondcontainer}>
              <div className={Style.card}>
                <div className={Style.cardimage}>
                </div>
                <div >
                  <button className={Style.btnHead}><ArrowSvgRight />Watch</button>
                </div>
                <div className={Style.cardHead}>
                  <h2 className={`title-sm-primary`}>Tamil Nadu Counselling</h2>
                  <p className={`body-xs-secondary ${Style.textfnt}`}>1hr 30mins / 20th Sept, 2023</p>
                  <p className={`body-sm-tertiary`}>Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque</p>
                </div>
                <div className={Style.cardBottom}>
                  <div className={Style.cardBottomcontainer} >
                    <div className={Style.secondtimectr} >
                      <p className={`body-xs-secondary`}><SmallArrow /></p>
                      <p className={Style.secondfnt}>1.9k Attended</p>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <div className={Style.card}>
                <div className={Style.cardimage}>
                </div>
                <div>
                  <button className={Style.btnHead}><ArrowSvgRight />Watch</button>
                </div>
                <div className={Style.cardHead}>
                  <h2 className={`title-sm-primary`}>Tamil Nadu Counselling</h2>
                  <p className={`body-xs-secondary ${Style.textfnt}`}>1hr 30mins / 20th Sept, 2023</p>
                  <p className={`body-sm-tertiary`}>Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque</p>
                </div>
                <div className={Style.cardBottom}>
                  <div className={Style.cardBottomcontainer} >
                    <p className={`body-xs-secondary`}><SmallArrow /></p>
                    <p className={Style.secondfnt}>1.9k Attended</p>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <div className={Style.card}>
                <div className={Style.cardimage}>
                </div>
                <div >
                  <button className={Style.btnHead}><ArrowSvgRight />Watch</button>
                </div>
                <div className={Style.cardHead}>
                  <h2 className={`title-sm-primary`}>Tamil Nadu Counselling</h2>
                  <p className={`body-xs-secondary ${Style.textfnt}`}>1hr 30mins / 20th Sept, 2023</p>
                  <p className={`body-sm-tertiary`}>Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque</p>
                </div>
                <div className={Style.cardBottom}>
                  <div className={Style.cardBottomcontainer} >
                    <p className={`body-xs-secondary`}><SmallArrow /></p>
                    <p className={Style.secondfnt}>1.9k Attended</p>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
            <div className={Style.secondcontainer}>
              <div className={Style.card}>
                <div className={Style.cardimage}>
                </div>
                <div >
                  <button className={Style.btnHead}><ArrowSvgRight />Watch</button>
                </div>
                <div className={Style.cardHead}>
                  <h2 className={`title-sm-primary`}>Tamil Nadu Counselling</h2>
                  <p className={`body-xs-secondary ${Style.textfnt}`}>1hr 30mins / 20th Sept, 2023</p>
                  <p className={`body-sm-tertiary`}>Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque</p>
                </div>
                <div className={Style.cardBottom}>
                  <div className={Style.cardBottomcontainer} >
                    <div className={Style.secondtimectr} >
                      <p className={`body-xs-secondary`}><SmallArrow /></p>
                      <p className={Style.secondfnt}>1.9k Attended</p>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <div className={Style.card}>
                <div className={Style.cardimage}>
                </div>
                <div>
                  <button className={Style.btnHead}><ArrowSvgRight />Watch</button>
                </div>
                <div className={Style.cardHead}>
                  <h2 className={`title-sm-primary`}>Tamil Nadu Counselling</h2>
                  <p className={`body-xs-secondary ${Style.textfnt}`}>1hr 30mins / 20th Sept, 2023</p>
                  <p className={`body-sm-tertiary`}>Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque</p>
                </div>
                <div className={Style.cardBottom}>
                  <div className={Style.cardBottomcontainer} >
                    <p className={`body-xs-secondary`}><SmallArrow /></p>
                    <p className={Style.secondfnt}>1.9k Attended</p>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <div className={Style.card}>
                <div className={Style.cardimage}>
                </div>
                <div >
                  <button className={Style.btnHead}><ArrowSvgRight />Watch</button>
                </div>
                <div className={Style.cardHead}>
                  <h2 className={`title-sm-primary`}>Tamil Nadu Counselling</h2>
                  <p className={`body-xs-secondary ${Style.textfnt}`}>1hr 30mins / 20th Sept, 2023</p>
                  <p className={`body-sm-tertiary`}>Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque</p>
                </div>
                <div className={Style.cardBottom}>
                  <div className={Style.cardBottomcontainer} >
                    <p className={`body-xs-secondary`}><SmallArrow /></p>
                    <p className={Style.secondfnt}>1.9k Attended</p>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
            <div className={Style.secondcontainer}>
              <div className={Style.card}>
                <div className={Style.cardimage}>
                </div>
                <div >
                  <button className={Style.btnHead}><ArrowSvgRight />Watch</button>
                </div>
                <div className={Style.cardHead}>
                  <h2 className={`title-sm-primary`}>Tamil Nadu Counselling</h2>
                  <p className={`body-xs-secondary ${Style.textfnt}`}>1hr 30mins / 20th Sept, 2023</p>
                  <p className={`body-sm-tertiary`}>Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque</p>
                </div>
                <div className={Style.cardBottom}>
                  <div className={Style.cardBottomcontainer} >
                    <div className={Style.secondtimectr} >
                      <p className={`body-xs-secondary`}><SmallArrow /></p>
                      <p className={Style.secondfnt}>1.9k Attended</p>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <div className={Style.card}>
                <div className={Style.cardimage}>
                </div>
                <div>
                  <button className={Style.btnHead}><ArrowSvgRight />Watch</button>
                </div>
                <div className={Style.cardHead}>
                  <h2 className={`title-sm-primary`}>Tamil Nadu Counselling</h2>
                  <p className={`body-xs-secondary ${Style.textfnt}`}>1hr 30mins / 20th Sept, 2023</p>
                  <p className={`body-sm-tertiary`}>Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque</p>
                </div>
                <div className={Style.cardBottom}>
                  <div className={Style.cardBottomcontainer} >
                    <p className={`body-xs-secondary`}><SmallArrow /></p>
                    <p className={Style.secondfnt}>1.9k Attended</p>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <div className={Style.card}>
                <div className={Style.cardimage}>
                </div>
                <div >
                  <button className={Style.btnHead}><ArrowSvgRight />Watch</button>
                </div>
                <div className={Style.cardHead}>
                  <h2 className={`title-sm-primary`}>Tamil Nadu Counselling</h2>
                  <p className={`body-xs-secondary ${Style.textfnt}`}>1hr 30mins / 20th Sept, 2023</p>
                  <p className={`body-sm-tertiary`}>Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque</p>
                </div>
                <div className={Style.cardBottom}>
                  <div className={Style.cardBottomcontainer} >
                    <p className={`body-xs-secondary`}><SmallArrow /></p>
                    <p className={Style.secondfnt}>1.9k Attended</p>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
            <div className={Style.secondcontainer}>
              <div className={Style.card}>
                <div className={Style.cardimage}>
                </div>
                <div >
                  <button className={Style.btnHead}><ArrowSvgRight />Watch</button>
                </div>
                <div className={Style.cardHead}>
                  <h2 className={`title-sm-primary`}>Tamil Nadu Counselling</h2>
                  <p className={`body-xs-secondary ${Style.textfnt}`}>1hr 30mins / 20th Sept, 2023</p>
                  <p className={`body-sm-tertiary`}>Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque</p>
                </div>
                <div className={Style.cardBottom}>
                  <div className={Style.cardBottomcontainer} >
                    <div className={Style.secondtimectr} >
                      <p className={`body-xs-secondary`}><SmallArrow /></p>
                      <p className={Style.secondfnt}>1.9k Attended</p>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <div className={Style.card}>
                <div className={Style.cardimage}>
                </div>
                <div>
                  <button className={Style.btnHead}><ArrowSvgRight />Watch</button>
                </div>
                <div className={Style.cardHead}>
                  <h2 className={`title-sm-primary`}>Tamil Nadu Counselling</h2>
                  <p className={`body-xs-secondary ${Style.textfnt}`}>1hr 30mins / 20th Sept, 2023</p>
                  <p className={`body-sm-tertiary`}>Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque</p>
                </div>
                <div className={Style.cardBottom}>
                  <div className={Style.cardBottomcontainer} >
                    <p className={`body-xs-secondary`}><SmallArrow /></p>
                    <p className={Style.secondfnt}>1.9k Attended</p>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <div className={Style.card}>
                <div className={Style.cardimage}>
                </div>
                <div >
                  <button className={Style.btnHead}><ArrowSvgRight />Watch</button>
                </div>
                <div className={Style.cardHead}>
                  <h2 className={`title-sm-primary`}>Tamil Nadu Counselling</h2>
                  <p className={`body-xs-secondary ${Style.textfnt}`}>1hr 30mins / 20th Sept, 2023</p>
                  <p className={`body-sm-tertiary`}>Lorem ipsum dolor sit amet consectetur. Tincidunt at aliquam varius pellentesque</p>
                </div>
                <div className={Style.cardBottom}>
                  <div className={Style.cardBottomcontainer} >
                    <p className={`body-xs-secondary`}><SmallArrow /></p>
                    <p className={Style.secondfnt}>1.9k Attended</p>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          }


            </div>
          </section> 
      
        
        </>
    )
}






export default ModelContainer 