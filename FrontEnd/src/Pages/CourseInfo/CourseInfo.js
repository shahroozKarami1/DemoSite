import React, { useContext, useEffect, useState } from "react";
import "./CourseInfo.css";
import Footer from "../../Componnents/Footer/Footer";
import NavBar from "../../Componnents/NavBar/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import BreadCrumb from "../../Componnents/BreadCrumb/BreadCrumb";
import { GiGraduateCap } from "react-icons/gi";
import CourseInfoDetailsBox from "../../Componnents/CourseInfoDetailsBox/CourseInfoDetailsBox";
import { HiDocumentText } from "react-icons/hi2";
import ProgressBar from "react-bootstrap/ProgressBar";
import Accordion from "react-bootstrap/Accordion";
import { PiGraduationCapFill } from "react-icons/pi";
import { json, useFetcher, useParams } from "react-router-dom";
import CommentBox from "../../Componnents/CommentBox/CommentBox";
import HeaderSection from "../../Componnents/HeaderSection/HeaderSection";
import Button from "../../Componnents/Button/Button";
import { TfiCommentsSmiley } from "react-icons/tfi";
import CommentsTextArea from "../../Componnents/CommentsTextArea/CommentsTextArea";
import authContext from "../../Componnents/context/authContext";

export default function CourseInfo() {
  let { courseName } = useParams();
  let [coummentsCourse, setCoummentsCourse] = useState([]);
  let [sessionsCourse, setSessionsCourse] = useState([]);
  let [errManger, setErrManger] = useState(null);
  let [allDetails, setAllDetails] = useState({});

  let authContextData = useContext(authContext);
  // console.log(JSON.parse(localStorage.getItem("user")).token)
  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses/${courseName}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("love js  for all  the time  and  always ");
        }
      })
      .then((data) => {
        setAllDetails(data);

        setCoummentsCourse(data.comments);
        setSessionsCourse(data.sessions);
      })
      .catch((err) => {
        setErrManger(err.toString());
      });
  }, []);

  function submitComment(commentBody) {
    let getLocalStorage = JSON.parse(localStorage.getItem("user")).token;
    fetch("http://localhost:4000/v1/comments", {
      method: "POST",
      headers: {
        Authorization: `Bearer  ${getLocalStorage}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify (
        {
          body: commentBody,
          courseShortName: courseName,
        }
      )
    }).then(res  =>  {
        console.log(res)
    })
  }

  return (
    <>
      <NavBar></NavBar>
      {errManger != null ? (
        errManger
      ) : (
        <Container>
          <Row>
            <BreadCrumb
              links={[
                {
                  id: 1,
                  title: "خانه   ",
                  to: "",
                },
                {
                  id: 2,
                  title: "دوره ها",
                  to: "category-info/:backend",
                },
                // {
                //   id: 3, title: " دوره  php کاربردی ", to: "course-info/:phpkarbordi"
                // }
              ]}
            ></BreadCrumb>
          </Row>

          <div className="courseInfo-header">
            <Row>
              <Col lg={6}>
                <div className="courseInfo-header__right">
                  <h1 className="courseInfo-header__right--title">
                    {allDetails.name}
                  </h1>
                  <p className="courseInfo-header__right--desc">
                    {allDetails.description}
                  </p>

                  <div className="courseInfo--header__right--bottom">
                    {allDetails.isUserRegisteredToThisCourse === true ? (
                      <button className="courseInfo--header__right--bottomBtn">
                        <GiGraduateCap className="courseInfo--header__right--icon" />
                        شما دانشجوی دوره هستید
                      </button>
                    ) : (
                      <button className="courseInfo--header__right--bottomBtn">
                        ثبت نام در دوره
                      </button>
                    )}
                    <h3 className="courseInfo--header__right--bottomPrice">
                      {allDetails.price} تومان
                    </h3>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="courseInfo-header__left">
                  <video
                    poster="/images/courses/js_project.png"
                    src=""
                    controls
                    className="courseInfo-header__left--video"
                  ></video>
                </div>
              </Col>
            </Row>
          </div>

          <main className="courseInfo-details">
            <Row>
              <Col lg={8}>
                <div className="course">
                  <div className="course-boxes">
                    <Row>
                      <CourseInfoDetailsBox
                        isLeftSide={false}
                        title={"وضعیت  دوره"}
                        subTitle={
                          allDetails.isComplete === 1
                            ? "دوره  به  اتمام  رسیده است  "
                            : " دوره در حال برگذاری  میباشد  "
                        }
                        icon={"clock"}
                      ></CourseInfoDetailsBox>
                      <CourseInfoDetailsBox
                        isLeftSide={false}
                        title={"مدت  زمان  دوره"}
                        subTitle={"12 ساعت  "}
                        icon={"clock"}
                      ></CourseInfoDetailsBox>
                      <CourseInfoDetailsBox
                        isLeftSide={false}
                        title={"آخرین  بروزرسانی "}
                        subTitle={allDetails.createdAt}
                        icon={"calendar-days"}
                      ></CourseInfoDetailsBox>
                      <CourseInfoDetailsBox
                        isLeftSide={false}
                        title={" روش پشتیبانی"}
                        subTitle={allDetails.support}
                        icon={"user"}
                      ></CourseInfoDetailsBox>
                      <CourseInfoDetailsBox
                        isLeftSide={false}
                        title={" پیش نیاز دوره  "}
                        subTitle={"تسلط بر Php"}
                        icon={"clock"}
                      ></CourseInfoDetailsBox>
                      <CourseInfoDetailsBox
                        isLeftSide={false}
                        title={"نوع  مشاهده "}
                        subTitle={"به  صورت آنلاین  "}
                        icon={"file-video"}
                      ></CourseInfoDetailsBox>
                    </Row>
                  </div>

                  <section className="courseInfo-desciption">
                    <div className="courseInfo-desciption__header">
                      <HiDocumentText className="courseInfo-desciption__header--icon" />
                      <h1 className="courseInfo-desciption__header--title">
                        توضیحات
                      </h1>
                    </div>

                    <div className="courseInfo-desciption__body">
                      <span className="courseInfo-desciption__body--subTitle">
                        آموزش پایتون{" "}
                      </span>
                      <span className="courseInfo-desciption__body--parageraph">
                        گل سرسبد دوره های سبزلرن
                      </span>
                      <p className="courseInfo-desciption__body--parageraph">
                        در این دوره شما با ساختار و کدنویسی زبان پایتون آشنا
                        میشید و اونقدر این مسیر رو حرفه ای و کامل یاد می گیرید
                        که قطعا تصور شما از یادگیری برنامه نویسی عوض میشه.
                        باتوجه به نوع تدریس استاد و تمریناتی که در طول جلسات
                        ارائه میشه، به راحتی یاد می گیرید چطور از صفر، یک پروژه
                        رو با زبان پایتون بالا بیارید و توسعه بدید. با این آموزش
                        ها میتونید از حوزه های هوش مصنوعی و برنامه نویسی سمت
                        سرور گرفته تا برنامه نویسی وب و نرم افزارهای مختلف رو
                        شروع کنید و با راهنمایی استاد و کارشناسان پشتیبانی مطابق
                        با نیاز بازار کار حرکت کرده و رشد کنید
                      </p>
                    </div>
                    <img
                      className="courseInfo-desciption__body--img"
                      src="/images/courses/python.png"
                      alt=""
                    />
                    <p className="courseInfo-desciption__body--parageraph">
                      آموزش پایتون یکی از پرطرفدارترین دوره های سبزلرن هست که
                      مربوط به آموزش جامع زبان برنامه نویسی پایتون (Python) بوده
                      و با وجود صفر تا صد بودن واقعی، به مدت محدودی به صورت
                      کاملا رایگان ارائه شده است. به طور خلاصه این زبان از اول
                      به عنوان زبانی با ساختار کدنویسی ساده، کدهای کوتاه و سرعت
                      بسیار بالا در محاسبات پیچیده مشهور شد که می تونید خیلی
                      راحت اون رو یاد بگیرید و با تمرین کافی، پیچیده ترین برنامه
                      هارو با کمترین کدنویسی بسازید. همین مسئله باعث شده حتی
                      تازه کارها این زبان رو برای شروع انتخاب کنن. این زبان
                      کاربردهای خیلی زیادی داره و از هوش مصنوعی و علم داده گرفته
                      تا بازی های کامپیوتری و نرم افزارهای دسکتاپ در حال استفاده
                      از زبان پایتون هستن که هر روز هم جامعه توسعه دهندگان اون
                      بیشتر و بیشتر میشه. سبزلرن در کنار شماست تا بدون سردرگمی و
                      گشتن بین آموزش های مختلف، کامل ترین و تخصصی ترین آموزش
                      پایتون رو دریافت کنید و مزه ی یک آموزش اصولی و یادگیری
                      راحت رو بچشید و خیلی زود قدم های بعدی رو بردارید تا به
                      شغل‌ها و درآمدهای بالا برسید. در ادامه با ما همراه باشید
                      تا بهترین آموزش پایتون رایگان را به طور کامل به شما معرفی
                      کرده و تمام دغدغه های ذهنیتون رو قبل از ثبت نام در دوره
                      جواب بدیم.
                    </p>
                  </section>
                  <div className="courseInfo-sessions">
                    <div className="courseInfo-sessions__header">
                      <PiGraduationCapFill className="courseInfo-sessions__header-icon" />

                      <h1 className="courseInfo-sessions__header--title">
                        سر فصل ها
                      </h1>
                    </div>
                    <Accordion defaultActiveKey="0" className="accordion">
                      <Accordion.Item>
                        <Accordion.Header className="accordion-header">
                          جلسات دوره
                        </Accordion.Header>
                        {sessionsCourse.map((data, index) => (
                          <Accordion.Body className="accordion-body">
                            <div className="accordion-detailSessions       accordion-body__rightSide">
                              <span className="accordion-body__rightSide--number">
                                {index + 1}
                              </span>
                              <h1>{data.title} </h1>
                            </div>
                          </Accordion.Body>
                        ))}
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>

                {/* <div className="courseInfo-comments">
                  <div className="courseInfo-comments__header">
                    <div className="courseInfo-desciption__header--right">
                      <HiDocumentText className="courseInfo-desciption__header--icon" />
                      <h1 className="courseInfo-desciption__header--title">
                        نظرات
                      </h1>
                    </div>
                    <div className="courseInfo-desciption__header--left">
                      <Button
                        href="#"
                        className="courseInfo-desciption__header--rightBtn"
                      >
                        <span>ایجا نظرات جدید </span>
                        <TfiCommentsSmiley className="courseInfo-desciption__header--rightBtn_icon" />
                      </Button>
                    </div>
                  </div>

      
                    
    
 
                </div> */}

                {authContextData.isLogin != null ? (
                  <CommentsTextArea
                    commentsData={coummentsCourse}
                    submitComment={submitComment}
                  ></CommentsTextArea>
                ) : (
                  <div className="alert  alert-danger">
                    برای ثبت کامنت باید {<Button to="/login ">وارد</Button>}{" "}
                    شوید
                  </div>
                )}
              </Col>
              <Col lg={4}>
                <section className="courseInfo-details__leftSide">
                  <div className="courseInfo-details__leftSide--top">
                    <Row>
                      <Col lg={6}>
                        <CourseInfoDetailsBox
                          isLeftSide={true}
                          title={allDetails.courseStudentsCount}
                          subTitle={"دانشجو "}
                          icon={"user"}
                        ></CourseInfoDetailsBox>
                      </Col>
                      <Col lg={6}>
                        <CourseInfoDetailsBox
                          isLeftSide={true}
                          title={"34"}
                          subTitle={"رضایت  "}
                          icon={"star"}
                        ></CourseInfoDetailsBox>
                      </Col>
                    </Row>
                    <div className="courseInfo-details__leftSide--topProgess">
                      <div className="courseInfo-details__leftSide--topProgessHeader">
                        <h3>درصد تکمیل دوره </h3>
                        <h3>50%</h3>
                      </div>
                      <ProgressBar
                        variant="success"
                        striped
                        now={50}
                        className="leftSide-progress"
                      ></ProgressBar>
                    </div>
                  </div>

                  <div className="courseInfo-details__leftSide--teacher">
                    <img
                      src="/images/info/teacher.jfif"
                      className="courseInfo-details__leftSide--teacherImg"
                      alt=""
                    />
                    <div className="courseInfo-details__leftSide--teacherInfo">
                      <h1 className="courseInfo-details__leftSide--teacherInfo_title">
                        شهروز کرمی | مدرس دوره
                      </h1>
                      <h3 className="courseInfo-details__leftSide--teacherInfo_sub">
                        برنامه نویسی فرانت اند
                      </h3>

                      <button className="courseInfo-details__leftSide--teacherInfo_btn">
                        مشاهده پروفایل من
                      </button>
                    </div>
                  </div>

                  <div className="courseInfo-details__leftSide--link">
                    <h1 className="courseInfo-details__leftSide--linkTitle">
                      لینک کوتاه آموزش
                    </h1>
                    <div className="courseInfo-details__leftSide--url">
                      <a href="#">http://sabzlearn.ir/?p=4174</a>
                    </div>
                  </div>
                </section>
              </Col>
            </Row>
          </main>
        </Container>
      )}

      <Footer></Footer>
    </>
  );
}
