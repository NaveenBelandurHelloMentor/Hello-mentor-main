import React from 'react'
import Style from './page.module.css'
import MedicalSvg from '../../MedicalSvg/MedicalSvg'
import SmallText from '../../MedicalSvg/SmallTextsvg'
import Arrow from '../../MedicalSvg/ArrowSvg'
import MedicalCorner from '../../MedicalSvg/MedicalCornerSvg'





const HandBook = () => {
    return (
        <>
            <section className={Style.mainContainer}>
                <div className={Style.box}>
                    <div className={Style.medicalCorner}>
                        <MedicalCorner />
                    </div>
                    <div className={Style.medicalCornerone}>
                        <MedicalCorner />
                    </div>
                    <div className={Style.mainHeader} >
                        <div>
                            <p className={Style.head}></p>
                        </div>
                        <div>
                            <h2 className={`title-sm-primary`}>Medical Guide Handbook</h2>
                            <p className={`body-md-tertiary ${Style.fonttitle}`}>Lorem ipsum dolor sit amet consectetur. Tortor mauris arcu platea sagittis.</p>
                        </div>
                    </div>
                    {/* Second Card*/}
                    <div className={Style.secondContainer}>
                        <div className={Style.secondCardmain}>
                            <div className={Style.card}>
                                <div className={Style.cardheading}>
                                    <h2 className={`title-sm-primary`}>Tracking</h2>
                                </div>
                                <div className={Style.cardMiddle}>
                                    <div className={Style.cardMiddlecontainer}>
                                        <div>
                                            <p className={`body-md-secondary`}>Estimated Delivery Date</p>
                                            <p className={`body-xs-tertiary ${Style.cardFont}`}>Saturday</p>

                                            <div className={Style.cardDates}>
                                                <p className={`title-sm-primary ${Style.dateCard}`}>18 Mar</p>
                                                <p className={`body-xs-secondary ${Style.dateCardY}`}>2023</p>
                                            </div>
                                            <p className={`body-md-tertiary`}>Your Order Is <span className={`body-md-secondary ${Style.order}`}> Out for Delivery</span></p>
                                            <div className={Style.MedicalSvg}>
                                                <MedicalSvg />
                                            </div>
                                        </div>
                                        <div className={Style.TimeCard}>
                                            <p className={`body-sm-secondary ${Style.timecard}`}>On Time</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={Style.Trackingcontainer}>
                                    <div className={Style.TrackOrderBox}>
                                        <div className={Style.TrackingAvatar}>
                                        </div>
                                        <div className={Style.trackk}>
                                            <p className={`body-xs-secondary ${Style.trackorderClr}`}>Tracking ID</p>
                                            <div className={Style.SmallText}>
                                                <p className={`body-xs-secondary`}>AMZBHAG5454795</p>
                                                <SmallText />
                                            </div>
                                        </div>
                                    </div>
                                    <p className={Style.line}></p>
                                    <div className={Style.tracklastcontainer}>
                                        <div className={Style.trackbox}>
                                            <p className={`body-xs-secondary`}>Tracking History</p>
                                            <Arrow />

                                        </div>
                                        <div className={Style.cr}>
                                            <p className={`body-xs-tertiary`}>Out for Delivery <span className={Style.clr}>| Location: New</span></p>
                                            <p className={`body-xs-tertiary`}>10 Mar, <span className={Style.clr}> 12:30 pm</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Third Card*/}
                            <div className={Style.thirdcontainer}>
                                <div className={Style.thirdcard}>
                                </div>
                                <div>
                                    <button className={`body-sm-secondary ${Style.btn}`}>Read Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default HandBook