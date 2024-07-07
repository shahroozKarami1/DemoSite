import React, { useEffect, useState } from "react";
import "./LastCourses.css";
import HeaderSection from "../HeaderSection/HeaderSection";
import CourseBox from "../courseBox/CourseBox";
import { Row, Col, Container } from "react-bootstrap";
export default function LastCourses() {
  let [allDatas, setAllDdatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/v1/courses")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllDdatas(data);
      });
  }, []);

  return (
    <>
      <HeaderSection
        title={"آخرین  دوره  ها"}
        subTitle={"سکوی پرتاب شما به سمت  موفقیت  "}
        textBtn={"مشاهده همه دوره ها"}
      ></HeaderSection>
      <Container fluid>
        <Row
          style={{
            margin: "4.5rem  ",
          }}
        >
          {allDatas.map((item) => (
            <CourseBox col={3} data={{...item}}></CourseBox>
          ))}
        </Row>
      </Container>
    </>
  );
}
