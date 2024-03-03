import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./develop.css";
import sql from "..//..//asset/sql.svg";
import cp from "..//..//asset/cp.svg";
import neo from "..//..//asset/neo.svg";
import c from "..//..//asset/c.svg";
import net from "..//..//asset/net.svg";
import html from "..//..//asset/html.svg";
import jss from "..//..//asset/jss.svg";
import git from "..//..//asset/git.svg";
import nine from "..//..//asset/nine.svg";
import mong from "..//..//asset/mong.svg";
import x from "..//..//asset/x.svg";
import css from "..//..//asset/css.svg";
import ele from "..//..//asset/ele.svg";
import java from "..//..//asset/java.svg";
import node from "..//..//asset/node.svg";



const Develop = () => {
  return (
    <Container fluid className="fill-height">
      <Row className="fill-height">
        <Col className="d-flex " xs={12} md={6}>
          <section className="j-center">
            <h1 className="d-flex justify-center bebas-neue-regular">
              Projects
            </h1>

            <div className="card custom-primary width-height">
              <div className="card--header d-flex sofia-sans">
                Project Title
              </div>

              <div className="card-content">
                <p className="gayathri-regular">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  xsdo eiusmod tempor incididunt utssss ero labore et dolore
                  dddaaqsssssssss magna aliquass.Lorem ipsum dolor sit amet,
                  adipisicing elit, sed do eisusssmod tempor incididunssero
                  labore et dolore magna aliqua.Lorem ipsum dsit amet,
                  onsectetur adipisicing elit, sed do eiusmod
                </p>
              </div>
            </div>

            <div className="card custom-primary width-height">
              <div className="card--header d-flex sofia-sans">
                Project Title
              </div>

              <div className="card-content">
                <p className="gayathri-regular">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  xsdo eiusmod tempor incididunt utssss ero labore et dolore
                  dddaaqsssssssss magna aliquass.Lorem ipsum dolor sit amet,
                  adipisicing elit, sed do eisusssmod tempor incididunssero
                  labore et dolore magna aliqua.Lorem ipsum dsit amet,
                  onsectetur adipisicing elit, sed do eiusmod{" "}
                </p>
              </div>
            </div>

            <div className="card custom-primary width-height">
              <div className="card--header d-flex sofia-sans">
                Project Title
              </div>

              <div className="card-content">
                <p className="gayathri-regular">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  xsdo eiusmod tempor incididunt utssss ero labore et dolore
                  dddaaqsssssssss magna aliquass.Lorem ipsum dolor sit amet,
                  adipisicing elit, sed do eisusssmod tempor incididunssero
                  labore et dolore magna aliqua.Lorem ipsum dsit amet,
                  onsectetur adipisicing elit, sed do eiusmod{" "}
                </p>
              </div>
            </div>
          </section>
        </Col>
        <Col xs={12} md={1} className="vertical-line-column">
          <div className="vertical-lines"></div> {/* Vertical line */}
        </Col>
        <Col className="d-flex justify-center" xs={12} md={5}>
          <section>
            <h2 className="d-flex justify-center bebas-neue-regular mar__left">
              Technology
            </h2>

            <Row md="auto" >
              <Col xs={6} md={4}>
                <div className="mar-right">
                  <img src={sql} className="img__size" alt="SQL Image" />
                  <img src={c} className="img__size" alt="SQL Image" />
                  <img src={jss} className="img__size" alt="SQL Image" />
                  <img src={mong} className="img__size" alt="SQL Image" />
                  <img src={ele} className="img__size" alt="SQL Image" />
                </div>
              </Col>

              <Col xs={6} md={4}>
                <div className="mar-right">
                  <img src={cp} className="img__size" alt="CP Image" />
                  <img src={net} className="img__size" alt="CP Image" />
                  <img src={git} className="img__size" alt="CP Image" />
                  <img src={x} className="img__size" alt="SQL Image" />
                  <img src={java} className="img__size" alt="SQL Image" />
                </div>
              </Col>

              <Col xs={6} md={4}>
                <div>
                  <img src={neo} className="img__size" alt="Neo Image" />
                  <img src={html} className="img__size" alt="Neo Image" />
                  <img src={nine} className="img__size" alt="Neo Image" />
                  <img src={css} className="img__size" alt="SQL Image" />
                  <img src={node} className="img__size" alt="SQL Image" />
                </div>
              </Col>
            </Row>


            {/* <Row  md="auto">
                <div >
                    <Col xs={6} md={4}>
                <div>
                  <img src={sql} className="img__size" />
                  <img src={sql} className="img__size" />
                  <img src={sql} className="img__size" />
                </div>
              </Col>
              <Col xs={6} md={4}>
                <img src={cp} className="img__size" />
                <img src={cp} className="img__size" />
                <img src={cp} className="img__size" />
              </Col>
                </div>
              
              <Col xs={6} md={4}>
                <img src={neo} className="img__size" />
                <img src={neo} className="img__size" />
                <img src={neo} className="img__size" />
              </Col>
            </Row> */}

            {/* <Row>
        <Col sm md> <img src={sql} className="img__size" /> </Col>
        <Col sm md> <img src={cp} className="img__size" />  </Col>
        <Col sm md> <img src={neo} className="img__size" /> </Col>
      </Row>
             */}
            {/* <Row className="d-f">
              <Col xs={12}  sm={4}>
                <div className="d-flex flex__col">
                  <img src={sql} className="img__size" />
                  <img src={cp} className="img__size" />
                  <img src={neo} className="img__size" />
                </div>
              </Col>
              <Col xs={12}  sm={4}>
                <div className="d-flex flex__col">
                  <img src={sql} className="img__size" />
                  <img src={cp} className="img__size" />
                  <img src={neo} className="img__size" />
                </div>
              </Col>
              <Col xs={12}  sm={4}>
                <div className="d-flex flex__col">
                  <img src={sql} className="img__size" />
                  <img src={cp} className="img__size" />
                  <img src={neo} className="img__size" />
                </div>
              </Col>
            </Row> */}
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Develop;
