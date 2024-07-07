import React from 'react'
import "./RoadMap.css"
import HeaderSection from "../HeaderSection/HeaderSection"
import { Container, Row, Col } from 'react-bootstrap'
import RoadMapBox from '../RoadMapBox/RoadMapBox'
import { TbBrandPython } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { IoExtensionPuzzle } from "react-icons/io5";

export default function RoadMap() {
    return (

        <>
            <Container>
                <Row style={{
                    // margin: "4rem  "
                }}>
                    <HeaderSection title={"نقشه  راه"} subTitle={" نقشه های راه برای شروع اصولی  یادگیری"} textBtn={""} ></HeaderSection>
                    <RoadMapBox backImg={"linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"} backColor={"#8EC5FC"} title={"فرانت  اند "} number={51} icon={<IoLogoJavascript></IoLogoJavascript>}></RoadMapBox>
                    <RoadMapBox backColor={"#52ACFF"} backImg={"linear-gradient(180deg, #52ACFF 25%, #FFE32C 100%)"} title={"پایتون"} number={2} icon={<TbBrandPython></TbBrandPython>}></RoadMapBox>
                    <RoadMapBox backColor={"#F4D03F"} backImg={"linear-gradient(132deg, #F4D03F 0%, #16A085 100%)"} title={" امنیت"} number={20} icon={<MdOutlineSecurity></MdOutlineSecurity>}></RoadMapBox>
                    <RoadMapBox backColor={"#FAD961"} backImg={'linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)'} backProp={""} title={"مهارت  های نرم   "} number={30} icon={<IoExtensionPuzzle></IoExtensionPuzzle>}></RoadMapBox>
                </Row>
            </Container >


        </>
    )
}


