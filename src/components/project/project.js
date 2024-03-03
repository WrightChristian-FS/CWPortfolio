import React, { useState } from "react";
import { Container, Row, Col, CardBody } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./project.css";
import Image from "..//..//asset/Image.svg";
import four from "..//..//asset/four.svg";
import networkk from "..//..//asset/network.svg";
import sec from "..//..//asset/secur.svg";
import fund from "..//..//asset/Image 6.svg";
import def from "..//..//asset/def.svg";
import cert from "..//..//asset/cert.svg";
import cicina from "..//..//asset/cicina.svg";
import fea from "..//..//asset/featured-image (1).svg"


const Project = () => {
    return (
        <Container fluid className="full-height margin-_top">
            <Row className="full-height p-9 m-2">
                <Col className="yellow-background d-flex justify-center" xs={12} md={6}>
                    <section>
                        <div>
                            <h1 className="title-design d-flex justify-center bebas-neue-regular">
                                Projects
                            </h1>
                            <hr className="horizontal-line"></hr>
                        </div>

                        <div>
                            <Card className="custom-primary heightss">
                                <Card.Body className="card_body">
                                    <Card.Title className="sofia-sans">Project Title</Card.Title>
                                    <Card.Subtitle className="d-flex custom-primary">
                                        CODAN MEDICAL
                                    </Card.Subtitle>
                                    <Card.Text className="text-font gayathri-regular">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut ero labore et dolore
                                        magna aliqua.Lorem ipsum dolor sit amet, adipisicing
                                        elit, sed do eiusmod tempor incididunt ut ero labore et
                                        dolore magna alids . Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut ero labore et dolore
                                        magna . Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut ero labore et dolore
                                        magna
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div>
                            <Card className="custom-primary heightss">
                                <Card.Body className="card_body">
                                    <Card.Title className="sofia-sans">Project Title</Card.Title>
                                    <Card.Subtitle className="d-flex custom-primary">
                                        CODAN MEDICAL
                                    </Card.Subtitle>
                                    <Card.Text className="text-font gayathri-regular">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut ero labore et dolore
                                        magna aliqua.Lorem ipsum dolor sit amet, adipisicing
                                        elit, sed do eiusmod tempor incididunt ut ero labore et
                                        dolore magna alids . Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut ero labore et dolore
                                        magna . Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut ero labore et dolore
                                        magna
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div>
                            <Card className="custom-primary heightss">
                                <Card.Body className="card_body">
                                    <Card.Title className="sofia-sans">Project Title</Card.Title>
                                    <Card.Subtitle className="d-flex custom-primary">
                                        CODAN MEDICAL
                                    </Card.Subtitle>
                                    <Card.Text className="text-font gayathri-regular">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut ero labore et dolore
                                        magna aliqua.Lorem ipsum dolor sit amet, adipisicing
                                        elit, sed do eiusmod tempor incididunt ut ero labore et
                                        dolore magna alids . Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut ero labore et dolore
                                        magna . Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut ero labore et dolore
                                        magna
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </section>
                </Col>


                <Col xs={12} md={1} className="vertical-line-column">
                    <div className="vertical-lines"></div> {/* Vertical line */}
                </Col>

                <Col className="blue-background" xs={12} md={5}>
                    <section>
                        <h1 className="bebas-neue-regular title-design">Certifications</h1>



                        <div className="d-flex right">



                            <div className="diva">
                                <div className="flex-col">
                                    <img src={Image} className="img-layout" />
                                    <p>A+</p>
                                    <p>CompTIA</p>
                                </div>

                                <div className="flex-col">
                                    <img src={fund} className="img-layout" />
                                    <p>AZ-900</p>
                                    <p>Microsoft</p>
                                </div>

                                <div className="flex-col">
                                    <img src={cicina} className="img-layout" />
                                    <p>A+</p>
                                    <p>CompTIA</p>
                                </div>

                                <div>
                                    <Card className="yale-blue custom-card-design sofia-sans m__p">
                                        <p className="margin_top">Certifications</p>
                                        <p >In Progress</p>
                                    </Card>
                                </div>
                            </div>

                            <div className="diva margin-left">
                                <div className="flex-col">
                                    <img src={networkk} className="img-layout" />
                                    <p>A+</p>
                                    <p>CompTIA</p>
                                </div>

                                <div className="flex-col">
                                    <img src={def} className="img-layout" />
                                    <p>AZ-104</p>
                                    <p>Microsoft</p>
                                </div>

                                <div className="flex-col">
                                    <img src={fea} className="img-layout" />
                                    <p>D365 F&O</p>
                                    <p>CompTIA</p>
                                </div>

                                <div className="flex-col display_none">
                                    <img src={cicina} className="img-layout" />
                                    <p>A+</p>
                                    <p>CompTIA</p>
                                </div>


                            </div>

                            <div className="diva margin-left">
                                <div className="flex-col">
                                    <img src={sec} className="img-layout" />
                                    <p>A+</p>
                                    <p>CompTIA</p>
                                </div>

                                <div className="flex-col">
                                    <img src={cert} className="img-layout" />
                                    <p>A+</p>
                                    <p>CompTIA</p>
                                </div>

                                <div className="flex-col">
                                    <img src={cicina} className="img-layout" />
                                    <p>A+</p>
                                    <p>CompTIA</p>
                                </div>
                            </div>
                        </div>

                        {/* </div> */}

                        {/* <div className="d-flex margin-l">
                            <div className="flex-col">
                                <img src={Image} />
                                <p>A+</p>
                                <p>CompTIA</p>
                            </div>

                            <div className="flex-col margin-left">
                                <img src={two} />
                                <p>Network+</p>
                                <p>CompTIA</p>
                            </div>

                            <div className="flex-col margin-left">
                                <img src={three} />
                                <p>Security+</p>
                                <p>CompTIA</p>
                            </div>
                        </div>

                        <div className="d-flex margin-l">
                            <div className="flex-col">
                                <img src={four} />
                                <p>AZ-900</p>
                                <p>Microsoft</p>
                            </div>

                            <div className="flex-col margin-left">
                                <img src={Azure} />
                                <p>AZ-104</p>
                                <p>Microsoft</p>
                            </div>

                            <div className="flex-col margin-left">
                                <img src={five} />
                                <p>D365 F&O</p>
                                <p>Microsoft</p>
                            </div>
                        </div>

                        <div className="d-flex margin-l">
                            <div className="flex-col">
                                <img src={cis} />
                                <p>CCNA</p>
                                <p>CISCO</p>
                            </div>
                        </div> */}

                        {/* <div className="d-flex margin-l">
                            <div>
                                <Card className="deco-card">
                                    <CardBody
                                        className="color-alert">
                                        <p>Certifications</p>
                                        <p>In Progress</p>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="flex-col">
                                <img src={cis} />
                                <p>CCNA</p>
                                <p>CISCO</p>
                            </div>

                            <div className="flex-col">
                                <img src={cis} />
                                <p>CCNA</p>
                                <p>CISCO</p>
                            </div>
                        </div> */}
                    </section>
                </Col>
            </Row>
        </Container>
    );
};

export default Project;
