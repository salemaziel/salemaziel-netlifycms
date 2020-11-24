import React from 'react';
import Layout from '../components/Layout';
//import PageFooter from '../components/PageFooter';
//import SideBar from '../components/Sidebar/index';

//import Pic8 from '../assets/images/pic08.jpg';
//import InstagramEmbed from 'react-instagram-embed';

//import '../css/about.css'

import AboutPage from '../components/PageComponents/About/Page.jsx'
import { GatsbySeo } from 'gatsby-plugin-next-seo';



const About = () => (
  <Layout>
        <GatsbySeo
      title='About Salem Aziel'
      description='Salem Aziel: Mexican American Web Developer, Digital Consultat, Jr Systems Admin, and All-Around Chill Ass Dude'
    />


<AboutPage />


  </Layout>
);

export default About;
