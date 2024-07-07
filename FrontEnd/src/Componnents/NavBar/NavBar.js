import React, { useContext, useEffect, useState } from "react";
import "./NavBar.css";
import { Container, Row, Col, Navbar, NavDropdown, Nav } from "react-bootstrap";
import authContext from "../context/authContext";
import { FaSearch } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import Button from "../Button/Button";
import { Link, Navigate } from "react-router-dom";

export default function NavBar() {
  let authContextData = useContext(authContext);

  let [getAllNavBars, setGetAllNavBars] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:4000/v1/menus")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("چنین  دوره  ایی  وجود ندارد  ");
        }
      })
      .then((data) => {
        setGetAllNavBars(data.slice(0, 5));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <>
      <Container fluid>
          <main className="navBar ">
            <section className="navBar-wrap">

        <Row    className="row-wrapper">
            <Col  sm= {12}   md=  {12}    lg =  {6}>
              <nav className="navBar-wrap__right  navbar navbar-expand-lg ">
                <div className="navBar-right__logo">
                  <img src="/images/logo/Logo.png" alt="" />
                </div>
                {/* this  is  copy from  BS  */}
                <ul className="main-header__menu">
              <li className="main-header__item">
                <Button  to  = {"/"} className="main-header__link">
                  صفحه اصلی
                </Button>
              </li>

              {getAllNavBars.map((menu) => (
                <li className="main-header__item">
                  <Button to={`/category-info/${menu.href}`} className="main-header__link">
                    {menu.title}
                    {menu.submenus.length !== 0 && (
                      <>
                        <i className="fas fa-angle-down main-header__link-icon"></i>
                        <ul className="main-header__dropdown">
                          {menu.submenus.map((submenu) => (
                            <li className="main-header__dropdown-item">
                              <Button
                                to={`/course-info/${submenu.href}`}
                                className="main-header__dropdown-link"
                              >
                                {submenu.title}
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </Button>
                </li>
              ))}

       
            </ul>
                {/* end   */}
              </nav>
              </Col  >

              <Col    sm={12}  md  =  {12}  lg=  {6}> 
              <div className="navBar-wrap__left">
                <div className="navBar-left__searchBar">
                  <input
                    type="text"
                    className="navBar-left__searchBar--inp"
                    name=""
                    id=""
                    placeholder=" چیو میخوای یاد بگیری  ؟  "
                  />
                  <FaSearch className="navBar-left__searchBar--icon" />
                </div>
                <div className="navBar-left__changeTheme">
                  <CiLight />
                </div>

                {authContextData.isLogin ? (
                  <div className="navBar-left__panel">
                    <span className="navBar-left__panel--name">
                      {authContextData.userData.name}
                    </span>
                    <FaRegUser />
                  </div>
                ) : (
                  <Button to="/login" className="navBar-left__login">
                    ثبت نام
                  </Button>
                )}
              </div>
              </Col>
      
        </Row>
            </section>
          </main>
      </Container>
    </>
  );
}
