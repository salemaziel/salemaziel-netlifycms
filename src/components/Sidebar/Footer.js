import React from 'react';
//import { Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
//import CalendlyButton from '../CalendlyButton'

export default function Footer({ socialLinks = [] }) {
  return (
    <div className="bottom">
      {/*<ul className="icons">
        {socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>*/}
      <ul className="icons">
        <li>
          <a href="https://facebook.com">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/rblart_760">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://github.com/salemaziel">
            <FaGithub />
          </a>
        </li>

      </ul>

      {/*<Row className="justify-content-center">
        <Col xs={10}>
        <CalendlyButton />
        </Col>
    </Row>*/}
    </div>
  );
}
