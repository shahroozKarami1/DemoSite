import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button  from  "../Button/Button"
import "./Topbar.css";

export default function Topbar() {
  let [allOfDataTopbar, setAllOfDataTopbar] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/v1/menus/topbar")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("love  js  for all the time  ");
        }
      })
      .then((data) => {
        setAllOfDataTopbar(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getRandomArray(baseArray, counter) {
    let shuffled = [...baseArray].sort(() => {
        return  0.5 - Math.random();
    });
    return shuffled.slice(0, counter);
  }

  return (
    <div className="top-bar">
      <div className="container-fluid">
        <div className="top-bar__content">
          <div className="top-bar__right">
            <ul className="top-bar__menu">
              {getRandomArray(allOfDataTopbar, 5).map((link  ,   index) => (
                <li className="top-bar__item"   key={index}>
                  <Button  to={link.href} className="top-bar__link">
                    {link.title}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div className="top-bar__left">
            <div className="top-bar__email">
              <a href="#" className="top-bar__email-text top-bar__link">
                sabzlearn@gmail.com
              </a>
              <i className="fas fa-envelope top-bar__email-icon"></i>
            </div>
            <div className="top-bar__phone">
              <a href="#" className="top-bar__phone-text top-bar__link">
                09921558293
              </a>
              <i className="fas fa-phone top-bar__phone-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
