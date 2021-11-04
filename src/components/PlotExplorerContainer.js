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

  const showPlot = () => {
    if (plotvar === null || plotvar === undefined) {
      console.log("error, you didnt make enough selections");
      return;
    }
    const plotSet = {
      plotvar: plotvar,
      season: season,
      period: period,
      plottype: plottype,
    };
    console.log(plotSet);
  };

  console.log(plotvar, season, period, plottype);

  return (
    <Container>
      <OptionsRow
        setPlotvar={setPlotvar}
        setSeason={setSeason}
        setPeriod={setPeriod}
        setPlottype={setPlottype}
      />

      <Row className="py-5">
        <Button onClick={() => showPlot()} variant="outline-info">
          Show plot
        </Button>{" "}
      </Row>
      
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
