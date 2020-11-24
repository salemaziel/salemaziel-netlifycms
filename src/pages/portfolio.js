import React from 'react';

import Layout from '../components/Layout';


import PortfolioPage from '../components/PageComponents/Portfolio/PortfolioPage'
import { GatsbySeo } from 'gatsby-plugin-next-seo';


const sections = [
    { id: 'shoptop', name: 'Featured', icon: 'fa-home' },
    { id: 'mygallery', name: 'Gallery', icon: 'fa-th' },
    { id: 'about', name: 'About Me', icon: 'fa-user' },
    { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
  ];

const Portfolio = () => (
    <Layout>
          <GatsbySeo
      title='Portfolio For Services offered by Salem Aziel'
      description='Check out past Web Design and Web Development work'
    />
        

            <PortfolioPage />


    </Layout>
)

export default Portfolio