'use client'


import React from 'react'
import style from './page.module.css'
import InstituteTable from './Component/InstituteTable'
import ArrowSvg from './Component/InstituteSvg/arrowsvg'
import SearchSvg from './Component/InstituteSvg/searchsvg'
import {InstituteTypejson} from './Component/Institutesampledata'
import StateArrowsvg from './Component/InstituteSvg/statesvg'
import Inputsearchsvg from './Component/InstituteSvg/inputsearch'
import {StateList} from './Component/Institutesampledata'
import { useState } from 'react'

const Institute = () => {
    const [dropDown,setDropDown] = useState(false)
    const [state,stateList] = useState(false)
    const handleDropdown = () =>{
        if(dropDown == false){
            return setDropDown(true)
        }else if(dropDown == true){
            return setDropDown(false)
        }
    }

    const handleStateDropdown = () =>{
        if(state == false){
            return stateList(true)
        }else if(state == true){
            return stateList(false)
        }
    }
    return (
        <>
            <section className={style.mainContainer}>
                <div >
                    <h2 className={`title-lg-primary`}>Institutes</h2>
                    <p className={`body-lg-tertiary`}>Check References for Your Document</p>
                </div>
                <div className={style.seondcontainermain}>
                    <div className={style.secondcontainerBox_}>
                        <div className={style.secondcontainerbox__}>
                            <div className={style.secondhighlight}>
                            </div>
                            <div>
                                <p className={`title-sm-primary`}>Karnataka</p>
                                <p className={`body-md-tertiary`}>Lorem ipsum dolor sit amet consectetur. Tortor mauris arcu platea sagittis.</p>
                            </div>
                        </div>
                        <div className={style.stateInputcontainer}>
                            <p className={style.inputfnt_}  onClick={handleStateDropdown}>State</p>
                           <div onClick={handleStateDropdown}> <StateArrowsvg/></div>
                           {state == true ?     <div className={style.dropdowninstitute}>
                            <input className={style.inputinstitute_} placeholder='Search by keyword' type='text' />
                            <span className={style.inputsearch__}><Inputsearchsvg/></span>
                             <div>{StateList.map((data:any)=><p className={style.statefnt__}>{data.data}</p>)}</div> 
                           </div>: '' }
                       
                        </div>
                    </div>
                    <div className={style.institutioncontainer}>
                        <input type='text' className={style.inputcontainer} placeholder='Select Institute Type' onClick={handleDropdown}/>
                         <span className={style.institute_svg } onClick={handleDropdown}><ArrowSvg /></span>
                         {dropDown == true  ?  <div className={style.instituteDropdowncontianer}>
                       {InstituteTypejson.map((data)=><p key={Math.random()} className={style.dropdown_text}>{data.data}</p>)}
                       </div> : '' }
                    </div>
                </div>
                
                <div className={style.thirdheadingcontainer}>
           <div className={style.thirdheadbox_}>
            <div className={style.third_}>
                <p className={`body-md-secondary`}>Showing results</p>
                <p className={style.fnt_}>75/150 Colleges</p>
            </div>
            <div className={style.inputsearchcontainer}>
                <input type='search' className={style.inputbox_} placeholder='Search by keyword'/>
                <span className={style.inputsvgsearch_}><SearchSvg/></span> 
            </div>
           </div>
           
   <InstituteTable/>
            </div>

            </section>
        </>
    )
}



export default Institute