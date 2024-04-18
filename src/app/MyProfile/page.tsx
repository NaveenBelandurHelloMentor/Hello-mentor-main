'use client'

import React from 'react'
import ProfileSvg from '../utils/svgs/components/Profilesvg/profile'
import style from './page.module.css'
import {useState} from 'react'

const Profile = () =>{
   const [loader,setLoader] = useState(0)
    
   const handleClick = () =>{
      if(loader < 100){
         setLoader(loader + 25)
      }
   }
   
 

    return (
        <>
        <section className={style.mainContainer}>
            <h2 className={`title-md-primary`}>My Profile</h2>
            <p className={`body-md-tertiary`}>Your NEET UG conquest starts here with your personalised Medical Mentor.</p>

            <div className={style.firstcontainer}>
                <div className={style.profilecard}>
                    <div className={style.profilephotocontainer}>
                        <div className={style.profile}>
                            
                        </div>
                        <div>
                            <p className={`body-lg-secondary ${style.fntt}`}>Arjun R K</p>
                            <p className={`body-md-tertiary ${style.fntclr}`}>Arjun3434@gmail.com</p>
                            <p className={`body-md-tertiary ${style.fntclr}`}>+91 99999 55555</p>
                        </div>
                    </div>
                    <div className={style.progress}>
                     <p className={`body-md-secondary`}>Your profile is 50% complete</p>
                     <p className={`body-md-tertiary ${style.fnttt}` }>Lorem ipsum dolor sit amet consectetur.</p>
                     <div className={style.loader}>
                       <div className={style.loaderContainer}>
                         <p className={style.loaderss} style={{width:loader*2}}></p>
                       </div>
                        <p className={`body-md-secondary`}>{loader < 100 ? loader : ''}%</p>
                     </div>
                    </div>
                    <button onClick={handleClick}>Click</button>
                   
                </div>
                    {/* Second Container */}
                    <div className={style.secondmain}>
                    <div className={style.secondContainer}>
                   <div className={style.secondheading}>
                    <p className={`body-sm-secondary ${style.fnt}` }>Personal details</p>
                    <ProfileSvg/>
                   </div>
                   <div className={style.secondmiddle}>
                    <div className={style.seconbox}>
                     <div>
                        <p className={`body-md-tertiary ${style.fntmain}`}>Date of Birth</p>
                        <p className={`body-md-secondary`}>11 Nov 1111</p>
                     </div>
                     <div>
                     <p className={`body-md-tertiary ${style.fntmain}`}>Gender</p>
                        <p className={`body-md-secondary`}>Female</p>
                     </div>
                     
                         
                    </div>
                    <div className={style.seconbox}>
                     <div>
                        <p className={`body-md-tertiary ${style.fntmain}`}>Parent Name</p>
                        <p className={`body-md-secondary`}>Arjun Sachadev</p>
                     </div>
                     <div>
                        <p className={`body-md-tertiary ${style.fntmain}`}>Parent Contact</p>
                        <p className={`body-md-secondary`}>+91 33333</p>
                     </div>
                     
                         
                    </div>
                    <div className={style.seconbox}>
                     <div>
                        <p className={`body-md-tertiary ${style.fntmain}`}>Parent Email</p>
                        <p className={`body-md-secondary`}>Father@gmail.com
                        </p>
                     </div>
                     <div>
                     <p className={`body-md-tertiary ${style.fntmain}`}>Gender</p>
                        <p className={`body-md-secondary`}>Female</p>
                     </div>
                     
                         
                    </div>
                    <div className={style.seconbox}>
                     <div>
                        <p className={`body-md-tertiary ${style.fntmain}`}>Date of Birth</p>
                        <p className={`body-md-secondary`}>11 Nov 1111</p>
                     </div>
                    </div>

                   
                   </div>

              
              
                </div>
                <div className={style.thirdcontianer}>
                <div className={style.secondheading}>
                    <p className={`body-sm-secondary ${style.fnt}` }>Academic details</p>
                    <ProfileSvg/>
                   </div>
                   <div className={style.thirdbox}>
                   <div className={style.seconbox}>
                     <div>
                        <p className={`body-md-tertiary ${style.fntmain}`}>Qualification/ Class</p>
                        <p className={`body-md-secondary`}>PUC</p>
                     </div>
                     <div>
                     <p className={`body-md-tertiary ${style.fntmain}`}>School/ College name</p>
                        <p className={`body-md-secondary`}>College name, City</p>
                     </div>
                     
                         
                    </div>
                    <div className={style.seconbox}>
                     <div>
                        <p className={`body-md-tertiary ${style.fntmain}`}>Neet 2023 Score</p>
                        <p className={`body-md-secondary ${style.fntc}`}>Not added</p>
                     </div>
                     <div>
                     <p className={`body-md-tertiary ${style.fntmain}`}>All India Rank</p>
                        <p className={`body-md-secondary ${style.fntc}`}>Not added</p>
                     </div>
                     
                         
                    </div>

                   </div>
                </div>

                <div className={style.fourth}>
                <div className={style.secondheading}>
                    <p className={`body-sm-secondary ${style.fnt}` }>Category details</p>
                    <ProfileSvg/>
                   </div>
                   <div className={style.fourthcontainer}>
                   <div className={style.seconbox}>
                     <div>
                        <p className={`body-md-tertiary ${style.fntmain}`}>Quota</p>
                        <p className={`body-md-secondary `}>Quota</p>
                     </div>
                     <div>
                     <p className={`body-md-tertiary ${style.fntmain}`}>Category</p>
                        <p className={`body-md-secondary `}>Category</p>
                     </div>
                     
                         
                    </div>
                    <div className={style.seconbox}>
                     <div>
                        <p className={`body-md-tertiary ${style.fntmain}`}>Sub Category</p>
                        <p className={`body-md-secondary `}>Sub Category</p>
                     </div>                     
                         
                    </div>

                   </div>

                </div>
              
                </div>
               
                 

            </div>
        </section>

        </>
    )
}





export default Profile