import React, { useState } from "react";
import FigureRow from "./FigureRow";
import OptionsRow from "./OptionsRow";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function PlotExplorerRow() {
  const [plotvars, setPlotvars] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [periods, setPeriods] = useState([]);
  const [plottypes, setPlottypes] = useState([]);

  return (
    <Container>

      <OptionsRow
        setPlotvars={setPlotvars}
        setSeasons={setSeasons}
        setPeriods={setPeriods}
        setPlottypes={setPlottypes}
      />

      <FigureRow
        plotvars={plotvars}
        seasons={seasons}
        periods={periods}
        plottypes={plottypes}
      />

    </Container>
  );
}
export default PlotExplorerRow;
