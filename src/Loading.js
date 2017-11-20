import React from 'react';
import { Row } from 'react-bootstrap';

const Loading = () => (
  <div className="loading-container">
    <i className="fa fa-spinner fa-pulse fa-spin fa-5x loading" aria-hidden="true"></i>
    <div className="typewriter">
      <h2>Adding holiday cheer...</h2>

    </div>
  </div>
);

export default Loading;