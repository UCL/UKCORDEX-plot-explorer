import React, { useState } from "react";
import FigureRow from "./FigureRow";
import OptionsRow from "./OptionsRow";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function PlotExplorerRow() {
  const [plotvar, setPlotvar] = useState(null);
  const [season, setSeason] = useState(null);
  const [period, setPeriod] = useState(null);
  const [plottype, setPlottype] = useState(null);

  return (
    <Container>

      <OptionsRow
        setPlotvar={setPlotvar}
        setSeason={setSeason}
        setPeriod={setPeriod}
        setPlottype={setPlottype}
      />

      <FigureRow
        plotvar={plotvar}
        season={season}
        period={period}
        plottype={plottype}
      />

    </Container>
  );
}
export default PlotExplorerRow;
