import React, { Component } from 'react';
import Map from './components/Map.js';
import Filters from './components/Filters.js'
import './App.css';

// list of numeric fields in spreadsheet
let numFields = ['CURRENT_LAND', 'CURRENT_BUILDING', 'CURRENT_TOTAL', 'COMM_UNITS','ESTIMATED_MARKET_VALUE', 'PRIOR_LAND', 'PRIOR_BUILDING', 'PRIOR_TOTAL', 
                'PPRIOR LAND', 'PPRIOR_BUILDING', 'PPRIOR_TOTAL', 'FULL_BATH', 'HALF_BATH', 'AC', 'FIREPLACE', 'AGE', 'BUILDING_SQ_FT', 'LAND_SQ_FT', 
                'BLDG_SF', 'UNITS_TOT', 'MULTI_SALE', 'SALE_AMOUNT', 'APPEAL_A_PROPAV', 'APPEAL_A_CURRAV'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      currentProperties:[],
      selectedFilters:[]
    }
  }

  componentDidMount() {
    // parse csv file
    let csvFile = require('./model/Enodo_Skills_Assessment_Data_File_4-19-2019.csv');
    let Papa = require("papaparse/papaparse.min.js");
    Papa.parse(csvFile, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: this.updatePropertiesData
    })
  }

  // cleanse parsed data and assign to state
  updatePropertiesData = (result) => {
    const data = result.data;
    // convert numeric fields to int or trim categorical fields
    data.forEach(property => {
      for (const prop in property) {
        if (numFields.includes(prop)) {
          property[prop] = parseInt(property[prop]);
        } else {
          property[prop] = property[prop].trim();
        }
      };
    });
    this.setState({
      data,
      currentProperties: data
    });
  }

  // grab each filter key and add to filters object with an empty array as placeholder for values
  createFilterKeys(dataArr, filterObj) {
    let keysArray = Object.keys(dataArr);
        keysArray.forEach(key => {
            filterObj[key] = [];
        })
  }

  // Loop through props and assign unique values to filter key arrays
  populateFiltersObject(dataArr, filterObj) {
    dataArr.forEach((property) => {
      for (let key in property) {
        if (!filterObj[key].includes(property[key])) {
          filterObj[key].push(property[key]);
        }
      }
    })
  }

  // Build out and sort filters data
  createFiltersData() {
    let filtersData = {}
    this.createFilterKeys(this.state.data[0], filtersData);
    this.populateFiltersObject(this.state.data, filtersData);
    for (let key in filtersData) {
      filtersData[key].sort();
    }
    return (filtersData);
  }

  // run query and update list of properties when filter button is selected
  hanldeFilterSubmit = (filtersObj, callback) => {
    let newResults = this.state.data.filter((property) => {
      let isMatch = true;
      for (let filter in filtersObj) {
        if (typeof filtersObj[filter] === 'string') {
          if (property[filter] !== filtersObj[filter]) {
            isMatch = false;
            break;
          }
        } else {
          let min = parseInt(filtersObj[filter].Min);
          let max = parseInt(filtersObj[filter].Max);
          if (property[filter] < min || property[filter] > max) {
            isMatch = false;
            break;
          }
        }
      }
      return isMatch
    })
    this.setState({
      currentProperties: newResults
    })
  }

  render() {
    let red = '<$400,000 '
    let yellow = ' $400,000 - $800,000 '
    let green = ' >$800,000'
    return (
      <div className="app">
        <p className='property-count'>Number of properties: <span>{this.state.currentProperties.length}</span></p>
        <div className="container-div">
          {this.state.data.length > 0 && <Filters properties={this.state.data} filters={this.createFiltersData()} handleFilterChange={this.handleFilterChange} handleFilterSubmit={this.hanldeFilterSubmit} />}
          <div id="map-container">
            {this.state.data.length > 0 && <Map properties={this.state.currentProperties} />}
          </div>
        </div>
        <p className='emv-legend'><strong>Estimated Market Value: </strong><span id='red'>{red}</span>|<span id='yellow'>{yellow}</span>|<span id='green'>{green}</span></p>
      </div>
    );
  }
}

export default App;
