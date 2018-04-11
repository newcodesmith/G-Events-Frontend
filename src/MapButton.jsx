import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MapButton extends Component {
  render() {
    return (
      // <div id="map-btn-component" className="flex-column">
      //   <h2>Map of the building</h2>
      //   <Link to="/maps"><button type="button" to="/maps">MAPS</button></Link>
      // </div>
      <Link to="/maps">
        <div className="landing-btns mx-auto">
            <button type="button" className="landing btn-lg btn-primary">FLOOR MAP</button>
        </div>
    </Link>
    );
  }
};

export default MapButton;
