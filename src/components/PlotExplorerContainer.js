import React, { useState } from "react";
import FigureRow from "./FigureRow";
import OptionsRow from "./OptionsRow";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
function PlotExplorerRow() {
  const [plotvar, setPlotvar] = useState(null);
  const [evalagainst, setEvalagainst] = useState(null);
  const [regmodel, setRegmodel] = useState(null);
  const [timeperiod, setTimeperiod] = useState(null);
  const [dataRows, setDataRows] = useState([]);
  console.log(plotvar, evalagainst, regmodel, timeperiod);
  const addDataRow = () => {
    if (plotvar === null || plotvar === undefined) {
      console.log("error, you didnt make enough selections");
      return;
    }
    const dataRow = {
      plotvar: plotvar,
      evalagainst: evalagainst,
      regmodel: regmodel,
      timeperiod: timeperiod,
    };
    setDataRows([...dataRows, dataRow]);
  };
  return (
    <Container>
      <OptionsRow
        setPlotvar={setPlotvar}
        setEvalagainst={setEvalagainst}
        setRegmodel={setRegmodel}
        setTimeperiod={setTimeperiod}
      />
      {dataRows.map((row) => {
        return (
          <>
            <FigureRow
              plotvar={row.plotvar}
              evalagainst={row.evalagainst}
              regmodel={row.regmodel}
              timeperiod={row.timeperiod}
            />
          </>
        );
      })}
      <Row className="py-5">
        <Button onClick={() => addDataRow()} variant="outline-info">
          Add another plot to compare
        </Button>{" "}
      </Row>
    </Container>
  );
}
export default PlotExplorerRow;
