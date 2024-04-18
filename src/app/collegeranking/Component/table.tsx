import React from 'react'
import style from './page.module.css'
import {SampleDataJson} from '../sampleData'




const TableComponent = () =>{
    return (
        <>
        <table className={style.table_} >
            <thead >
                <tr className={style.tableheading}>
                <th className={style.tableheadfnt}>S.No</th>
                <th className={style.tableheadfnt}>Institute Name & Type</th>
                <th className={style.tableheadfnt}>State</th>
                <th className={style.tableheadfnt}>Year of Establishment</th>
                <th className={style.tableheadfnt}>Branch</th>
                <th className={style.tableheadfnt}>Seat</th>
                <th className={style.tableheadfnt}>MM Ranking</th>
                </tr>
            </thead>
            <tbody className={style.text}>
                {SampleDataJson.map((table)=>{
                    return (
                       <tr className={style.tablerow_} key={table.id}>
                        <td className={style.tablerowfnt_} >{table.id}</td>

                        <div className={style.tableinstiture}>
                        <p className={style.tablerowfnt_}>{table.instituteName}</p>
                        <p className={style.text_table}>MBBS</p>
                        </div>
                        <td className={style.tablerowfnt_}>{table.state}</td>
                        <td className={style.tablerowfnt_}>{table.yearsofestablishment}</td>
                        <td className={style.tablerowfnt_}>{table.branch}</td>
                        <td className={style.tablerowfnt_}>{table.seat}</td>
                        <td className={style.tablerowfnt_}>{table.mmranking}</td>
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


export default TableComponent