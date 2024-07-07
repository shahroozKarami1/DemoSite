import React, { useState } from "react";
import "./CommentBox.css";
import { RiArrowGoBackLine } from "react-icons/ri";

export default function CommentBox(props) {


  let  [saveData  ,  setSaveData] =   useState(props.data)
  return (
    <>
      <main className="commentBox">
        <section className="commentBox-wap">
          <div className="commentBox-header">
            <div className="commentBox-header__info">

              <div  className="commentBox-header__info--right">
              <img className="commentBox-header__info--img"  src="/images/info/teacher.jfif" />
              <div className="commentBox-header__info--details">
                <h3 className="commentBox-header__info--details--name">
                  {
                    saveData.creator.name
                  }   |   {
                    saveData.creator.role    ===  "ADMIN"  ? ("مدیر")    :  ("کاربر")
                  }
                </h3>
                <span className="commentBox-header__info--details--date">
                  {
                    saveData.createdAt
                  }
                </span>
              </div>

              </div>
            </div>

            <div className="commentBox-header__back">
              <RiArrowGoBackLine className="commentBox-header__back--icon" />
            </div>
          </div>
          <div className="commentBox-body">
            <p    className="commentBox-body__parageraph">
          {
            saveData.body
          }
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
