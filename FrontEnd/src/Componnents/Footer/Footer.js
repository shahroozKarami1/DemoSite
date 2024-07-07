import React from 'react'
import "./Footer.css"
import { Container, Row, Col } from "react-bootstrap"
import FooterItem from '../FooterItem/FooterItem'
import { FaHeart } from "react-icons/fa6";

export default function Footer() {
    return (
        <>
            <Container fluid>
                <section className='footer'>

                    <Row>
                        <FooterItem tittle={"درباره ما "}>
                            <p className='footerItem-text'>
                                سبزلرن یک اکادمی خصوصی آموزش برنامه نویسی هست که با هدف تحویل نیروی متخصص بر پایه تولید محتوای غیرسطحی فعالیت میکند


                            </p>
                        </FooterItem>
                        <FooterItem tittle={"دسترسی سریع"}>
                            <ul className='footer-list'>
                                <li className='footer-item'>
                                    <a href="" className='footer-item__link'>
                                        قوانین  و  مقررات
                                    </a>
                                </li>
                                <li className='footer-item'>
                                    <a href="" className='footer-item__link'>
                                        ارسال  تیکت
                                    </a>
                                </li>
                                <li className='footer-item'>
                                    <a href="" className='footer-item__link'>
                                        همه  دوره ها
                                    </a>
                                </li>
                            </ul>
                        </FooterItem>
                        <FooterItem tittle={"لینک  های مفید"}>
                            <ul className='footer-list'>
                                <li className='footer-item'>
                                    <a href="" className='footer-item__link'>
                                        آموزش جاوا اسکریپت
                                    </a>
                                </li>
                                <li className='footer-item'>
                                    <a href="" className='footer-item__link'>
                                        آموزش پایتون
                                    </a>
                                </li>
                                <li className='footer-item'>
                                    <a href="" className='footer-item__link'>
                                        آموزش HTML
                                    </a>
                                </li>
                                <li className='footer-item'>
                                    <a href="" className='footer-item__link'>
                                        آموزش CSS
                                    </a>
                                </li>
                            </ul>
                        </FooterItem>
                        <FooterItem tittle={" شبکه های اجتماعی "}>
                            <ul className='footer-list'>
                                <li className='footer-item'>
                                    <a href="" className='footer-item__link'>
                                        shahroozkarami1@
                                    </a>
                                </li>
                                <li className='footer-item'>
                                    <a href="" className='footer-item__link'>
                                        ishahroozam@
                                    </a>
                                </li>

                            </ul>
                        </FooterItem>
                    </Row>
                    <div className='footer-subFooter'>
                        <div className='footer-subFooter__right'>
                            ساخته شده  با <FaHeart    className='footer-subFooter__heart'/>  در سبزلرن
                        </div>
                        <div className='footer-subFooter__left'>
                            کلیه  حقوق مادی و معنوی سایت  برای سبزلرن محفوظ است  :)
                        </div>
                    </div>
                </section>
            </Container>





        </>


    )
}
