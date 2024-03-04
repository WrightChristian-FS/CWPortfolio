import React from "react";
import "./intro.css";
import pfp from "../../asset/pfp.svg";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Intro = () => {
    return (
        <section>
            <Row className="row-width">
                <Col>
                    <div className="img-parent">
                        <img className="main-img" src={pfp} />
                    </div>
                </Col>

                <Col >
                    <section>
                        <div className="margin-top">
                            <h2 className="h__deco">
                                Christian Wright
                            </h2>
                            <h3 className="it-_mt sofia-sans">
                                IT | Designer | Developer
                            </h3>
                        </div>

                        <div className="m__t">
                            <h1 className="sofia-sans hs">A Bit About Me</h1>
                            <p className="gayathri-regular paro">
                            As a seasoned IT professional and Developer, I bring a wealth of experience in managing complex IT infrastructures, leading significant migration and security projects, and developing innovative software solutions. My career spans various sectors, including healthcare, aviation, and corporate environments, where I have successfully spearheaded initiatives to enhance operational efficiency, security, and system usability. My technical proficiency is backed by a solid foundation of certifications, including CompTIA and Microsoft, ensuring I stay at the forefront of industry standards and practices. My projects reflect a commitment to excellence, strategic planning, and user-centric design, showcasing my ability to not only meet but exceed business requirements.

                            </p>
                        </div>
                    </section>

                </Col>
            </Row>
        </section>
    );
};


export default Intro;
