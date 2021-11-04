import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';

function FigureRow({plotvar, evalagainst, regmodel, timeperiod}){

  return(
    <Row className="py-4">
       <Figure>
         <Figure.Image
           alt="Image NOT found"
           src={`${process.env.PUBLIC_URL}/images/rmse-decomposition_${plotvar.value}_${evalagainst.value}_${regmodel.value}_${timeperiod.value}.png`}
         />
       </Figure>
     </Row>
  );
};

export default FigureRow;