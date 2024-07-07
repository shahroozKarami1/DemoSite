import React from 'react'
import "./CourseInfoDetailsBox.css"
import { Col } from "react-bootstrap"
export default function CourseInfoDetailsBox({ icon, title, subTitle, isLeftSide }) {
    return (


        <>

            <Col lg={4} style={{
                width: isLeftSide ? ("100%") : (null)  , 
              
                
            }}>

                <div class="course-boxes__box"   style={ {
                      backgroundColor  :   isLeftSide ?  ("rgb(51 60 76")  : null
                }}   >
                    <div class="course-boxes__box-right">
                        <i class={`course-boxes__box-right-icon  fa-regular fa-${icon}`}></i>
                    </div>
                    <div class="course-boxes__box-left">
                        <span class="course-boxes__box-left-title">{title}</span>
                        <span class="course-boxes__box-left--subtitle">{subTitle}</span>
                    </div>
                </div>



            </Col>






        </>
    )
}
