import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./work.css";

const Work = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [showWork, setWorkShow] = useState(false);
  // const handleWorkClose = () => setShow(false);
  // const handleWorkShow = () => setShow(true);

  return (
    <Container fluid className="full-height margin--top">
      <Row className="full-height">
        <Col className="yellow-background d-flex justify-center" xs={12} md={6}>
          <section>
            <div>
              <h1 className=" d-flex justify-center bebas-neue-regular yale-color">
                Work History
              </h1>
              <hr className="hori-line"></hr>
            </div>

            {/* CODAN */}
            <div>
              <div className="d-flex justify-center">
                <a href="#" class="button-link sofia-sans" onClick={handleShow}>
                  System Engineer
                </a>

                <Modal
                  show={show}
                  centered
                  className="custom-modal"
                  onHide={handleClose}
                  animation={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>IT Engineer</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>TEST</Modal.Body>
                </Modal>
                
              </div>
              <div>
                <p className="d-flex justify-center text-center gayathri-regular para_width para-color">
                Engineer I excelled as an IT Engineer, where I was instrumental in delivering high-quality technical support and ensuring the robustness of service level agreements (SLAs). I managed the organization's IT infrastructure, encompassing networks, servers, databases, and software applications, ensuring they were secure, reliable, and aligned with business processes. My role was pivotal in developing and enforcing cybersecurity policies, conducting regular audits, and leading strategic IT planning and budgeting to support organizational goals. I successfully led IT projects from planning to execution, ensuring they met all objectives, timelines, and budget constraints while fostering a skilled IT team to drive departmental success.
                </p>

                <div className="d-flex ">
                  <h5 className="sofia-sans h-5 yale-color">CODAN MEDICAL</h5>
                  <p className="margin-right gayathri-regular para-color">
                    October 2021- Current
                  </p>
                </div>
                <hr className="horizontal-line-1"></hr>
              </div>
            </div>

            {/* CHOC */}
            <div>
              <div className="d-flex justify-center">
                <a href="#" class="button-link sofia-sans" onClick={handleShow}>
                  IT Engineer
                </a>

                <Modal
                  show={show}
                  centered
                  className="custom-modal"
                  onHide={handleClose}
                  animation={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                  </Modal.Header>
                  <Modal.Body></Modal.Body>
                </Modal>
              </div>

              <div>
                <p className="d-flex justify-center text-center gayathri-regular para_width para-color">
                In my role as an IT Engineer at CHOC Children’s Hospital, I ensured the continuous operation of critical healthcare IT systems, including Electronic Health Records (EHR) and patient management systems, through diligent system maintenance and security management. I was key in implementing robust cybersecurity measures to protect sensitive patient data, adhering to HIPAA regulations. My responsibilities also included providing effective technical support, integrating medical devices with IT systems, and developing a comprehensive COVID-19 response plan, which enabled a seamless transition to remote work for non-clinical staff and ensured the hospital's compliance with personal protective protocols.
                </p>

                <div className="d-flex ">
                  <h5 className="sofia-sans h-5 yale-color">CHOC</h5>
                  <p className="margin-right gayathri-regular para-color">
                    January 2020 - August 2021
                  </p>
                </div>
                <hr className="horizontal-line-1"></hr>
              </div>
            </div>

            {/* Amadeus */}
            <div>
              <div className="d-flex justify-center">
                <div className="d-flex justify-center">
                  <a
                    href="#"
                    className="button-link sofia-sans"
                    onClick={handleShow}
                  >
                    IT Engineer
                  </a>

                  <Modal
                    show={show}
                    centered
                    className="custom-modal"
                    onHide={handleClose}
                    animation={false}
                  >
                    <Modal.Header closeButton className="d-flex justify-center">
                      <h2>IT Engineer</h2>
                    </Modal.Header>
                    <Modal.Body>
                      <p>Woohoo, you are reading this text in a modal!</p>
                      <p>This is non-editable content.</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>

              <div>
                <p className="d-flex justify-center text-center gayathri-regular para_width para-color">
                I led the IT department as an Engineer, overseeing the successful takeover of an existing IT service contract and ensuring the seamless integration of proprietary software solutions. My role was crucial in maintaining continuous operation of airport IT systems, facilitating infrastructure upgrades, and liaising with vendors and stakeholders to align IT services with airport goals. I developed and maintained disaster recovery and business continuity plans, ensuring the resilience of critical systems, and upheld regulatory compliance with national and international aviation standards through meticulous reporting and documentation.
                </p>

                <div className="d-flex ">
                  <h5 className="sofia-sans h-5 yale-color">Amadeus</h5>
                  <p className="margin-right gayathri-regular para-color">
                    April 2017 - January 2020
                  </p>
                </div>
              </div>
            </div>

            {/* Certifix */}
            <div>
              <div className="d-flex justify-center">
                <div className="d-flex justify-center">
                  <a
                    href="#"
                    className="button-link sofia-sans"
                    onClick={handleShow}
                  >
                    IT Engineer
                  </a>

                  <Modal
                    show={show}
                    centered
                    className="custom-modal"
                    onHide={handleClose}
                    animation={false}
                  >
                    <Modal.Header closeButton className="d-flex justify-center">
                      <h2>IT Engineer</h2>
                    </Modal.Header>
                    <Modal.Body>
                      <p>Woohoo, you are reading this text in a modal!</p>
                      <p>This is non-editable content.</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>

              <div>
                <p className="d-flex justify-center text-center gayathri-regular para_width para-color">
                I provided comprehensive technical support, significantly minimizing disruptions and maintaining productivity across development environments. I was responsible for system maintenance, performance monitoring, and ensuring data management compliance with industry standards and regulations. My role involved developing and delivering targeted training programs, supporting software development projects, and acting as the primary liaison with regulatory bodies like the California DOJ and FBI, ensuring all practices met federal and state regulations.
                </p>

                <div className="d-flex ">
                  <h5 className="sofia-sans h-5 yale-color">CERTIFIX Co.</h5>
                  <p className="margin-right gayathri-regular para-color">
                    September 2014 - September 2016
                  </p>
                </div>
              </div>
            </div>

            {/* Navy */}
            <div>
              <div className="d-flex justify-center">
                <div className="d-flex justify-center">
                  <a
                    href="#"
                    className="button-link sofia-sans"
                    onClick={handleShow}
                  >
                    IT Engineer
                  </a>

                  <Modal
                    show={show}
                    centered
                    className="custom-modal"
                    onHide={handleClose}
                    animation={false}
                  >
                    <Modal.Header closeButton className="d-flex justify-center">
                      <h2>IT Engineer</h2>
                    </Modal.Header>
                    <Modal.Body>
                      <p>Woohoo, you are reading this text in a modal!</p>
                      <p>This is non-editable content.</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>

              <div>
                <p className="d-flex justify-center text-center gayathri-regular para_width para-color">
                I provided critical technical support and training, enhancing IT literacy and cybersecurity practices among personnel. I managed the installation, configuration, and maintenance of vital IT hardware and network infrastructure, ensuring optimal performance and strict compliance with Navy and federal regulations. My duties included regular system maintenance, troubleshooting, and conducting security audits and risk assessments, playing a key role in maintaining secure, reliable communication and operational systems in high-stakes environments.
                </p>

                <div className="d-flex ">
                  <h5 className="sofia-sans h-5 yale-color">United Sates Navy</h5>
                  <p className="margin-right gayathri-regular para-color">
                    October 2011 - October 2015
                  </p>
                </div>
              </div>
            </div>


          </section>
        </Col>
        <Col className="custom-primary d-flex justify-center" xs={12} md={6}>
          <section className="margin-botm d-flex justify-center">
            <div>
              <h1 className="sec-2-title d-flex justify-center sofia-sans">
                Summary
              </h1>
              <p className="sec-2-title text-center mt-8 gayathri-regular para-changes">
              As a seasoned IT Engineer with extensive experience across healthcare, aviation, defense, and software development sectors, I possess a robust blend of technical, strategic, and leadership skills. My expertise spans managing and securing complex IT infrastructures, leading critical cybersecurity initiatives, and ensuring seamless system operations that align with organizational objectives. I have a proven track record in developing and enforcing IT policies, conducting system maintenance and risk assessments, and driving the successful implementation of IT projects from inception to completion.
              </p>

              <p className="sec-2-title text-center mt-14 gayathri-regular para-changes">
              In addition to my technical acumen, I am adept at software development support, data management compliance, and fostering cross-functional collaboration. My hands-on experience in technical support, system integration, and emergency response planning is complemented by my ability to adapt and innovate in fast-paced environments. With a strong foundation in both IT infrastructure and software development processes, I excel at bridging the gap between technical requirements and strategic business outcomes, ensuring technology solutions meet and exceed operational and regulatory standards.
              </p>

             
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Work;
