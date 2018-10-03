import React from "react";
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link} from "react-router-dom"
const Navbar = () =>{
  return(
    <div>
    <Layout>
        <Header className="header-color" title="HMEDIA" scroll>
            <Navigation>
              <Link to="/"> HMedia   </Link>
               <Link to="/Shows">Shows </Link>
            </Navigation>
        </Header>
        <Drawer title="HMEDIA">
            <Navigation>
            <Link to="/">HMedia </Link>
             <Link to="/Shows">Shows </Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
  );
};


export default Navbar;
