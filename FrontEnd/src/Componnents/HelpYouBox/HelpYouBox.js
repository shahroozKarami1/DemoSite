import React from 'react'
import "./HelpYouBox.css"
import { Col } from "react-bootstrap"
export default function HelpYouBox({ title, subTitle, children }) {
    return (


        <>
            <Col lg={6}>
                <section className='helpYouBox'>

                    <main className='helpYouBox-wrap'>
                        <div className='helpYouBox-right'>

                            {children}
                        </div>
                        <div className='helpYouBox-left'>
                            <h1 className='helpYouBox-left__title'> {title}</h1>
                            <h3 className='helpYouBox-left__subTitle'>
                                {
                                    subTitle
                                }
                            </h3>
                        </div>
                    </main>
                </section>
            </Col>



        </>
    )


}
