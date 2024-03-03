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

            {/* TEXT 1 */}
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
                  <h1>ggggg</h1>
                </Modal>
              </div>
              <div>
                <p className="d-flex justify-center text-center gayathri-regular para_width para-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut ero labore et dolore magna
                  aliqua. Ut enim ad minim vam, qu exercitation adipiscing elit,
                  sed do eiusmod tempor
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

            {/* Text 2 */}
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut ero labore et dolore magna
                  aliqua. Ut enim ad minim vam, qu exercitation adipiscing elit,
                  sed do eiusmod tempor
                </p>

                <div className="d-flex ">
                  <h5 className="sofia-sans h-5 yale-color">CHOC Hospital</h5>
                  <p className="margin-right gayathri-regular para-color">
                    August 2019 - September 2021
                  </p>
                </div>
                <hr className="horizontal-line-1"></hr>
              </div>
            </div>

            {/* Text 3 */}
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut ero labore et dolore magna
                  aliqua. Ut enim ad minim vam, qu exercitation adipiscing elit,
                  sed do eiusmod tempor
                </p>

                <div className="d-flex ">
                  <h5 className="sofia-sans h-5 yale-color">Amadeus</h5>
                  <p className="margin-right gayathri-regular para-color">
                    September 2017 - August 2019
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna consectetur
                adi nim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in consectetur adipisc voluptate velit
                esse cillum dolore rem ipsum con dolor sit amet, consectetur
                adipiscing elit, sed
              </p>

              <p className="sec-2-title text-center mt-14 gayathri-regular para-changes">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna consectetur
                adi nim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in consectetur adipisc voluptate velit
                esse cillum dolor rem ipsum con dolor sit amet, consectetur
                adipiscing elit, sed
              </p>

              <p className="sec-2-title text-center mt-14 gayathri-regular para-changes">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna consectetur
                adinim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in consectetur adipisc voluptate velit
                esse cillum dolore rem ipsum con dolor sit amet, consectetur
                adipiscing elit, sed
              </p>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Work;
