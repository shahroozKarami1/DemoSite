import React from 'react'
import "./Landing.css"
import { Container, Row, Col } from "react-bootstrap"
import { CiPlay1 } from "react-icons/ci";
import Typewriter from 'typewriter-effect';
import LandingCounter from '../LandingCounter/LandingCounter';
export default function Landing() {
    return (

        <>
            <Container fluid   >

                <Row   >

                    <Col lg={5}   sm  =  {12 } className='landing-section__right'>

                        <div className='landing-section'>
                            <h1 className='landing-section__title'>
                                آکادمی  آموزشی برنامه  نویسی  سبز لرن
                                
                            </h1>
                            <h3 className='landing-section__subTitle'>
                                <Typewriter

                                    onInit={(typewriter) => {
                                        typewriter.typeString(
                                            "با آکادمی خصوصی سبزلرن  علم برنامه  نویسی  رو  با خیال راحت  یاد بگیر و  پیشرفت  کن ...   "

                                        )
                                            .start()
                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString("به سایت خود  خوش آمدید :)")
                                            .start()
                                            .pauseFor(1000)
                                            .deleteAll()

                                    }}
                                    options={
                                        {
                                            loop: true
                                        }
                                    }

                                >

                                </Typewriter>
                            </h3>
                            <div className='landing-section__btns'>
                                <button className='landing-section__btn--start  '>
                                    از این  مسیر ها شروع کن
                                </button>
                                <button className='landing-section__btn-course'>
                                    <CiPlay1 className='landing-section__btn-icon' />

                                   شروع <LandingCounter  counter={100}/>  دوره  رایگان 
                                </button>
                            </div>
                        </div>



                    </Col>

                    <Col lg={7}   sm  =  {12}>
                        <img src="images/Landing/landing-img.svg" alt="" className='img-landing' />
                    </Col>

                </Row>

                ‍‍
            </Container>



        </>
    )
}
