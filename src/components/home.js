import React from "react";
import {Grid, Cell, title} from 'react-mdl';
import {Link} from "react-router-dom";
  const Home = () =>{
    return(



      <div className="home-grid" style={{width:'100%', margin: 'auto'}}>
          <img src="laugh.png"/>

          {/* trending content*/}
           <h2 className="trending" >Trend/Sak-Sho</h2>
              {/* shows grid here, these are the trending events*/}
          <Grid className="home-trend">
                      <Cell className="trenditem" >
                        <img src="guy.jpg"/>

                      </Cell>
                      <Cell className="trenditem" >
                        <Link to="./show1"> <img src="jonas.png"/> </Link>
                     </Cell>
                     <Cell className="trenditem" >
                       <Link to="./show1"> <img src="jonas.png"/> </Link>
                    </Cell>
                    <Cell className="trenditem" >
                      <Link to="./show1"> <img src="jonas.png"/> </Link>
                   </Cell>  
          </Grid>
          <Grid className="home-trend">
                      <Cell className="trenditem" >
                        <img src="rihanna.png"/>
                      </Cell>
                      <Cell className="trenditem" >
                        <Link to="./show1"> <img src="jonas.png"/> </Link>
                     </Cell>
                     <Cell className="trenditem" >
                       <Link to="./show1"> <img src="jonas.png"/> </Link>
                    </Cell>  <Cell className="trenditem" >
                        <Link to="./show1"> <img src="jonas.png"/> </Link>
                     </Cell>

          </Grid>

          <div className="footr">
          <p>Haitian A. Production, Copyright &copy; 2018 </p>
          </div>

      </div>
    );
  };


  export default Home;
