import React from 'react'
import pic2 from '../../../assets/images/pic02.jpg';
import pic3 from '../../../assets/images/pic03.jpg';
import pic4 from '../../../assets/images/pic04.jpg';
import pic5 from '../../../assets/images/pic05.jpg';
import pic6 from '../../../assets/images/pic06.jpg';
import pic7 from '../../../assets/images/pic07.jpg';
import pic8 from '../../../assets/images/pic08.jpg';

import { Profilepic } from '../../../assets/images/index'

import { Link } from 'gatsby'

import Button from 'react-bootstrap/Button'

import Fade from 'react-reveal/Fade'

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
          
            <img src={Profilepic} alt="Profile photo of Salem Aziel" style={{maxWidth: '40%', height: 'auto', margin: 'auto', boxShadow: '5px 10px 15px #060606'}} />
          </div>
          </Fade>

          <Fade top>
          <p style={{textAlign: 'center'}}>
          I'm pretty sexy, I know.
          </p>
          </Fade>
          <Fade top>
          <Button as={Link} className="button" to='/about' >Learn More About Me</Button>
          </Fade>
        </div>
</section>

)

export default SectionThree