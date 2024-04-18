"use client";

import React from "react";
import style from "./page.module.css";
import CardSvg from "./LoginSvg/cardsvg";
import ArrowSvg from "./LoginSvg/Arrowsvg";
import ScrollFinalSvg from './LoginSvg/scroll';
import Scrollfinallist from "./LoginSvg/scrollfinallst";
import Hellomentorsvg from './LoginSvg/hellomentorsvg'
import Lastmentrosvg from "../RegisterPage/RegisterSvg/lastmentor";
import { useState } from "react";
import { useEffect } from "react";

const LoginOTP = () => {
  const [count, setCount] = useState(0);
  const [openState, setOpenState] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
      setOpenState(!openState)
    }, 10000);
    return () => clearInterval(interval);
  }, [count]);




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
              {openState == true ? (
                <div className={style.subcontainer}>
                  <CardSvg />
                  <div className={style.boxcontainerparent}>
                    <div className={style.boxcontainer}>
                      <div className={style.arrowfill}>
                        <ArrowSvg />
                      </div>
                    </div>
                    <p className={style.text}>Choice filling</p>
                  </div>
                  <div className={style.scrollcontainer}>
                    <ScrollFinalSvg />
                    <ScrollFinalSvg />
                  </div>
                  <div className={style.scrollfinal}>
                    <Scrollfinallist />
                    <ScrollFinalSvg />
                    <ScrollFinalSvg />
                  </div>
                </div>
              ) : (
                <div>
                  <div className={style.subcontainer}>
                    <CardSvg />
                    <div className={style.boxcontainerparent}>
                      <div className={style.boxcontainer}>
                        <div className={style.arrowfill}>
                          <ArrowSvg />
                        </div>
                      </div>
                      <p className={style.text}>Choice filling</p>
                    </div>
                    <div className={style.scrollcontainer}>
                      <ScrollFinalSvg />
                      <ScrollFinalSvg />
                    </div>
                    <div className={style.scrollfinal}>
                      <Scrollfinallist />
                      <ScrollFinalSvg />
                      <ScrollFinalSvg />
                    </div>
                  </div>
                </div>
              )}
              <div className={style.lastboxcontianer}>
                <h2 className={style.fifthtext}>Choose your College</h2>
                <p className={style.fifithtext_}>
                  We are here to assist you in achieving your dream medical seat.
                </p>
              </div>
              <div className={style.fifithsvg}>
                <Lastmentrosvg />
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
                  <p className={style.opttextsecond_}>OTP Authentication</p>
                  <div className={style.optmain}>
                    <input className={style.opttext_} maxLength={1} />
                    <input className={style.opttext_} maxLength={1} />
                    <input className={style.opttext_} maxLength={1} />
                    <input className={style.opttext_} maxLength={1} />
                  </div>
                  <div>
                    <button className={style.btncontainer} >Submit</button>
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

export default LoginOTP;
