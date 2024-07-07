import React, { useEffect, useState } from "react";
import "./Category.css";
import NavBar from "../../Componnents/NavBar/NavBar";
import Footer from "../../Componnents/Footer/Footer";
import HeaderSectionForCat from "../../Componnents/HeaderSectionForCat/HeaderSectionForCat";
import SearchBarCategory from "../../Componnents/SearchBarCategory/SearchBarCategory";
import { Container, Row, Col } from "react-bootstrap";
import SortingBox from "../../Componnents/SortingBox/SortingBox";
import CourseBox from "../../Componnents/courseBox/CourseBox";
import { useParams } from "react-router-dom";
import  logicPagination  from "../../Componnents/Pagination/Paginnation"
export default function Category() {
  let [allData, setAllData] = useState([]);
  let { categoryName } = useParams();


  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses/category/${categoryName}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllData(data);
      });
  }, [categoryName]);

  logicPagination(3    ,  2)

  return (
    <>
      <NavBar></NavBar>
      <Container>
        <HeaderSectionForCat
            title={"فرانت  اند  "}
          courseNumber={"6  عنوان  آموزشی "}
        ></HeaderSectionForCat>
        <Row>
          <Col lg="3">
            <SearchBarCategory></SearchBarCategory>
          </Col>
          <Col lg="9">
            <SortingBox></SortingBox>
            <Row
              style={{
                marginTop: "2rem  ",
              }}
            >
              {allData.length ? (
                allData.map((data) => (
                  <CourseBox col={4} data={{ ...data }}></CourseBox>
                ))
              ) : (
                <div className="alert  alert-warning">
                  هیچ دوره ایی وجود نداره :(‌
                </div>
              )}
            </Row>
          </Col>
        </Row>


      </Container>
      <Footer></Footer>
    </>
  );
}
