import React, { useState } from 'react';
import FigureRow from './FigureRow';
import OptionsRow from './OptionsRow';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

function PlotExplorerRow({data}){

  const getPlotvar = (plotvar) => {
    return (plotvar);
  }

  const getEvalagainst = (evalagainst) => {
    return (evalagainst);
  }

  const getRegmodel = (regmodel) => {
    return (regmodel);
  }

  const getTimeperiod = (timeperiod) => {
    return(timeperiod);
  }

  return(
    <Container>
      <OptionsRow
        getPlotvar={getPlotvar}
        getEvalagainst={getEvalagainst}
        getRegmodel={getRegmodel}
        getTimeperiod={getTimeperiod}
      />
      <FigureRow
        plotvar={getPlotvar}
        evalagainst={getEvalagainst}
        regmodel={getRegmodel}
        timeperiod={getTimeperiod}/>
      <Row className="py-5">
        <Button
          variant="outline-info"
        >Add another plot to compare</Button>{' '}
      </Row>
    </Container>
  );
};

export default PlotExplorerRow;