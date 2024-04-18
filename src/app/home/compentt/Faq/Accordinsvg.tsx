import React from 'react'


const AcccordingSvg = (props: any) => {
    return (
        <>
            <div onClick={props.click} style={{cursor:'pointer'}}>
                {props.select ==  false ?  <>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 5V19" stroke="#6D6D6D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5 12H19" stroke="#6D6D6D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
                </> : '-'}
          

            </div>
        </>
    )
}






export default AcccordingSvg