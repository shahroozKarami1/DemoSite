import React from 'react'
import "./ArticleInfo.css"
import NavBar from "../../Componnents/NavBar/NavBar"
import BreadCrumb from "../../Componnents/BreadCrumb/BreadCrumb"
import Footer from "../../Componnents/Footer/Footer"
import { Col, Row, Container } from 'react-bootstrap'
import { CiUser } from "react-icons/ci";
import { BsCalendarDate } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import CommentsTextArea from '../../Componnents/CommentsTextArea/CommentsTextArea'
import { BsShare } from "react-icons/bs";

export default function ArticaleInfo() {
  return (


    <>
      <NavBar></NavBar>
      <Container>
        <Row>

          <BreadCrumb links={[
            {
              id: 0, title: "خانه   ", to: ""
            },
            {
              id: 1, title: "مقاله  ها", to: "category-info/:artcleTest"
            },
            // {
            //   id: 1, title: "حانه  ", to: "/category"
            // }  ,  



          ]}


          ></BreadCrumb>

        </Row>



        <Row>
          <Col lg={8}>


            <section className='article-rightSide'>
              <main className='article-rightSide__main'>
                <div className='article-rightSide__header'>
                  <h1 className="article-rightSide__header--title">
                    react  چیست  ؟
                  </h1>
                  <div className='article-rightSide__header--details'>
                    <div className='article-rightSide__header--detail' >
                      <CiUser className='article-rightSide__header--detailIcon' />
                      <span>میلاد بهرامی </span>

                    </div>
                    <div className='article-rightSide__header--detail' >
                      <BsCalendarDate className='article-rightSide__header--detailIcon' />
                      <span> 1403/01/13 </span>

                    </div>
                    <div className='article-rightSide__header--detail' >
                      <FaRegEye className='article-rightSide__header--detailIcon' />
                      <span> 414 </span>

                    </div>


                  </div>

                  <img src="/images/blog/1.jpg" className='article-rightSide__header--detail-poster' alt="" />

                </div>

                <div className='article-rightSide__body'>
                  <h1 className='article-rightSide__body--title'>
                    react چیست  ؟
                  </h1>
                  <p className='article-rightSide__body--parageraph'>
                    Bun js چیست و آیا می‌توان به عنوان جایگزینی برای نود جی اس روی آن حساب ویژه‌ای باز کرد؟ بان جی اس در اصل ابزار جدیدی شبیه Node.js و Deno برای اجرای کد جاوا اسکریپت است. Bun نوعی جعبه ابزار جامع جاوا اسکریپت ارائه می‌دهد که به عنوان یک فایل اجرایی به نام bun بسته‌بندی شده است.
                  </p>
                  <p className='article-rightSide__body--parageraph'>
                    این نوع محیط زمان اجرا از JavaScriptCore، موتوری که سافاری را تأمین می‌کند، استفاده کرده که معمولاً سریع شروع می‌شود و در مقایسه با V8 از حافظه کارآمدتر استفاده می‌کند. اگر در توسعه سمت سرور کار می‌کنید، یکی از مهم‌ترین مفاهیم آموزشی که بعد از آموزش جاوا اسکریپت و آموزش نود جی اس باید به سراغ آن بروید، یادگیری بان جی اس است.

                  </p>
                  <p className='article-rightSide__body--parageraph'>
                    در این مطلب از مجله سبز لرن در رابطه با این موضوع که Bun js چیست، تاریخچه آن به کجا بازمی‌گردد، چگونه عمل می‌کند، نحوه نصب و غیره اطلاعاتی جامع ارائه خواهیم داد.


                  </p>
                </div>


              </main>


              <div className='article-rightSide__suggestion'>

                <div className='article-rightSide__suggestion--header'>
                  <FaBookOpen className='article-rightSide__suggestion--header-icon' />
                  <h1 className='article-rightSide__suggestion--header-title'>
                    پیشنهاد  مطالعه
                  </h1>

                </div>
                <div className='article-rightSide__suggestion--boxes'>
                  <div className='article-rightSide__suggestion--box'>
                    <img src="/images/blog/3.jpg" alt="" />
                    <div className='article-rightSide__suggestion--box-details'>
                      <h1 className='article-rightSide__suggestion--box-detailsTitle'>آموزش Eval  در جاوااسکریپت </h1>
                      <div className='article-rightSide__suggestion--box-detailsDate'>
                        <BsCalendarDate className='article-rightSide__suggestion--box-detailsDate__icon'></BsCalendarDate>
                        <span>1403/12/12</span>
                      </div>
                    </div>


                  </div>
                  <div className='article-rightSide__suggestion--box'>
                    <img src="/images/blog/3.jpg" alt="" />
                    <div className='article-rightSide__suggestion--box-details'>
                      <h1 className='article-rightSide__suggestion--box-detailsTitle'>آموزش Eval  در جاوااسکریپت </h1>
                      <div className='article-rightSide__suggestion--box-detailsDate'>
                        <BsCalendarDate className='article-rightSide__suggestion--box-detailsDate__icon'></BsCalendarDate>
                        <span>1403/12/12</span>
                      </div>
                    </div>


                  </div>
                  <div className='article-rightSide__suggestion--box'>
                    <img src="/images/blog/3.jpg" alt="" />
                    <div className='article-rightSide__suggestion--box-details'>
                      <h1 className='article-rightSide__suggestion--box-detailsTitle'>آموزش Eval  در جاوااسکریپت </h1>
                      <div className='article-rightSide__suggestion--box-detailsDate'>
                        <BsCalendarDate className='article-rightSide__suggestion--box-detailsDate__icon'></BsCalendarDate>
                        <span>1403/12/12</span>
                      </div>
                    </div>


                  </div>
                  <div className='article-rightSide__suggestion--box'>
                    <img src="/images/blog/3.jpg" alt="" />
                    <div className='article-rightSide__suggestion--box-details'>
                      <h1 className='article-rightSide__suggestion--box-detailsTitle'>آموزش Eval  در جاوااسکریپت </h1>
                      <div className='article-rightSide__suggestion--box-detailsDate'>
                        <BsCalendarDate className='article-rightSide__suggestion--box-detailsDate__icon'></BsCalendarDate>
                        <span>1403/12/12</span>
                      </div>
                    </div>


                  </div>


                </div>



              </div>


              <div className='article-rightSide__suggestion--comments'>
                <CommentsTextArea></CommentsTextArea>
              </div>
            </section>



          </Col>
          <Col lg={4}>

            <>
              <section className='article-leftSide'>

                <main className='article-leftSide-wrap'>
                  <div className='article-leftSide__shareBox'>
                    <div className='article-leftSide__shareBox--header'>
                      <BsShare className='article-leftSide__shareBox--headerIcon' />
                      <span>اشتراک  گداری مطلب </span>

                    </div>

                    <div className='article-details__leftSide--link'>
                    
                      <div className='article-details__leftSide--url'>
                        <a href="#"  >http://sabzlearn.ir/?p=4174</a>
                      </div>
                    </div>

                  </div>

                </main>


              </section>






            </>



          </Col>
        </Row>
      </Container>


      <Footer></Footer>






    </>
  )
}
