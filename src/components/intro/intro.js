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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut ero labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco poriti laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in uienply voluptate velit esse cillum

                            </p>
                        </div>
                    </section>

                </Col>
            </Row>
        </section>
    );
};


export default Intro;
