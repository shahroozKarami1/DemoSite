import React, { useState } from "react";
import "./courseBox.css";
import { Col } from "react-bootstrap";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import CircleSpinner from "../CircleSpinner/CircleSpinner";
import Button from "../Button/Button";

export default function CourseBox({ isSwiper, col, data }) {
  let [isShowImg, setIsShowImg] = useState(false);
  function loaderFunc() {
    setIsShowImg(true);
  }
  return (
    data && (
      <>
        <Col
          lg={col}
          style={{
            width: isSwiper && "100%",
            height: "100%",
          }}
        >
          <div class="course-box">
            <Button to={`/course-info/${data.shortName}`}>
              <img
                src= "/images/courses/jango.png"
                alt="Course img"
                class="course-box__img"
                onLoad={loaderFunc}
              />
            </Button>
            {!isShowImg && <CircleSpinner></CircleSpinner>}
            <div class="course-box__main">
              <Button
                to={`/course-info/${data.shortName}`}
                className="course-box__title"
              >
                {data.name}
              </Button>

              <div class="course-box__rating-teacher">
                <div class="course-box__teacher">
                  <FaChalkboardTeacher className="course-box__teacher-icon" />

                  <a href="#" class="course-box__teacher-link">
                    {data.creator}
                  </a>
                </div>
                <div class="course-box__rating">
                  <img
                    src="/images/svgs/star.svg"
                    alt="rating"
                    class="course-box__star"
                  />
                  <img
                    src="/images/svgs/star_fill.svg"
                    alt="rating"
                    class="course-box__star"
                  />
                  <img
                    src="/images/svgs/star_fill.svg"
                    alt="rating"
                    class="course-box__star"
                  />
                  <img
                    src="/images/svgs/star_fill.svg"
                    alt="rating"
                    class="course-box__star"
                  />
                  <img
                    src="/images/svgs/star_fill.svg"
                    alt="rating"
                    class="course-box__star"
                  />
                </div>
              </div>

              <div class="course-box__status">
                <div class="course-box__users">
                  <FaUser className=" course-box__users-icon" />

                  <span class="course-box__users-text">500</span>
                </div>
                <span class="course-box__price">
                  {data.price === 0 ? "رایگان" : data.price.toLocaleString()}
                </span>
              </div>
            </div>

            <div class="course-box__footer">
              <Button
                to={`/course-info/${data.shortName}`}
                className="course-box__footer-link"
              >
                مشاهده اطلاعات
                <FaArrowLeft className="course-box__footer-icon" />
              </Button>
            </div>
          </div>
        </Col>
      </>
    )
  );
}
