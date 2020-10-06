import React from 'react'

import ContactForm from './contactForm'
//import Footer from '../../Sidebar/Footer'
//import config from '../../../../config'

import {
  FaFacebook,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa'


import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const SectionOne = () => (
    <section id="contact" className="four">
    <div className="container">
      <header>
        <h2>Get In Touch</h2>
      </header>

      {/*<form method="post" action="#">
            <Row style={{margin: 'auto auto 2rem auto', }}>
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              </Row>
              <Row style={{margin: 'auto auto 2rem auto'}}>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              </Row>
              <Row>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
              </Row>
</form>*/}
        <ContactForm />
        </div>
        {/*<div style={{ justifyContent: 'center', alignContent: 'center', textAlign: 'center', margin: '3rem 0 0 0'}}>
        <Footer socialLinks={config.socialLinks} style={{margin: '0!important', padding: '0!important'}}/>
</div>*/}
        <Row className="mt-5">
          <Col>
          <a href="https://facebook.com/" rel="nofollow">
              <FaFacebook className="mr-4 ml-4" />
              </a>
              <a href="https://instagram.com/" rel="nofollow">
              <FaInstagram  className="mr-4 ml-4"/>
              </a>
              <a href="https://twitter.com/" rel="nofollow">
              <FaTwitter  className="mr-4 ml-4"/>
              </a>
          </Col>
        </Row>
      </section>


)

export default SectionOne