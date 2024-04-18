
import React from 'react'
import style from './page.module.css'
import AllandStateButton from './utils/components/filters/AllandStateButton/AllandStateButton'


const handleClick = () => {
  console.log('typed')
}

const MainTitle = () => {
  return (
    <>
      <div className={style.heading}>
        <div className={style.maintitle} >
          <div>
            <p className={style.mainTitleColor}></p>
          </div>
          <div>
            <h2 className={`title-sm-primary`}>Application Links</h2>
            <p className={`body-md-tertiary ${style.fonttitle}`}>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div >
          <AllandStateButton onClick={handleClick} >ALL</AllandStateButton>
        </div>
      </div>

    </>
  )
}





export default MainTitle