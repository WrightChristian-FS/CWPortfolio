import React, { useState } from "react";
import "./contact.css";
import lg from "..//..//asset/irene-strong-v2aKnjMbP_k-unsplash (1).svg"
import msg from "..//..//asset/messagebox.svg";
import github from "..//..//asset/github.svg";
import linkln from "..//..//asset/linkldn.svg";
import iconn from "..//..//asset/iconn.svg";


const Contact = () => {
    return (

        <section className="d-flex align-items-center contact-section m_--t ">
            <div className="element-to-hide">
                <img src={lg} className="selfie element-to-hide" />
            </div>
            <div className="icon-text-sec element-to-hide">
                <div className="icon-text-sec">
                    <p className="bebas-neue-regular icon-text-sec">Ready to make your ideas a reality?</p>
                </div>
                <div className="d-flex">
                    <a href="#" className="icon-text-sec">
                        <img src={msg} alt="Icon Image" />
                    </a>
                    <a href="#" className="icon-text-sec">
                        <img src={github} alt="Icon Image" />
                    </a>
                    <a href="#" className="icon-text-sec">
                        <img src={linkln} alt="Icon Image" />
                    </a>
                    <a href="#" >
                        <img src={iconn} alt="Icon Image" />
                    </a>
                </div>
            </div>

            <div className="d-flex show-element">
                <div className="show-element">
                    <img src={lg} className="selfie" />

                </div>
                <div className="icon-text-sec show-element">
                    <p className="bebas-neue-regular icon-text-sec">Ready to make your ideas a reality?</p>
                </div>
                <div className="d-flex justify-center mt-5">


                    <div className="show-element">
                        <a href="#" className="icon-text-sec show-element paddingg">
                            <img src={msg} alt="Icon Image" />
                        </a>
                        <a href="#" className="icon-text-sec show-element paddingg">
                            <img src={github} alt="Icon Image" />
                        </a>
                    </div>


                    <div className="show-element">
                        <a href="#" className="icon-text-sec show-element paddingg">
                            <img src={linkln} alt="Icon Image" />
                        </a>
                        <a href="#" >
                            <img src={iconn} alt="Icon Image" className="show-element paddingg" />
                        </a>
                    </div>


                </div>
            </div>
        </section>

        /* <Container>
            <Row>
                <Col>
                    <div className="d-flex justify-end pos">

                        <img src={lg} className="gee" />

                    </div>
                </Col>

                <Col>
                    <div className="d-flex justify-end pos">

                        <img src={g} className="gee" /> 

                    </div>
                </Col>
            </Row>
        </Container>*/
    )
}

export default Contact;