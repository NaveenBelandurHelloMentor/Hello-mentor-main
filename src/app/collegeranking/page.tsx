'use client'


import React from 'react'
import style from './page.module.css'
import ArrowSvg from './CollegeRankingsvg/arrow'
import SearchSvg from './CollegeRankingsvg/search'
import TableComponent from './Component/table'
import {dropDownData} from './sampleData'
import { SampleDataJson } from './sampleData'
import {useState} from 'react'






const CollegeRanking = () =>{
    const [dropwdown,setDropdown] = useState(false)
    const handleDropdown = () =>{
      if(dropwdown == false){
        return setDropdown(true)
      }else if (dropwdown == true){
        return setDropdown(false)
      }
    }
    return (
        <>
        <section className={style.mainContainer}>
            <div className={style.firstheadingcontainer}>
              <h2 className={`title-lg-primary`}>College Ranking</h2>
              <p className={`body-lg-tertiary`}>Lorem ipsum dolor sit amet consectetur Mattis id donec tortor.</p>
            </div>
            <div className={style.secondheadingcontainer}>
                <div className={style.secondheading_}>
                    <div className={style.border_}>
                    </div>
                    <div>
                        <h2 className={`title-sm-primary`}>Fee Analysis</h2>
                        <p className={`body-md-tertiary`}>Lorem ipsum dolor sit amet consectetur. Tortor mauris arcu platea sagittis.</p>
                    </div>
                </div>
                <div className={style.secondinputbox_}>
                       <input onClick={handleDropdown} type='text' placeholder='Select your branch' className={style.inputContaier_ }/>
                       <span  onClick={handleDropdown} className={style.inputsvg__}><ArrowSvg/></span>
                        {dropwdown == true  ?  <div className={style.dropdowncontainer}>
                       {dropDownData.map((data)=><p key={Math.random()} className={style.insideData}>{data.data}</p>)}
                       </div> : '' }



                </div>
            </div>
            <div className={style.thirdheadingcontainer}>
           <div className={style.thirdheadbox_}>
            <div className={style.third_}>
                <p className={`body-md-secondary`}>Showing results</p>
                <p className={style.fnt_}>{SampleDataJson.length}/150 Colleges</p>
            </div>
            <div className={style.inputsearchcontainer}>
                <input type='search' className={style.inputbox_} placeholder='Search by keyword'/>
                <span className={style.inputsvgsearch_}><SearchSvg/></span> 
            </div>
           </div>
               <TableComponent/>
            </div>
        </section>
        </>
    )
}







export default CollegeRanking