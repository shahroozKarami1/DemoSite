import React from 'react'
import "./FooterItem.css"
import { Col } from 'react-bootstrap'
export default function FooterItem({
    tittle, children
}) {
    return (
        <>
            <Col lg="3">
                <section className='footerItem'>
                    <main className='footerItem-wrap'>
                        <h1 className='footerItem-title'>
                            {tittle}
                        </h1>
                        {children}

                    </main>
                </section>



            </Col>



        </>
    )
}
