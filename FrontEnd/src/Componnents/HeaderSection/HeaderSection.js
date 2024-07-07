import React from "react";
import "./HeaderSection.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Container, Row } from "react-bootstrap";
export default function HeaderSection({ title, subTitle, textBtn     ,   className}) {
  return (
    <>
      <Container    className={className}>
        <Row>
          <main className="headerSection">
            <section className="headerSection-wrap">
              <div className="headerSection-right">
                <h1 className="headerSection-right__title"> {title}</h1>
                <h3 className="headerSection-right__subTitle">{subTitle}</h3>
              </div>
              {textBtn.length ? (
                <div className="headerSection-left">
                  <button className="headerSection-left__btn">
                    {textBtn}
                    <FaArrowLeftLong className="headerSection-left__btn--icon" />
                  </button>
                </div>
              ) : null}
            </section>
          </main>
        </Row>
      </Container>
    </>
  );
}
