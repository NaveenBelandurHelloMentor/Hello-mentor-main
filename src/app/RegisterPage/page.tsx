
"use client";
import React from "react";
import { useState, useEffect } from "react";
import CardSvg from "./RegisterSvg/card";
import Hellomentorsvg from "./RegisterSvg/hellomentor";
import Lastmentrosvg from './RegisterSvg/lastmentor'
import Image from "next/image";
import SideFrameSvg from './RegisterSvg/SideFrame'
import SideFrameRightSvg from './RegisterSvg/SideFrameRight'
import style from "./page.module.css";
import Link from 'next/link'



const RegisterPage = () => {
  const [countRegister, setCountRegister] = useState(1);
  const [openStateRegister, setOpenStateRegister] = useState(false);

  useEffect(() => {
    const intervalRegister = setInterval(() => {
      setCountRegister(countRegister + 1);
      setOpenStateRegister(!openStateRegister)
    }, 8500);
    return () => clearInterval(intervalRegister);
  }, [countRegister]);


  return (
    <>
      <section className={style.mainContainer}>
        <div className={style.container}>
          <div className={style.firstcard}>
          {/* <div className={style.backgroundBoxone_}>1</div>
            <div className={style.backgroundBothree_}>2</div>
            <div className={style.backgroundBoxfour_}>3</div>
            <div className={style.backgroundBoxfive_}>4</div>  */}
            <div className={style.firstbox_}>
              {openStateRegister == false ? (
                <>
                  <div className={style.subcontainer}>
                    <CardSvg />
                    <div className={style.FirstImageContainer}>
                      <Image src='/profile.png' width={142} height={142} alt='image' className={style.image_} />
                    </div>

                    <div className={style.secondImageContainer__}>
                      <div className={style.SecondImageContainer}>
                        <Image src='/profile.png' width={142} height={142} alt='image' className={style.image_second} />
                      </div>

                      <div className={style.thirdimagecontainer}>
                        <Image src='/profile.png' width={142} height={142} alt='image' className={style.image_third} />
                      </div>
                    </div>
                    <div className={style.fourthimagecontainer}>
                      <SideFrameSvg />
                    </div>
                    <div className={style.fifthimagecontainer}>
                      <SideFrameRightSvg />
                    </div>
                  </div>

                </>
              ) : ''}
              {openStateRegister == true ? (
                <>
                  <div className={style.subcontainer}>
                    <CardSvg />
                    <div className={style.FirstImageContainer}>
                      <Image src='/profile.png' width={142} height={142} alt='image' className={style.image_} />
                    </div>

                    <div className={style.secondImageContainer__}>
                      <div className={style.SecondImageContainer}>
                        <Image src='/profile.png' width={142} height={142} alt='image' className={style.image_second} />
                      </div>

                      <div className={style.thirdimagecontainer}>
                        <Image src='/profile.png' width={142} height={142} alt='image' className={style.image_third} />
                      </div>
                    </div>
                    <div className={style.fourthimagecontainer}>
                      <SideFrameSvg />
                    </div>
                    <div className={style.fifthimagecontainer}>
                      <SideFrameRightSvg />
                    </div>
                  </div>

                </>
              ) : ''}
              <div className={style.lastboxcontianer}>
                <h2 className={style.fifthtext}>Get Personalized Mentor</h2>
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
                  <p className={style.opttextsecond_}>Enter Phone number</p>
                  <div className={style.inputcontainer}>
                    <input
                      type="text"
                      className={style.inputBox}
                      placeholder=""
                    />
                  </div>
                  <div>
                    <button className={style.btncontainer}>Sendotp</button>
                  </div>
                  <div>
                   <p className={`body-md-secondary`}>Don’t have an account?<Link href='#' className={style.accountlink}> Create new</Link></p>
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