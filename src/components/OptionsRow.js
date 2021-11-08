import React, { useState } from 'react';
import Select from 'react-select';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Some of these might not be relevant anymore
const plotvarOptions = [
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

// TODO: This list will be updated as more plots are generated. It covers ~100
// years.
const periodOptions = [
  { value: '19890101-20081231', label: '1989-2008' }
]

// TODO: Check season names are OK with research team as typical users might be
// more familiar with value names e.g. DJF
const seasonOptions = [
  { value: 'DJF', label: 'Winter' },
  { value: 'MAM', label: 'Spring' },
  { value: 'JJA', label: 'Summer' },
  { value: 'SON', label: 'Autumn' }
]

// TODO: More plot types to be added.
const plottypeOptions = [
  { value: 'eval-boxplots', label: 'Box plots' },
  { value: 'eval-maps', label: 'Map plots' },
  { value: 'eval-pca-gcm', label: 'PCA GCM plots' },
  { value: 'eval-pca-rcm', label: 'PCA RCM plots' },
  { value: 'eval-Taylor', label: 'Taylor plots' }
]


function OptionsRow({setPlotvars, setSeasons, setPeriods, setPlottypes}){
/*
  Displays 4 dropdown lists to let user make a selection. Users should be able
  to select several options in each least.
*/
  return(
    <Row className="pt-4">
       <Col>
         <Select
           options={plotvarOptions}
           onChange={setPlotvars}
           placeholder="Select variable"
           isMulti
           />
       </Col>
       <Col>
         <Select
           options={seasonOptions}
           onChange={setSeasons}
           placeholder="Select season"
           isMulti
           />
       </Col>
       <Col>
         <Select
           options={periodOptions}
           onChange={setPeriods}
           placeholder="Select period"
           isMulti
           />
       </Col>
       <Col>
         <Select
           options={plottypeOptions}
           onChange={setPlottypes}
           placeholder="Select plot type"
           isMulti
           />
       </Col>
     </Row>
  );
};

export default OptionsRow;