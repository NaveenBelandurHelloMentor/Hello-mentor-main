'use client'

import React from 'react'
import Style from './page.module.css'
import AcccordingSvg from './Accordinsvg'
import {useState} from 'react'

interface AccordinDataType {
    id:number,
    title:string,
    OpenTitle:string,
}

const AccordinData:AccordinDataType[] = [
    {
        id:1,
        title:'What is NEET counselling, and why is it important?',
        OpenTitle:'random Text first',
    },
    {
        id:2,
        title:'How can Medical Mentor assist me in the NEET counselling process?',
        OpenTitle:'random Text Second',
    },
    {
        id:3,
        title:'Who are the counselling experts at Medical Mentor ?',
        OpenTitle:'random Text Third',
    },
    {
        id:4,
        title:'Can Medical Mentor help with both NEET UG and NEET PG counselling?',
        OpenTitle:'random Text Second',
    },
    {
        id:5,
        title:'How do I get started with Medical Mentor?',
        OpenTitle:'random Text Second',
    },
    
]

type t = number | null

const Accordin = () =>{
   const [selected,setSelected] = useState(null)

   const handleClick = (i:number) =>{
   if(selected == i){
    return setSelected(null)
   }
   setSelected(i)

   }

    return (
        <>
        <section className={Style.mainContainer}>
            <h2 className={`title-md-primary ${Style.acr}`}>May be, we already have solution!</h2>
            <div className={Style.accordingContainer}>
                <div>
              
                   {AccordinData?.map((data,i:number)=>{
                    return (
                        <>
                        <div className={Style.accordingcontainer__}>
                        <div className={Style.accordingInside}>
                            <div>
                       <p className={ `body-lg-tertiary ${Style.acrdTitle}`}>{data.title}</p>
                        </div>
                        <div>
                        <AcccordingSvg click={()=>handleClick(i)} select={selected == i} />
                        </div>
                        </div>
                        <div>
                        {selected == i ? <p className={Style.acrdTitle}>{data.OpenTitle}</p> : '' }  
                        </div>
                         <p className={Style.accordinLine}></p>
                         </div>
                        </>
                       
                    )
                   })}
                   </div>

               

            </div>

        </section>

        </>
    )
}





export default Accordin