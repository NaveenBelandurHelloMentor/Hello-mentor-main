'use client'

import React from 'react'
import {useState} from 'react'
import Style from './page.module.css'
import TabComponent from '@/app/utils/components/TabComponent/TabComponent'
import {otherLinkResponseData} from './OtherLinkResponseData'
import { OtherLinkData } from './OtherLinkResponseData'
import Link from 'next/link'



const OtherLink = () =>{

    
    const isDateLatest = (date: string) => {
        if (new Date().getTime() === new Date(date).getTime()) return true
        return (Math.abs(new Date().getTime() - new Date(date).getTime())) / (1000 * 60 * 60) < 24 ? true : false
    }




    const [data,setData] = useState<OtherLinkData[]>(otherLinkResponseData)
    const [Click,setC] = useState<Number>(0)
    const TabList: string[] = ['Resources', 'Essential links ']



    const handleClick = (e:Number)=>{
     setC(e)
    }
       


    return (
        <>
        <section className={Style.mainContainer}>
            <div className={Style.box}>
                    <div className={Style.firstsection}>
                        <div>
                            <p className={Style.side}></p>
                        </div>
                        <div>
                            <h2 className={`title-sm-primary`}>Other Links</h2>
                            <p className={`${Style.frtsectionfont} body-md-tertiary`}>Optimise your prep, boost your confidence with our essential resources</p>
                        </div>
                    </div>
                  {/* Second Section */}
                  <div className={Style.secondSection}>
                 <TabComponent onClick={handleClick} tabList={TabList}/>
                  </div>


                  {/* Third Section */}
                  <div className={Style.thirdSection}>
                    <div className={Style.thirdcontainer}>
                       
                   {data.length == 0 ? <p>Loading...</p> : (<>
                    {Click == 0 ?  (<>
                         {data?.filter((ele)=>{
                            return (
                                ele.tag == 'Resources'
                            )
                         })?.map((ele)=>{
                            return (
                                <>
                                 <div>
                                    <div className={Style.circleContianer}>
                                       {isDateLatest(ele.event_start) ? <div className={Style.circle}></div> : null}
                                    </div>
                                 <div className={Style.thirdbox__}>
                                  <p className={`body-md-tertiary`}><span className={`body-md-tertiary`}>{ele.event_end.slice(0,10)}</span> | {ele.title}</p>
                                   <Link href={ele.link} className={`body-sm-secondary ${Style.fnt}`} target='_blank'>Check Now</Link>
                                </div>
                                 </div>

                                 <div className={Style.thirdbox__}>
                                  <p className={`body-md-tertiary`}><span className={`body-md-tertiary`}>{ele.event_end.slice(0,10)}</span> | {ele.title}</p>
                                   <Link href={ele.link} className={`body-sm-secondary ${Style.fnt}`} target='_blank'>Check Now</Link>
                                </div>
                                </>
                            )
                         })}
                         </>)  :  (<>
                         {data?.filter((ele)=>{
                            return (
                                ele.tag == 'Essential Links'
                            )
                         })?.map((ele)=>{
                            return (
                                <>
                                <div>
                                <div className={Style.circleContianer}>
                                       {isDateLatest(ele.event_start) ? <div className={Style.circle}></div> : null}
                                    </div>
                                 <div className={Style.thirdbox__}>
                                  <p className={`body-md-tertiary`}><span className={`body-md-tertiary`}>{ele.event_end.slice(0,10)}</span> | {ele.title}</p>
                                   <Link href={ele.link} className={`body-sm-secondary ${Style.fnt}`} target='_blank'>Check Now</Link>
                                </div>
                                </div>
                                </>
                            )
                         })}
                         </>)}
                   </>)}





                        
                        
                    </div>
                  </div>
            </div>
        </section>
        </>
    )
}




export default OtherLink