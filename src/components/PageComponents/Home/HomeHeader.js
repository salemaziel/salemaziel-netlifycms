import React from 'react';
//import homeStyles from './home.module.css';
import { containerHero, Headerbg, signature  } from './home.module.css';

import Container from 'react-bootstrap/Container';

import LazyHero from "react-lazy-hero";


import { PersonaLightShadow } from '../../../assets/images/index';
import CodestaffLogo from '../../../assets/images/codestaff-logo.jpg';

import CalendlyButton from '../../CalendlyButton'
import Announcement from '../../Announcement'
import {navigateTo} from 'gatsby'



const HomeHeader = (props) => {
    return (
      <>
      <section id="top" className="one dark cover">
      <LazyHero
        imageSrc={props.bgImage}
        isCentered={true}
        isFixed={true}
        minHeight="115vh"
        opacity={0.2}
        color='#000'
      >
        <Container className={containerHero}>
          <div className={Headerbg}>
            <header>
              <div>
                <img
                  src={PersonaLightShadow}
                  alt="Salem Aziel signature logo"
                  className={signature}
                />
              </div>
              <h2 className="alt" style={{ textShadow: '2px 2px 2px black' }}>
             Web Developer. {/*<br />  Digital Consultant.  <br />
                and System Administrator */}
              </h2>
              <h2 className="alt" style={{ textShadow: '2px 2px 2px black' }}>
  Digital Consultant.
              </h2>
              <h2 className="alt" style={{ textShadow: '2px 2px 2px black' }}>

                System Administrator.
              </h2>
              
               {/*<div style={{padding: '1rem 0', marginTop: '2rem'}}>
               <CalendlyButton />
    </div>* /}
              {/*<icon className="fa fa-code" 
                        style={{
                            fontSize: "2rem",
                            padding: "0 0 1rem",
                            textShadow: '3px 3px 5px black',
                        }} />
                       <p style={{
                          letterSpacing: "0.3rem",
                          textShadow: '3px 3px 3px black',
                        }}>CodeStaff</p>*/}
            </header>
          </div>
        </Container>
        </LazyHero>

      </section>
      </>
    );
}

export default HomeHeader;
