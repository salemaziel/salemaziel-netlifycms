import React from 'react';

import Layout from '../../components/Layout';
import PageFooter from '../../components/PageFooter';
import SideBar from '../../components/Sidebar/index'
//import Shoptop from '../assets/images/sdcoast.jpg'
import ServerPage from '../../components/PageComponents/Portfolio/Server/Page'




const ServerInstalls = () => (
    <Layout>
        <SideBar /*sections={sections}*/ />
        <ServerPage />


    </Layout>
)

export default ServerInstalls