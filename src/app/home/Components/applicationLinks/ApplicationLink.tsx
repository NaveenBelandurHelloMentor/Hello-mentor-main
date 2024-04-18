'use client'
import React, { useEffect } from 'react'
import Style from './Application.module.css'
import DropDown from './DropDown/Dropdown'
import AllandStateButton from '../../../utils/components/filters/AllandStateButton/AllandStateButton'
import { useGetApplicationQuery } from '../../../redux/features/AppLinks/Applinks'
import { useGetCouncelingQuery } from '../../../redux/features/CouncelingLink/CouncelingLink'
import { useState } from 'react'
import Link from 'next/link'


interface LinkData {
    id: string,
    title: string,
    link: string,
    isOpened: Boolean,
    event_start: string,
    event_end: string,
    createdAt: string,
    updatedAt: string
}

interface LinkDataCounceling {
    id: string,
    title: string,
    link: string,
    isOpened: boolean,
    event_start: string,
    event_end: string,
    createdAt: string,
    updatedAt: string
}


const ApplicationLinks = () => {


    const isDateLatest = (date: string) => {
        if (new Date().getTime() === new Date(date).getTime()) return true
        return (Math.abs(new Date().getTime() - new Date(date).getTime())) / (1000 * 60 * 60) < 24 ? true : false
    }





    /* applicaiton and counceling data hooks */
    const { isLoading: Apploading, isSuccess: AppSucess, data: ApplicationData } = useGetApplicationQuery()
    const { isLoading: CouncelingLoading, isSuccess: CouncelingSucess, data: CouncelingData } = useGetCouncelingQuery()





    const [tabListPast, setTablist] = useState<number>(0)


    // Filter DropDown
    const [showFilter, setFilter] = useState<Boolean>(false)
    const [showFilterCouceling, setFilterCounceling] = useState<Boolean>(false)





    // CouncelingLink State

    const [CouncelingPast, setCouncelingPast] = useState<number>(0)






    let n: Date | string | Number = new Date()
    n = `${n.getFullYear()}-${n.getMonth() + 1}-${n.getDate().toString().padStart(2, '0')}`
    const pastData = ApplicationData?.data.filter((ele) => {
        const date = new Date(ele.event_start);
        const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate().toString().padStart(2, '0')}`
        return formattedDate < n;
    });

    const pastDataCounceling = CouncelingData?.data.filter((ele) => {
        const date = new Date(ele.event_start);
        const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate().toString().padStart(2, '0')}`
        return formattedDate < n;
    });





    const [councelingData, setCouncelingData] = useState(pastDataCounceling)
    const [dataa, setData] = useState(pastData)








    // Counceling Data Switch







    const handleClick = () => {
        console.log('alert')
    }
    const handleClickApp = () => {
        setFilter(!showFilter)
    }
    const handleClickCounceling = () => {
        setFilterCounceling(!showFilterCouceling)
    }

    // AppFilter
    const AppPast = ApplicationData?.data.filter((ele) => {
        const date = new Date(ele.event_start);
        const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate().toString().padStart(2, '0')}`
        return formattedDate < n;
    })



    const AppPresent = ApplicationData?.data.filter((ele) => {
        const date = new Date(ele.event_start);
        const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate().toString().padStart(2, '0')}`
        return formattedDate >= n;
    })

    const HandleClickAppPast = () => {
        setTablist(0)
    }

    const HandleClickAppOngoing = () => {
        setTablist(1)
    }


    /* Counceling data */

    const CouncelingDataPast = CouncelingData?.data.filter((ele: any) => {
        const date = new Date(ele.event_start);
        const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate().toString().padStart(2, '0')}`
        return formattedDate < n;
    })

    const CouncelingDataOnGoing = CouncelingData?.data.filter((ele) => {
        const date = new Date(ele.event_start);
        const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate().toString().padStart(2, '0')}`
        return formattedDate >= n;
    })


    const HandleClickAppCouncelingPast = () => {
        setCouncelingPast(0)
    }


    const HandleClickCouncelingOngoing = () => {
        setCouncelingPast(1)
    }

    return (
        <>
            <section className={Style.mainContainer}>
                <div className={Style.box}>
                    <div className={Style.firstBox}>
                        <div className={Style.heading}>
                            <div className={Style.maintitle} >
                                <div>
                                    <p className={Style.mainTitleColor}></p>
                                </div>
                                <div>
                                    <h2 className={`title-sm-primary`}>Application Links</h2>
                                    <p className={`body-md-tertiary ${Style.fonttitle}`}>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                            <div className={Style.dropDownapp}>
                                <AllandStateButton onClick={handleClickApp}>ALL</AllandStateButton>
                                <div className={Style.dropDownAppLink} >
                                    {showFilter ? <div><DropDown /></div> : null}
                                </div>
                            </div>
                        </div>
                        <div className={Style.secondMain}>
                            <p className={tabListPast == 0 ? `${Style.secondfnt}` : `title-xs-primary`} onClick={HandleClickAppPast}>Past ({AppPast?.length}) </p>
                            <p className={tabListPast == 0 ? `title-xs-primary` : `${Style.secondfnt}`} onClick={HandleClickAppOngoing}>Ongoing ({AppPresent?.length}) </p>
                        </div>
                        <div className={Style.thirdMain}>
                            {tabListPast == 0 ?
                                (<>         {Apploading ? <p>Loading...</p> : AppPast?.length == 0 ? <p>No Data Found</p> : AppPast?.map((ele: any, i) => {
                                    return (
                                        <div>
                                            <div className={Style.main} key={i + 1}>

                                                {isDateLatest(ele.updatedAt) ? <div className={Style.applicationCircle} ></div> : null}
                                            </div>
                                            <div className={Style.backGroundTitle} key={i} >
                                                <p className='body-md-secondary' >{ele.title}</p>
                                                <Link className={Style.applicationLink} href={ele.link} target='_blank'>Check Now</Link>
                                            </div>
                                        </div>
                                    )
                                })
                                }
                                </>) : (<>{Apploading ? <p>Loading...</p> : AppPresent?.length == 0 ? <p>No data found ... </p> : AppPresent?.map((ele: any, i: any) => {
                                    return (
                                        <div>
                                            <div className={Style.main} key={i + 1}>
                                                {isDateLatest(ele.updatedAt) ? <div className={Style.applicationCircle} ></div> : null}
                                            </div>
                                            <div className={Style.backGroundTitle} key={i} >
                                                <p className='body-md-secondary' >{ele.title}</p>
                                                <Link className={Style.applicationLink} href={ele.link} target='_blank'>Check Now</Link>
                                            </div>
                                        </div>
                                    )
                                })}</>)
                            }
                        </div>
                    </div>
                    <div className={Style.firstBox}>
                        <div className={Style.heading}>
                            <div className={Style.maintitle} >
                                <div>
                                    <p className={Style.mainTitleColor}></p>
                                </div>
                                <div>
                                    <h2 className={`title-sm-primary`}>Counselling links</h2>
                                    <p className={`body-md-tertiary ${Style.fonttitle}`}>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                            <div className={Style.dropDownapp}>
                                <AllandStateButton onClick={handleClickCounceling}  >ALL</AllandStateButton>
                                <div className={Style.dropDownAppLink} >
                                    {showFilterCouceling ? <div><DropDown /></div> : null}
                                </div>
                            </div>
                        </div>
                        <div className={Style.secondMain}>
                            <p className={CouncelingPast == 0 ? `${Style.secondfnt}` : `title-xs-primary`} onClick={HandleClickAppCouncelingPast}>Past ({CouncelingDataPast?.length}) </p>
                            <p className={CouncelingPast == 0 ? `title-xs-primary` : `${Style.secondfnt}`} onClick={HandleClickCouncelingOngoing}>Ongoing ({CouncelingDataOnGoing?.length}) </p>
                        </div>
                        <div className={Style.thirdMain}>
                            {CouncelingPast == 0 ? (<>{CouncelingLoading ? <p>Loading...</p> : CouncelingDataPast?.length == 0 ? <p>No Data Found...</p> : CouncelingDataPast?.map((ele: any, i: any) => {
                                return (
                                    <div>
                                        <div className={Style.main} key={i + 1}>
                                            {isDateLatest(ele.updatedAt) ? <div className={Style.applicationCircle} ></div> : null}
                                        </div>
                                        <div className={Style.backGroundTitle} key={i} >
                                            <p className='body-md-secondary' >{ele.title}</p>
                                            <Link className={Style.applicationLink} href={ele.link} target='_blank'>Check Now</Link>
                                        </div>
                                    </div>
                                )
                            })
                            }
                            </>) : (<> {CouncelingLoading ? <p>Loading...</p> : CouncelingDataOnGoing?.length == 0 ? <p>No data Found...</p> : CouncelingDataOnGoing?.map((ele: any, i: any) => {
                                return (
                                    <div>

                                        <div className={Style.main} key={i + 1}>
                                            {isDateLatest(ele.updatedAt) ? <div className={Style.applicationCircle} ></div> : null}
                                        </div>
                                        <div className={Style.backGroundTitle} key={i} >
                                            <p className='body-md-secondary' >{ele.title}</p>
                                            <Link className={Style.applicationLink} href={ele.link} target='_blank'>Check Now</Link>
                                        </div>
                                    </div>
                                )
                            })}</>)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default ApplicationLinks