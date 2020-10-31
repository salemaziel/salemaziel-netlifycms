import React from 'react';

import HomeHeader from './HomeHeader';
import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree'

import SDCoast from '../../../assets/images/sdcoast-1920x1438.jpg'


const HomePage = () => (
  <>

          <HomeHeader
          bgImage={SDCoast}
          />
          <SectionThree />

  </>
);

export default HomePage;
