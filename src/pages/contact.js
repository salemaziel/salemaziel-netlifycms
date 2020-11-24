import React from 'react';

import ContactPage from '../components/PageComponents/Contact/Page'

import Layout from '../components/Layout';

//import Rgallery from '../components/Rgallery'
//import { Link } from 'gatsby'
import { GatsbySeo } from 'gatsby-plugin-next-seo';

/*const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];*/

const Contact = () => (
  <Layout>
    <GatsbySeo
      title='Contact Salem Aziel'
      description='Get In Touch With Salem Aziel About his Web Design &amp; Web Development Services, Server Installations, Workflow Automations, or Just a Message Saying Whats Up Foo'
    />
         <ContactPage />


  </Layout>
);

export default Contact;
