import React, { Component } from 'react';
import { FormControl, FormGroup, Col, Row, Grid } from 'react-bootstrap';

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
      <form>
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <FormGroup>
                <FormControl
                  type="text"
                  value={this.state.fromName}
                  placeholder="Name"
                  onChange={(event) => { this.setState({ fromName: event.target.value }) }}
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="text"
                  value={this.state.fromAddressLine1}
                  placeholder="Address Line 1"
                  onChange={(event) => { this.setState({ fromAddressLine1: event.target.value }) }}
                />
              </FormGroup>
              <FormGroup>

                <FormControl
                  type="text"
                  value={this.state.fromAddressLine2}
                  placeholder="Address Line 2"
                  onChange={(event) => { this.setState({ fromAddressLine2: event.target.value }) }}
                />
              </FormGroup>

              <FormGroup>

                <FormControl
                  type="text"
                  value={this.state.fromAddressCity}
                  placeholder="City"
                  onChange={(event) => { this.setState({ fromAddressCity: event.target.value }) }}
                />
              </FormGroup>

              <Row>
                <Col md={6}>
                  <FormGroup>

                    <FormControl
                      type="text"
                      value={this.state.fromAddressState}
                      placeholder="State"
                      onChange={(event) => { this.setState({ fromAddressState: event.target.value }) }}
                    />
                  </FormGroup>

                </Col>
                <Col md={6}>
                  <FormGroup>

                    <FormControl
                      type="text"
                      value={this.state.fromAddressZip}
                      placeholder="Zip Code"
                      onChange={(event) => { this.setState({ fromAddressZip: event.target.value }) }}
                    />
                  </FormGroup>

                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </form>
    )
  }
}

