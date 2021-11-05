import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';

function FigureRow({plotvar, season, period, plottype}){

  if ([plotvar, season, period, plottype].some(el => el === null)) {
    console.log("error, you didnt make enough selections");
    return(null);
  }
  else {
    return(
      <Row className="py-4">
         <Figure>
           <Figure.Image
             alt="Image NOT found"
             src={`${process.env.PUBLIC_URL}/images/${plotvar.value}/${plottype.value}_${plotvar.value}_${season.value}_${period.value}.png`}
           />
         </Figure>
       </Row>
    );
  }
};

export default FigureRow;
