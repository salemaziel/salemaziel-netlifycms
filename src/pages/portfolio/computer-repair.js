import React from 'react';

import Layout from '../../components/Layout';
//import PageFooter from '../../components/PageFooter';
import SideBar from '../../components/Sidebar/index'
//import Shoptop from '../assets/images/sdcoast.jpg'
import CompRepairPage from '../../components/PageComponents/Portfolio/CompRepair/Page'


const CompRepair = () => (
    <Layout>
        <SideBar /*sections={sections}*/ />
        

            <CompRepairPage/>


    </Layout>
)

export default CompRepair