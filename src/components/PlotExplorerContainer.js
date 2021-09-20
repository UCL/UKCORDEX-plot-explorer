import React, { useState } from 'react';
import FigureRow from './FigureRow';
import OptionsRow from './OptionsRow';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

function PlotExplorerRow({data}){

  const [plotvar, setPlotvar] = useState({});
  const [evalagainst, setEvalagainst] = useState({});
  const [regmodel, setRegmodel] = useState({});
  const [timeperiod, setTimeperiod] = useState({});

  return(
    <Container>
      <OptionsRow
        plotvar={setPlotvar}
        evalagainst={setEvalagainst}
        regmodel={setRegmodel}
        timeperiod={setTimeperiod}
      />
      <FigureRow
        plotvar={plotvar}
        evalagainst={evalagainst}
        regmodel={regmodel}
        timeperiod={timeperiod}/>
      <Row className="py-5">
        <Button
          variant="outline-info"
        >Add another plot to compare</Button>{' '}
      </Row>
    </Container>
  );
};

export default PlotExplorerRow;