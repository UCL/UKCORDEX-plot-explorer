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
    console.log(dataRows);
    setDataRows([...dataRows, dataRow]);
  };



  const delDataRow = (index) => {
    console.log(index);
    console.log(dataRows);
    console.log(dataRows.splice(index, 1));
    setDataRows(dataRows.splice(index, 1));
  };

  return (
    <Container>
      {dataRows.map((row, index) => {
        console.log(index);
        if (index==0){
          return (
            <>
              <OptionsRow
                setPlotvar={setPlotvar}
                setEvalagainst={setEvalagainst}
                setRegmodel={setRegmodel}
                setTimeperiod={setTimeperiod}
                row={row}
              />
              <FigureRow
                plotvar={row.plotvar}
                evalagainst={row.evalagainst}
                regmodel={row.regmodel}
                timeperiod={row.timeperiod}
              />
            </>
          );
        }
        else {

        }
        return (
          <>
            <OptionsRow
              setPlotvar={setPlotvar}
              setEvalagainst={setEvalagainst}
              setRegmodel={setRegmodel}
              setTimeperiod={setTimeperiod}
              row={row}
            />
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
          Show plot
        </Button>{" "}
      </Row>
    </Container>
  );
}
export default PlotExplorerRow;
