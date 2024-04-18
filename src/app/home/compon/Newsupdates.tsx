'use client'

import React from 'react'
import Style from './page.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { NewUpdateResponseData } from './NewUpdateResponseData'
import { NewUpdateResponse } from './NewUpdateResponseData'
import { CommunityResponseData } from './NewUpdateResponseData'
import { CommunityResponse } from './NewUpdateResponseData'
import Searchsvg from './SearchSvg/Searchsvg'
import Whatapp from './SearchSvg/Whatsapp'
import Telegram from './SearchSvg/Telegram'
import Arrow from '../MedicalSvg/ArrowSvg'
import AllandStateButton from '@/app/utils/components/filters/AllandStateButton/AllandStateButton'







const NewsAndUpdates = () => {
    const [data, setData] = useState<NewUpdateResponse[]>(NewUpdateResponseData)
    const [community, setCommunity] = useState<CommunityResponse[]>(CommunityResponseData)
 


  const HandleSearch = (e:any) =>{
   const val = e.target.value
   const filteredValues = community.filter(
    (item) =>
     item.channel_name.toLowerCase().indexOf(val.toLowerCase()) !== -1
  );
  setCommunity(filteredValues)
  }

  function kConverter(num:number) {
    return num <= 999 ? num : (0.1 * Math.floor(num / 100)).toFixed(1).replace('.0','') + 'k'
}


const handlclick = () =>{
    alert('clicked')
}


    return (
        <>
            <section className={Style.mainContainer}>
                <div className={Style.mainBox}>
                    <div className={Style.firstBox}>
                        <div className={Style.firstBoxelement}>
                            <div className={Style.firstbox}>
                                <p className={Style.line}></p>
                                <div>
                                    <h2 className={`title-sm-primary`}>News & Updates</h2>
                                    <p className={`body-md-tertiary`}>Don't miss a beat! Your one-stop shop for all things NEET UG news and updates.</p>
                                </div>
                            </div>
                            <div>
                          <AllandStateButton  children='All' onClick={handlclick}/>
                            </div>
                        </div>
                        {/* This is the Second Box */}
                        <div className={Style.secondbox__}>
                            {data?.map((data, i) => {
                                return (
                                    <>
                                        <div className={Style.secondContianer} key={i}>
                                        
                                            <p className={`body-md-tertiary ${Style.fnt}`}>{data.title}</p>
                                            <Link href={data.link} className={Style.secondlink} target='_blank'>Click Here</Link>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div className={Style.secondBox}>
                        <div className={Style.secondboxcontainer}>
                            <p className={Style.line}></p>
                            <div >
                                <h2 className={`title-sm-primary`}>News & Updates</h2>
                                <p className={`body-md-tertiary`}>Where support meets success..</p>
                            </div>
                        </div>

                        <div className={Style.secondboxsearch}>
                            <Searchsvg />  <input type='search'  onChange={HandleSearch}  className={Style.searchbar} placeholder='Search by keyword' />
                        </div>
                        <div className={Style.secondContainerlast}>
                            {community && community?.map((community, i) => {
                                return (
                                    <div className={Style.seconeContainerfirst__} key={i}>
                                        <div className={Style.secondboxmain__}>
                                            <div>
                                                <p className={`title-xs-primary`}>{community.channel_name}</p>
                                                <div className={Style.secd} >
                                                    <Arrow />
                                                    <p className={Style.fnttt}>{kConverter(community.subcriber_count)}</p>
                                                </div>
                                                <div className={Style.avatrcontianer}>
                                                    <p className={Style.avatar}></p>
                                                    <p className={Style.avatar}></p>
                                                    <p className={Style.avatar}></p>
                                                    <p className={Style.avatar}></p>
                                                    <p className={Style.avatar}></p>
                                                    <p className={Style.avatar}></p>
                                                </div>
                                            </div>
                                            <div className={Style.iconcontianer}>
                                                <div >
                                                    <Whatapp href={community.whatsapp_link} />
                                                </div>
                                                <div >
                                                    <Telegram href={community.telegram_link} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}





export default NewsAndUpdates