import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      fromName: '',
      fromAddressLine1: '',
      fromAddressLine2: '',
      fromAddressCity: '',
      fromAddressState: '',
      fromAddressZip: '',
    };
  }

  render() {
    return (
      <div className="container">
        <form>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              type="text"
              value={this.state.fromName}
              placeholder="Name"
              onChange={(event) => { this.setState({ fromName: event.target.value }) }}
            />
            <ControlLabel>Address Line 1</ControlLabel>
            <FormControl
              type="text"
              value={this.state.fromAddressLine1}
              placeholder="Address Line 1"
              onChange={(event) => { this.setState({ fromAddressLine1: event.target.value }) }}
            />
            <ControlLabel>Address Line 2</ControlLabel>
            <FormControl
              type="text"
              value={this.state.fromAddressLine2}
              placeholder="Address Line 2"
              onChange={(event) => { this.setState({ fromAddressLine2: event.target.value }) }}
            />
            <ControlLabel>City</ControlLabel>
            <FormControl
              type="text"
              value={this.state.fromAddressCity}
              placeholder="City"
              onChange={(event) => { this.setState({ fromAddressCity: event.target.value }) }}
            />
            <ControlLabel>State</ControlLabel>
            <FormControl
              type="text"
              value={this.state.fromAddressState}
              placeholder="State"
              onChange={(event) => { this.setState({ fromAddressState: event.target.value }) }}
            />
            <ControlLabel>Zip Code</ControlLabel>
            <FormControl
              type="text"
              value={this.state.fromAddressZip}
              placeholder="Zip Code"
              onChange={(event) => { this.setState({ fromAddressZip: event.target.value }) }}
            />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    </div>
    )
  }
}

