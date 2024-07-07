import React from 'react'
import "./HelpYou.css"
import HeaderSection from "../HeaderSection/HeaderSection"
import { Container, Row } from 'react-bootstrap'
import HelpYouBox from '../HelpYouBox/HelpYouBox'
import { IoBookOutline } from "react-icons/io5";
import { BiSolidChat } from "react-icons/bi";
import { BsBarChartLine } from "react-icons/bs";
import { BiCalendarCheck } from "react-icons/bi";

export default function HelpYou() {
    return (

        <>
            <Container style={{
                marginTop: "10rem  "
            }}>
                <Row>

                    <HeaderSection textBtn={""} title={"ما چه کمکی میتونیم بهت  بکنیم..."} subTitle={"از شروع  مسیر کنارتیم  نمیذاریم آب تو دلت  تکون  بخوره  :)"}></HeaderSection>


                    <Container   >
                        <Row style={{
                            marginTop: "2rem"
                        }}>
                            <HelpYouBox color={"var(--blue-color)"} title={"تضمین کاملترین محتوا"} subTitle={"بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری."}>
                                <IoBookOutline className='helpYouFirstIcon' />
                            </HelpYouBox>
                            <HelpYouBox

                                title={"تضمین کاملترین محتوا"} subTitle={"بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری."}>
                                <BiSolidChat className='helpYouSecoundIcon' />

                            </HelpYouBox>
                            <HelpYouBox
                                title={"تضمین کاملترین محتوا"} subTitle={"بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری."}>
                                <BsBarChartLine className='helpYouThirdIcon' />

                            </HelpYouBox>
                            <HelpYouBox

                                title={"تضمین کاملترین محتوا"} subTitle={"بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری."}>
                                <BiCalendarCheck className='helpYouFourthYou' />

                            </HelpYouBox>
                        </Row>
                    </Container>

                </Row>
            </Container>


        </>
    )
}
