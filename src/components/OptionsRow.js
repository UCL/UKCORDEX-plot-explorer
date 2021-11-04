import React, { useState } from 'react';
import Select from 'react-select';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const plotvars = [
  { value: 'fwd', label: 'Surface Snow Amount' },
  { value: 'tas', label: 'Daily Near-Surface Air Temperature' },
  { value: 'tasmax', label: 'Daily Maximum Near-Surface Air Temperature' },
  { value: 'tasmin', label: 'Daily Minimum Near-Surface Air Temperature' },
  { value: 'tas99', label: 'Daily Near-Surface Air Temperature (Percentile 99)' },
  { value: 'tas01', label: 'Daily Near-Surface Air Temperature (Percenrile 1)' },
  { value: 'pr', label: 'Precipitation' },
  { value: 'r99ptot', label: 'r99ptot' },
  { value: 'sfcWind', label: 'Near-Surface Wind Speed' },
  { value: 'rss', label: 'Net surface long wave flux' },
  { value: 'clt', label: 'Total Cloud Fraction' },
  { value: 'prc', label: 'Convective Precipitation' },
  { value: 'tas', label: 'Near-Surface Air Temperature' },
  { value: 'wsgsmax', label: 'Daily Maximum Near-Surface Wind Speed of Gust' },
  { value: 'psl', label: 'Sea Level Pressure' },
  { value: 'hurs', label: 'Near-Surface Relative humidity' },
  { value: 'uas', label: 'Eastward Near-Surface Wind' },
  { value: 'vas', label: 'Northward Near-Surface Wind ' },
  { value: 'prsn', label: 'Snowfall Flux' },
  { value: 'rls', label: 'Net surface long wave flux' }
];

const periods = [
  { value: '19890101-20081231', label: '1989-2008' }
]

const seasons = [
  { value: 'DJF', label: 'Winter' },
  { value: 'MAM', label: 'Spring' },
  { value: 'JJA', label: 'Summer' },
  { value: 'SON', label: 'Autumn' }
]

const plottypes = [
  { value: 'eval-boxplots', label: 'Box plots' },
  { value: 'eval-maps', label: 'Map plots' },
  { value: 'eval-pca-gcm', label: 'PCA GCM plots' },
  { value: 'eval-pca-rcm', label: 'PCA RCM plots' },
  { value: 'eval-Taylor', label: 'Taylor plots' }
]


function OptionsRow({setPlotvar, setSeason, setPeriod, setPlottype}){

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
           options={seasons}
           onChange={setSeason}
           placeholder="Select season"
           />
       </Col>
       <Col>
         <Select
           options={periods}
           onChange={setPeriod}
           placeholder="Select period"
           />
       </Col>
       <Col>
         <Select
           options={plottypes}
           onChange={setPlottype}
           placeholder="Select plot type"
           />
       </Col>
     </Row>
  );
};

export default OptionsRow;