import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, navigate } from 'gatsby'
import { EventHandler } from 'react';

// Add EventHandler to the Link component


const Categories = (props) => {
  return (
    <section className="portfolio">
      <Container>
        <Row className="justify-content-md-center ">  
            <Col xs={12} lg={6}>
          <div as={Link} to="/portfolio/web-design/" ar className="gallery-tile mb-3 mt-3" aria-label="link"  onClick={()=>navigate("/portfolio/web-design") } >
            <div className="portfolio-info">
              <h2>Web Design &amp; Development</h2>
              {/*<p>{this.props.desc}</p>*/}
            </div>
            <img className="tile-image" src="https://res.cloudinary.com/dexdumfqy/image/upload/v1592640947/salemaziel.com/zenithroofingservices_f2f1tm.png" alt="web design and development" />
          </div>
          </Col>
          <Col xs={12} lg={6}>
          <div as={Link} to="/portfolio/server-install/" className="gallery-tile mb-3 mt-3" aria-label="link"  onClick={()=>navigate("/portfolio/server-installs") }>
            <div className="portfolio-info">
              <h2>Server Installation</h2>
              {/*<p>{this.props.desc}</p>*/}
            </div>
            <img className="tile-image" src="https://res.cloudinary.com/dexdumfqy/image/upload/v1599804800/salemaziel.com/me/terminal-2-640x287_kncwse.jpg" alt="Server Installs" />
          </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">  
            <Col xs={12} lg={6}>
          <div as={Link} to="/portfolio/workflow-automation/" className="gallery-tile mb-3 mt-3" aria-label="link"  onClick={()=>navigate("/portfolio/workflow-automation") }>
            <div className="portfolio-info">
              <h2>Workflow Automation</h2>
              {/*<p>{this.props.desc}</p>*/}
            </div>
            <img className="tile-image" src="https://res.cloudinary.com/dexdumfqy/image/upload/v1599812714/salemaziel.com/workflow-automation-final-478x214_f0s3hs.jpg"  alt="Automation"/>
          </div>
          </Col>
          <Col xs={12} lg={6}>
          <div as={Link} to="/portfolio/computer-repair/" className="gallery-tile mb-3 mt-3" aria-label="link"  onClick={()=>navigate("/portfolio/computer-repair") } >
            <div className="portfolio-info">
              <h2>Computer Troubleshoot &amp; Repair </h2>
              {/*<p>{this.props.desc}</p>*/}
            </div>
            <img className="tile-image" src="https://res.cloudinary.com/dexdumfqy/image/upload/v1599817912/salemaziel.com/computer-repair-cropped_etsfe1.jpg" alt="Computer Repair" />
          </div>
  </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Categories;
