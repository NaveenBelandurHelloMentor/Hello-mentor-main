'use client'

import React from 'react'
import { useState } from 'react'
import Style from './page.module.css'
import { AcademyResponseData } from './AcademyResponse'
import { AcademyResponse } from './AcademyResponse'
import Image from 'next/image'
import CrownSvg from '../../WebinarSvg/webinar'
import TabComponent from '@/app/utils/components/TabComponent/TabComponent'
import DropDown from '@/app/utils/components/DropDown/Dropdown'
import ClockSvg from '../../WebinarSvg/clock'
import StatusSvg from '../../WebinarSvg/stauts'
import GmailSvg from '../../WebinarSvg/gmail'
import LinkidinSvg from '../../WebinarSvg/linkDin'
import ArrowSvg from '../../WebinarSvg/Arrow'
import { useEffect } from 'react'
import Link from 'next/link'


const AcademyMentor = () => {
    const [data, setData] = useState<AcademyResponse[]>(AcademyResponseData)
    const tabList = ['Upcoming sessions', 'Completed', 'Requested']
    const [intstate, setInital] = useState(false)

    const handleClick = () => {
        alert('sdkg;dsg')
    }

    const handletabClick = () => {
        console.log('handle Tab Link')
    }

    useEffect(() => {
        setInital(true)
    }, [])

    return (
        <>
            <section className={Style.mainContainer}>
                <div className={Style.firstSection}>
                    <h2 className={`title-primary`}>Academic Mentor</h2>
                    <p className={`body-lg-tertiary`}>Lorem ipsum dolor sit amet consectetur Mattis id donec tortor.</p>
                </div>

                {/* First Card*/}
                <div className={Style.firstcard}>
                    <div className={Style.firstcardbox}>
                        <div className={Style.firstcardimage}>
                            <Image src="/webinar.jpg" className={Style.im} width={227} height={130} alt='Acadmic Mentor Image' />
                            <div className={Style.firstIcons}>
                                <div className={Style.icn} >
                                    <Link href='#' target='_blank'> <GmailSvg /></Link>
                                    <Link href='#' target='_blank
                                   '>
                                        <LinkidinSvg /></Link>
                                </div>
                            </div>

                        </div>








                        <div className={Style.firstcardclm}>
                            <div >
                                <h2 className={`title-md-primary`}>Ms. Swathi</h2>
                                <p className={`body-md-secondary ${Style.crd}`}>128 sessions taken</p>
                            </div>
                            <div>
                                <h2 className={`title-sm-primary ${Style.cd_}`}>Unlock Success with Your Academic Mentor!</h2>
                                <p className={`body-md-tertiary ${Style.cont}`}>Connect with top medical college students today to gain crucial NEET exam insights, master your subjects, and accelerate your path to success.</p>
                            </div>
                            <div>
                                <button className={`button-primary-default`}>Request Session</button>
                            </div>
                        </div>
                        <div className={Style.firstCardcore}>
                            <div className={Style.svgcontainer}>
                                <CrownSvg />
                                <h2 className={`title-sm-primary`}>Core Attributes</h2>
                            </div>
                            <div className={intstate == false ? Style.coreattributes : Style.coretnt}>
                                <div className={Style.core} id={Style.firstText}>
                                    <div className={Style.fir} >
                                        <ArrowSvg /><p className={Style.corefnt}>Cost friendly</p>
                                    </div>
                                </div>
                                <div className={Style.core} id={Style.secondText}><ArrowSvg /><p className={Style.corefnt}>Proper mocktest</p></div>
                                <div className={Style.core} id={Style.thirdText}><ArrowSvg /><p className={Style.corefnt}>Guiding partner</p></div>
                                <div className={Style.core} id={Style.fourthText}><ArrowSvg /><p className={Style.corefnt}>Way for medical seat</p></div>

                            </div>
                        </div>
                    </div>
                </div>



                <div className={Style.thirdContainer}>
                    <div>
                        <TabComponent tabList={tabList} onClick={handletabClick} />
                    </div>
                    <div>
                        {/* <DropDown/> */}
                    </div>
                </div>

                <div className={Style.fourthContainer}>
                    <p className={`title-xs-primary`}>February (03)</p>
                    <div className={Style.frtcard}>
                        <div className={Style.Cardd}>
                            <p className={Style.topicFnt}>Topic - NEET 2024</p>
                            <div className={Style.fourthcontainermiddle}>

                                <div>

                                    <div className={Style.lt}>
                                        <div>

                                            <p className={Style.fouthfntlast}>16 Wed</p>
                                        </div>



                                        <div className={Style.lt_}>
                                            <div className={Style.lastt_}>

                                                <ClockSvg />
                                                <p className={Style.clock}>3:00 pm - 4:30 pm
                                                </p>

                                            </div>
                                            <div className={Style.lastt_}>

                                                <StatusSvg />
                                                <p className={Style.status}>Online
                                                </p>

                                            </div>

                                        </div>


                                    </div>


                                </div>

                                <div>
                                    <button className={`button-primary-default`}>Join now</button>
                                </div>





                            </div>

                        </div>
                        <div className={Style.Cardd}>
                            <p className={Style.topicFnt}>Topic - NEET 2024</p>
                            <div className={Style.fourthcontainermiddle}>

                                <div>

                                    <div className={Style.lt}>
                                        <div>

                                            <p className={Style.fouthfntlast}>16 Wed</p>
                                        </div>



                                        <div className={Style.lt_}>
                                            <div className={Style.lastt_}>

                                                <ClockSvg />
                                                <p className={Style.clock}>3:00 pm - 4:30 pm
                                                </p>

                                            </div>
                                            <div className={Style.lastt_}>

                                                <StatusSvg />
                                                <p className={Style.status}>Online
                                                </p>

                                            </div>

                                        </div>


                                    </div>


                                </div>

                                <div>
                                    <button className={`button-primary-default`}>Join now</button>
                                </div>





                            </div>

                        </div>
                    </div>


                </div>


            </section>
        </>
    )
}



export default AcademyMentor