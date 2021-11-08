import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';

function FigureRow({plotvars, seasons, periods, plottypes}){

  if ([plotvars, seasons, periods, plottypes].some(ar => ar.length === 0)) {
    console.log("error, you didnt make enough selections");
    return(null);
  }
  else {
    return(
      <>
        {plotvars.map(plotvar => (
          seasons.map(season => (
            periods.map(period => (
              plottypes.map(plottype => (
                <Row className="py-4">
                  <Figure>
                    <Figure.Image
                     alt="Image NOT found"
                     src={`${process.env.PUBLIC_URL}/images/${plotvar.value}/${plottype.value}_${plotvar.value}_${season.value}_${period.value}.png`}
                    />
                  </Figure>
                </Row>
              ))
            ))
          ))
        ))}
      </>
    );
  }
};


export default FigureRow;
