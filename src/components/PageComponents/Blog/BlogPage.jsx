import React from 'react';

//import HomeHeader from './HomeHeader';
//import SectionTwo from './sectionTwo';
//import SectionThree from './sectionThree'
import SectionTiles from './section2Tiles'
import Announcement from '../../Announcement'

const BlogPage = () => (
  <>
    <div id="main">
    <Announcement
        variant="white"
        text="Sorry, currently redesigning my site. Find out more"
        linkText="here"
        /*linkOnClick={() => {
          // Navigate to pricing page
          //navigateTo("/about");
          <a href="https://youtu.be/dQw4w9WgXcQ" rel="nofollow" />
        }}*/
      />

          <SectionTiles
          title1="My Blog"
          title2="Blog subtitle"
          subdescription="description of my blog"
          />


    </div>

  </>
);

export default BlogPage;
