import React from "react";
import {Grid, Cell, Card,
  CardText, CardTitle, CardActions, Tabs, } from 'react-mdl';

const Show1 = () =>{
  return(

  <div>

        <Grid className="show-trend1" >
            <Cell className="show1-mainbanner" col={8}><img src="successmom.jpg"/> success </Cell>
            <Cell col={3.5}>
               <div className="show1-maincontent">
                    <h3> Haitan Family  </h3>
                    <h6> Season-1 </h6>
                    <h6> Episode - Plite </h6>
               </div>
            </Cell>
        </Grid>


        <Grid className="show1-trend" style={{width: '80%', margin: 'auto'}}>
            <Cell col={4}><img src="jonas.png"/></Cell>
            <Cell col={4}><img src="sejo.jpg"/></Cell>
            <Cell col={4}><img src="successmom.jpg"/></Cell>

        </Grid>
        <Grid className="show1-trend" style={{width: '80%', margin: 'auto'}}>
            <Cell col={3}><img src="jonas.png"/></Cell>
            <Cell col={3}><img src="sejo.jpg"/></Cell>
            <Cell col={3}><img src="successmom.jpg"/></Cell>

        </Grid>

        <Grid className="show-trend" style={{width: '80%', margin: 'auto'}}>
            <Cell col={3}><img src="jonas.png"/>
            <h6>Pastor Jonas</h6></Cell>
            <Cell col={3}><img src="sejo.jpg"/></Cell>
            <Cell col={3}><img src="successmom.jpg"/></Cell>
            <Cell col={3}><img src="jessie1.jpg"/></Cell>
        </Grid>
    </div>



  );
};


export default Show1;
