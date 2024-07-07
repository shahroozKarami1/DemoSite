import React from 'react'
import "./NewCourses.css"
import HeaderSection from "../HeaderSection/HeaderSection"
import { Col, Row, Container } from "react-bootstrap"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import CourseBox from "../courseBox/CourseBox"
import 'swiper/css';

export default function NewCourses() {
    return (

        <>

            <Container style={{
                marginTop: "7rem "
            }}>
                <Row>
                    <HeaderSection title={"جدید ترین  دوره  ها "} subTitle={"یادگیری و  رشد  توسعه  قردی "} textBtn="" >
                    </HeaderSection>
                </Row>
                <Row style={{
                    marginTop: "2rem  "
                }}>

                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}

                        spaceBetween={10}
                        slidesPerView={4}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        <SwiperSlide>

                            <CourseBox isSwiper={true}></CourseBox>
                        </SwiperSlide>
                        <SwiperSlide>

                            <CourseBox isSwiper={true}></CourseBox>
                        </SwiperSlide>
                        <SwiperSlide>

                            <CourseBox isSwiper={true}></CourseBox>
                        </SwiperSlide>
                        <SwiperSlide>

                            <CourseBox isSwiper={true}></CourseBox>
                        </SwiperSlide>
                        <SwiperSlide>

                            <CourseBox isSwiper={true}></CourseBox>
                        </SwiperSlide>


                    </Swiper>
                </Row>

            </Container >



        </>
    )
}
