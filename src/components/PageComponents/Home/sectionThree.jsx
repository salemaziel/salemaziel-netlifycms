import React from "react"

import { Profilepic } from "../../../assets/images/index"

import { Link } from "gatsby"

import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Fade from "react-reveal/Fade"

import { profilePic }from './home.module.css'

const SectionThree = () => (
  <section id="about" className="three">
    <div className="container">
      <header>
        <Fade top>
          <h2>I build websites and solve your technology nightmares.</h2>
        </Fade>
      </header>

      <Fade top>
        <div className="image featured">
          <img
            src={Profilepic}
            alt="Profile photo of Salem Aziel"
            className={profilePic}
          />
        </div>
      </Fade>

      <Fade top>
        <p style={{ textAlign: "center" }}>And I'm sexy while doing it.</p>
      </Fade>
      <Row className="justify-content-center">
        <Fade top>
          <Col>
            <Button as={Link} className="button homeButton" to="/about">
              Learn About Me
            </Button>
            <Button as={Link} className="button homeButton" to="/blog">
              Read My Blog
            </Button>
            <Button as={Link} className="button homeButton" to="/portfolio">
              View Portfolio
            </Button>
            <Button as={Link} className="button homeButton" to="/contact">
              Contact Me
            </Button>
          </Col>
        </Fade>
      </Row>
    </div>
  </section>
)

export default SectionThree
