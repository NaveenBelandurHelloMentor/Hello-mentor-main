import React from 'react'
import style from './page.module.css'
import {InstituteSampleData} from './Institutesampledata'
import InstituteSvg from './InstituteSvg/institutesvg'




const InstituteTable = () =>{
    return (
        <>
        <table className={style.table_} >
            <thead >
                <tr className={style.tableheading}>
                <th className={style.tableheadfnt}>S.No</th>
                <th className={style.tableheadfnt}>Institute Name & Type</th>
                <th className={style.tableheadfnt}>Counselling & Authority</th>
                <th className={style.tableheadfnt}>Beds Countt</th>
                <th className={style.tableheadfnt}>Reosurces</th>
                </tr>
            </thead>
            <tbody className={style.text}>
                {InstituteSampleData.map((table)=>{
                    return (
                       <tr className={style.tablerow_} key={table.slno}>
                        <td className={style.tablerowfnt_} >{table.slno}</td>

                        <div className={style.tableinstiture}>
                        <p className={style.tablerowfnt_}>{table.instituteName}</p>
                        <p className={style.text_table}>Authority</p>
                        </div>
                        <td className={style.tablerowfnt_}>{table.counselling}</td>
                        <td className={style.tablerowfnt_}>{table.bedsCount}</td>
                


                        <div  className={style.tableinstiture}>
                          <div className={style.tableinstitutecon}>
                          <p className={style.institutefnt_}><a className={style.link_} href={table.institutionlink} target='_blank'>institutionlink</a></p>
                         <a href={table.institutionlink}><InstituteSvg/></a>
                          </div>
                          <div className={style.tableinstitutecon}>
                          <p className={style.institutefnt_}><a className={style.link_} href={table.counsellinglink} target='_blank'>Counselling link</a></p>
                          <a className={style.link_} href={table.counsellinglink} target='_blank'><InstituteSvg/></a>
                          </div>
                          <div className={style.tableinstitutecon}>
                          <p className={style.institutefnt_}><a className={style.link_} href={table.brochurelink} target='_blank'>Brochure link</a></p>
                          <a href={table.brochurelink} target='_blank' className={style.link_}><InstituteSvg/></a>
                          </div>
                        </div>
                       </tr>
                    )
                })}
            </tbody>
        </table>
        <div className={style.paginationcontainer}>
            <div className={style.paginationbox_}>
                <p className={style.paginationfnt}>10 per page</p>
            </div>
            <div className={style.paginationbox_}>
                <p className={style.paginationfnt}>1-10 of 44</p>
            </div>
        </div>
        </>

    )
}


export default InstituteTable