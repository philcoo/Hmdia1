import React from "react";
import {Grid, Cell,Card, CardTitle, CardActions, Tabs, } from 'react-mdl';

const Shows = () =>{
  return(

  <div>

        <Grid className="show-trend" style={{width: '80%', margin: 'auto'}}>
            <Cell col={3}><img src="jonas.png"/></Cell>
            <Cell col={3}><img src="sejo.jpg"/></Cell>
            <Cell col={3}><img src="successmom.jpg"/></Cell>
            <Cell col={3}><img src="jessie1.jpg"/></Cell>
        </Grid>


        <Grid className="show-trend" style={{width: '80%', margin: 'auto'}}>
            <Cell col={3}><img src="jessi2.jpg"/></Cell>
            <Cell col={3}><img src="jean.jpg"/></Cell>
            <Cell col={3}><img src="guy.jpg"/></Cell>
            <Cell col={3}><img src="momson.jpg"/></Cell>
        </Grid>



        <Grid className="show-trend" style={{width: '80%', margin: 'auto'}}>
            <Cell col={3}><img src="jessie1.jpg"/></Cell>
            <Cell col={3}><img src="brikem.png"/></Cell>
            <Cell col={3}><img src="dadmcd.jpg"/></Cell>
            <Cell col={3}><img src="sejo.jpg"/></Cell>
        </Grid>
    </div>

  );
};


export default Shows;
