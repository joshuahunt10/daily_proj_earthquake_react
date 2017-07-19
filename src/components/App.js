import React, { Component } from 'react';
import '../styles/App.css';

//component import
import EarthquakeList from './Earthquake'
import EarthquakeInfo from './EarthquakeInfo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">
            Earthquakes!
          </div>
        </div>
        <EarthquakeInfo />
        <EarthquakeList />
      </div>
    );
  }
}

export default App;
