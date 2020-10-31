import React from "react"

import { Profilepic } from "../../../assets/images/index"

import { Link } from "gatsby"

import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Fade from "react-reveal/Fade"

const SectionThree = () => (
  <section id="about" className="three">
    <div className="container">
      <header>
        <Fade top>
          <h2>This is Me</h2>
        </Fade>
      </header>

      <Fade top>
        <div className="image featured">
          <img
            src={Profilepic}
            alt="Profile photo of Salem Aziel"
            style={{
              maxWidth: "40%",
              height: "auto",
              margin: "auto",
              boxShadow: "5px 10px 15px #060606",
            }}
          />
        </div>
      </Fade>

      <Fade top>
        <p style={{ textAlign: "center" }}>I'm pretty sexy, I know.</p>
      </Fade>
      <Row className="justify-content-center">
        <Fade top>
          <Col>
            <Button as={Link} className="button" to="/about">
              Learn About Me
            </Button>
          </Col>
          <Col>
            <Button as={Link} className="button" to="/blog">
              Read My Blog
            </Button>
          </Col>
        </Fade>
      </Row>
    </div>
  </section>
)

export default SectionThree
