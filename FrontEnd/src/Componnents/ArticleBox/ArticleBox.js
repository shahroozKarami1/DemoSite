import React from 'react'
import "./ArticleBox.css"
import { CiUser } from "react-icons/ci";
import { FaArrowCircleLeft } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";

import { Col } from 'react-bootstrap'
export default function ArticleBox() {
    return (
        <>

            <Col lg="3">

                <section className='articleBox'>
                    <main className='articleBox-wrap'>
                        <div className='articleBox-header'>
                            <img src="images/blog/1.jpg" alt="" />
                        </div>
                        <div className='articleBox-body'>
                            <h1 className='articleBox-body__title'>آموزش Eval  در جاوا اسکریپت   </h1>
                            <p className='articleBox-body__desc'>
                                یکی از مهم‌ترین مباحث آموزشی که در دوره‌های آموزش جاو اسکریپت بسیار مورد توجه قرار می‌گیرد، توابع Arrow یا تابع پیکان است؛ به زبان ساده تابع Arrow در جاوا اسکریپت…

                            </p>
                            <div className='articleBox-body__details'>
                                <div className='articleBox-body__details--author'>

                                    <CiUser className='articleBox-body__details--authorIcon' />
                                    <span>شهروز  کرمی </span>

                                </div>


                                <div className='articleBox-body__details--date'>
                                    <BsCalendar2Date   className='articleBox-body__details--dateIcon'/>
                                    <span>1403/01/20</span>

                                </div>
                            </div>
                        </div>
                        <div className='articleBox-footer'>
                            <a href="#" className='articleBox-footer__link'>مطالعه  مقاله  </a>
                            <FaArrowCircleLeft className='articleBox-footer__icon' />

                        </div>

                    </main>
                </section>




            </Col>







        </>
    )
}
