"use client";
import React from "react";
import { useState, useEffect } from "react";
import CardSvg from "./ReferalSvg/card";
import Hellomentorsvg from "./ReferalSvg/hellomentor";
import SearchSvg from './ReferalSvg/searchsvg'
import style from "./page.module.css";
import FirstSvg from './ReferalSvg/FirstSvg'
import Lastmentrosvg from "../RegisterPage/RegisterSvg/lastmentor";

const RegisterPage = () => {
  const [countreferance, setreferance] = useState(1);
  const [openreferance, setOpenreferance] = useState(false);

  useEffect(() => {
    const intervalRegister = setInterval(() => {
      setreferance(countreferance + 1);
      // if (countreferance) {
      //   if (openreferance == false) {
      //     setOpenreferance(true);
      //   } else if (openreferance == true) {
      //     setOpenreferance(false);
      //   }
      // }
      setOpenreferance(!openreferance)
    }, 10000);
    return () => clearInterval(intervalRegister);
  }, [countreferance]);

  return (
    <>
      <section className={style.mainContainer}>
        <div className={style.container}>
          <div className={style.firstcard}>
          <div className={style.backgroundBoxone_}></div>
            {/* <div className={style.backgroundBoxtwo_}>
2
            </div>  */}
            <div className={style.backgroundBothree_}></div>
            <div className={style.backgroundBoxfour_}></div>
            <div className={style.backgroundBoxfive_}></div>
            <div className={style.firstbox_}>
              {openreferance == true ? <div>
                <div className={style.subcontainer}>
                    <CardSvg />
                    <div className={style.firstcontainer}>
                     <SearchSvg/> <p className={style.textreferal}>Choice Filling</p>
                    </div>
                     
                     <div className={style.firstsvgcontainer}>
                       <FirstSvg/> 
                     </div>
                     <div className={style.secondsvgcontainer}>
                       <FirstSvg/> 
                     </div>
                  </div>

              </div> :     <div className={style.subcontainer}>
                    <CardSvg />
                    <div className={style.firstcontainer}>
                     <SearchSvg/> <p className={style.textreferal}>Choice Filling</p>
                    </div>
                     
                     <div className={style.firstsvgcontainer}>
                       <FirstSvg/> 
                     </div>
                     <div className={style.secondsvgcontainer}>
                       <FirstSvg/> 
                     </div>
                  </div>}
 

              <div className={style.lastboxcontianer}>
                <h2 className={style.fifthtext}>Predict your college</h2>
                <p className={style.fifithtext_}>
                We are here to assist you in achieving your dream medical seat.
                </p>
              </div>

              <div className={style.fifithsvg}>
                <Lastmentrosvg/>
              </div>
            </div>
          </div>
          <div className={style.secondcard}>
            <div className={style.secondcardcontainer}>
              <div className={style.secondbox}>
                <div className={style.secondheading}>
                  <Hellomentorsvg />
                  <div className={style.fifthcontainer}>
                    <h2 className={`title-sm-primary`}>Log in to your account</h2>
                    <p className={`body-lg-tertiary`}>
                    Horem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className={style.optauthcontainer}>
                  <p className={style.opttextsecond_}>Register to proceed</p>
                  <div className={style.inputcontainer}>
                    <div className={style.inputicon}>
                    
                      <p className={style.inputtext_}>+91</p>
                    </div>
                    <input
                      type="text"
                      className={style.inputBox}
                      placeholder=""
                    />
                  </div>
                  <div>
                    <button className={style.btncontainer}>send otp</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;