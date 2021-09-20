import React, { useState } from 'react';
import Select from 'react-select';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const plotvars = [
  { value: 'snw', label: 'Surface Snow Amount' },
  { value: 'tasmax', label: 'Daily Maximum Near-Surface Air Temperature' },
  { value: 'rss', label: 'Net surface long wave flux' },
  { value: 'clt', label: 'Total Cloud Fraction' },
  { value: 'prc', label: 'Convective Precipitation' },
  { value: 'tas', label: 'Near-Surface Air Temperature' },
  { value: 'tasmin', label: 'Daily Minimum Near-Surface Air Temperature' },
  { value: 'wsgsmax', label: 'Daily Maximum Near-Surface Wind Speed of Gust' },
  { value: 'psl', label: 'Sea Level Pressure' },
  { value: 'pr', label: 'Precipitation' },
  { value: 'sfcWind', label: 'Near-Surface Wind Speed' },
  { value: 'hurs', label: 'Near-Surface Relative humidity' },
  { value: 'uas', label: 'Eastward Near-Surface Wind' },
  { value: 'vas', label: 'Northward Near-Surface Wind ' },
  { value: 'prsn', label: 'Snowfall Flux' },
  { value: 'rls', label: 'Net surface long wave flux' }
];

const evalagainsts = [
  { value: 'HadUK-grid', label: 'HadUK-grid' },
  { value: 'ECMWF-ERAINT', label: 'ECMWF-ERAINT' }
]

const regmodels = [
  { value: 'ALADIN63', label: 'ALADIN63' },
  { value: 'COSMO-crCLIM-v1-1', label: 'COSMO-crCLIM-v1-1' },
  { value: 'WRF381P', label: 'WRF381P' },
  { value: 'REMO2015', label: 'REMO2015' },
  { value: 'RCA4', label: 'RCA4' },
  { value: 'RACMO22E', label: 'RACMO22E' },
  { value: 'HIRHAM5', label: 'HIRHAM5' },
  { value: 'HadREM3-GA7-05', label: 'HadREM3-GA7-05' },
  { value: 'RegCM4-6', label: 'RegCM4-6' },
  { value: 'CCLM4-8-17', label: 'CCLM4-8-17' }
]

const timeperiods = [
  { value: 'Jan', label: 'January' },
  { value: 'Feb', label: 'February' },
  { value: 'Mar', label: 'March' },
  { value: 'Apr', label: 'April' },
  { value: 'May', label: 'May' },
  { value: 'Jun', label: 'June' },
  { value: 'Jul', label: 'July' },
  { value: 'Aug', label: 'August' },
  { value: 'Sep', label: 'September' },
  { value: 'Oct', label: 'October' },
  { value: 'Nov', label: 'November' },
  { value: 'Dec', label: 'December' },
  { value: 'DJF', label: 'DJF' },
  { value: 'MAM', label: 'MAM' },
  { value: 'JJA', label: 'JJA' },
  { value: 'SON', label: 'SON' }
]


function OptionsRow({data}){

  const [plotvar, setPlotvar] = useState({});
  const [evalagainst, setEvalagainst] = useState({});
  const [regmodel, setRegmodel] = useState({});
  const [timeperiod, setTimeperiod] = useState({});

  return(
    <Row className="pt-4">
       <Col>
         <Select
           options={plotvars}
           onChange={setPlotvar}
           placeholder="Select variable"
           />
       </Col>
       <Col>
         <Select
           options={evalagainsts}
           onChange={setEvalagainst}
           placeholder="Select model to evaluate against"
           />
       </Col>
       <Col>
         <Select
           options={regmodels}
           onChange={setRegmodel}
           placeholder="Select regional model"
           />
       </Col>
       <Col>
         <Select
           options={timeperiods}
           onChange={setTimeperiod}
           placeholder="Select time period"
           />
       </Col>
     </Row>
  );
};

export default OptionsRow;