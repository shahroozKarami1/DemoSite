import React from 'react'
import "./ArticleSection.css"
import HeaderSection from '../HeaderSection/HeaderSection'
import { Container, Row } from 'react-bootstrap'
import ArticleBox from '../ArticleBox/ArticleBox'
export default function ArticleSection() {
    return (


        <>
            <Container style={{
                marginTop: "8rem  "
            }}>
                <HeaderSection title={"آخرین  مقالات "} subTitle={"مقالات  بروز  برنامه  نویسی  "} textBtn={"مشاهده  همه  مقالات "}></HeaderSection>
                <Row>
                    <ArticleBox></ArticleBox>
                    <ArticleBox></ArticleBox>
                    <ArticleBox></ArticleBox>
                    <ArticleBox></ArticleBox>
                </Row>
            </Container>

     

        </>
    )
}
