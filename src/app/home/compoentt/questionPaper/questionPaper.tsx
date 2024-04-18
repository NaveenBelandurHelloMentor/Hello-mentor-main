'use client'

import React from 'react'
import Style from './page.module.css'
import TabComponent from '@/app/utils/components/TabComponent/TabComponent'
import QuestionPaperSvg from '../../questionPapersvg/questionpaper'
import Years from './Years'
import {useState} from 'react'
import {jsPDF} from 'jspdf'




type Item = { title: string; body: string; pdf?: string; link?: string; };

interface YearsData {
    id:String,
    years:String,
    title:String,
    body:String,
    link:String
}




const QuestionPaper = () =>{
    const [years,setYears] = useState<YearsData[]>(Years)


    const handleClick = (e) =>{
      console.log(e)
    }


  
 
    
    const handleDownloadPDF = (link:String | any) : any =>{
        let pdf = new jsPDF()
        pdf.text(link,10,10)
        pdf.save('document.pdf');
        return pdf
    }

    return (
        <>
        <section className={Style.mainContainer}>
            <div className={Style.heading}>
                    <h2 className={`title-lg-primary`}>5 years Question paper</h2>
                    <p className={`body-lg-tertiary`}>Lorem ipsum dolor sit amet consectetur Mattis id donec tortor.</p>
            </div>

            <div className={Style.cardcontianer}>
             <div>
             <TabComponent onClick={handleClick} tabList={years.map(ele=>ele.years)}/>
             </div>


          <div className={Style.cardBox}>
                {Years.length == 0 ? <p>Loading</p> : Years?.map((year,i)=>{
                    return (
                        <>
                        <div className={Style.insideCard} key={i}>
                          <div className={Style.insidecontianer}>
                            <div>
                            <p className={`body-lg-secondary ${Style.fnt}`}>{year.title}</p>
                            <p className={`body-lg-secondary ${Style.fn}`}>{year.body}</p>
                            </div>


                            <div>
                              <button className={Style.btn} onClick={()=>{handleDownloadPDF(year.link)}}>Download
                                <QuestionPaperSvg/>
                                </button>
                            </div>
                          </div>
                            
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




export default QuestionPaper