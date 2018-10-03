import React from "react";
import {Grid, Cell} from 'react-mdl';
import {Link} from "react-router-dom"

  const Home = () =>{
    return(
      <div className="home-grid" style={{width:'100%', margin: 'auto'}}>

          <img src="successmom.jpg"/>

        <div>

        </div>

        {/* trending content*/}

          <h2 className="trending" >Trend/Sak-Sho</h2>

          {/* shows grid here, these are the trending events*/}
    <Grid className="home-trend" style={{width:'100%'}}>
        <Cell col={3}><img src="jessie1.jpg"/></Cell>
        <Cell col={3}><img src="jean.jpg"/></Cell>
        <Cell col={3}>
          <Link to="./show1"> <img src="jessie1.jpg"/> </Link>
       </Cell>

          <Cell col={3}><img src="sejo.jpg"/></Cell>
    </Grid>

      </div>
    );
  };


  export default Home;
