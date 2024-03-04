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
                                    <Card.Title className="sofia-sans">ERP migration project from AS/400 to Dynamics F&O</Card.Title>
                                    <Card.Subtitle className="d-flex custom-primary">
                                        CODAN MEDICAL
                                    </Card.Subtitle>
                                    <Card.Text className="text-font gayathri-regular">
                                    In a pivotal role, I led the migration of an outdated AS/400 ERP system to the modern Dynamics F&O platform, setting a global standard for ERP updates. My responsibilities encompassed liaising with stakeholders to define business needs, collaborating with vendors for system build and configuration, and ensuring data was transferred accurately and efficiently. I spearheaded employee training programs for the new system, ensuring a smooth transition pre and post-go-live. The project culminated in a robust platform equipped for long-term maintenance and support, validated through comprehensive testing to meet all operational objectives.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div>
                            <Card className="custom-primary heightss">
                                <Card.Body className="card_body">
                                    <Card.Title className="sofia-sans">Corporate Security Implementation</Card.Title>
                                    <Card.Subtitle className="d-flex custom-primary">
                                        CODAN MEDICAL
                                    </Card.Subtitle>
                                    <Card.Text className="text-font gayathri-regular">
                                    I initiated and executed a comprehensive security overhaul, addressing both physical and cyber aspects to significantly reduce company risk. This involved implementing key fob access, surveillance systems, and alarm protocols, alongside identifying and mitigating cybersecurity vulnerabilities. My efforts led to the development of an annual cybersecurity training program, drastically cutting the company's risk profile and enhancing network security through strict access controls and monitoring. The successful implementation of Microsoft 365 defender practices and MFA protocols positioned the company to secure a cybersecurity insurance policy, marking a significant advancement in our security posture.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div>
                            <Card className="custom-primary heightss">
                                <Card.Body className="card_body">
                                    <Card.Title className="sofia-sans">Airport Technology Migration (LAX Terminal 5)</Card.Title>
                                    <Card.Subtitle className="d-flex custom-primary">
                                        Amadeus
                                    </Card.Subtitle>
                                    <Card.Text className="text-font gayathri-regular">
                                    As part of the "LAX Big Move" initiative, I collaborated with a team of IT engineers to overhaul the technology operations for LAX Terminal 5. My role involved understanding the specific needs of airport operations, configuring terminal management systems, and ensuring seamless integration with airline proprietary software. I was instrumental in updating and synchronizing airport display systems, facilitating a smooth transition from the previous vendor and conducting comprehensive training for all end-users, thereby enhancing the terminal's operational efficiency and traveler experience.
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
