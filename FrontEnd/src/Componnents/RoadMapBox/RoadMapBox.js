import React from 'react'
import "./RoadMapBox.css"
import { Col } from 'react-bootstrap'

export default function RoadMapBox({ title, number, icon, backColor    ,  backImg }) {
    return (

        <>
            <Col lg={3}
            >

                <main className='road-map' style={{
                    backgroundColor: backColor   , 
                    backgroundImage   :  backImg 
                }}  >
                    <section className='road-map__wrap'
                    >
                        <div className='read-map__icon'>
                            {icon}
                        </div>

                        <h1 className='road-map__tittle'>
                            {title}
                        </h1>
                        <h3 className='road-map__subTitle '  >
                            {number} دوره

                        </h3>

                    </section>
                </main>


            </Col>
           


        </>
    )
}
