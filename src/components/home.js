import React from "react";
import {Grid, Cell, title} from 'react-mdl';
import {Link} from "react-router-dom";
  const Home = () =>{
    return(



      <div className="home-grid" style={{width:'100%', margin: 'auto'}}>
          <img src="successmom.jpg"/>
          {/* trending content*/}
           <h2 className="trending" >Trend/Sak-Sho</h2>
              {/* shows grid here, these are the trending events*/}
          <Grid className="home-trend" style={{width:'100%', margin: 'auto'}}>
                      <Cell className="trenditem" >
                        <img src="guy.jpg"/>
                        
                      </Cell>

                      <Cell className="trenditem" >
                        <Link to="./show1"> <img src="jean.jpg"/> </Link>
                     </Cell>

                     <Cell className="trenditem" >
                       <Link to="./show1"> <img src="sejo.jpg"/> </Link>

                    </Cell>


                    <Cell className="trenditem" >
                      <Link to="./show1"> <img src="jessie1.jpg"/> </Link>

                   </Cell>
          </Grid>
      </div>
    );
  };


  export default Home;
