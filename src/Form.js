import _ from 'lodash';
import React, { Component } from 'react';
import { FormControl, FormGroup, Col, Row, Grid, Button } from 'react-bootstrap';
import axios from 'axios';

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
      toName: '',
      toAddressLine1: '',
      toAddressLine2: '',
      toAddressCity: '',
      toAddressState: '',
      toAddressZip: '',
      toMessage: '',
      imageFile: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const FieldNames = [
      'fromName',
      'fromAddressLine1',
      'fromAddressLine2',
      'fromAddressCity',
      'fromAddressState',
      'fromAddressZip',
      'toName',
      'toAddressLine1',
      'toAddressLine2',
      'toAddressCity',
      'toAddressState',
      'toAddressZip',
      'toMessage',
      'imageFile'
    ]

    let fd = new FormData()

    _.each(FieldNames, (field) => {
      fd.append(field, this.state[field])
    })

    axios.post(
      '/api/cloud/',
      fd,
      { headers: {'Content-type': 'multipart/form-data'} }
    )
      .then((response)=> {
        console.log('form post success');
        setTimeout(() => window.open(response.data.url,'_blank'), 3000);  //temporarly delay added so PDF can load
      })
    .catch((err) => console.error(err));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid>
          <Row>
            <Col md={6}>
              <h3 className="text-left">To:</h3>
              <FormGroup>
                <FormControl
                  type="text"
                  value={this.state.toName}
                  placeholder="Name"
                  onChange={(event) => { this.setState({ toName: event.target.value }) }}
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="text"
                  value={this.state.toAddressLine1}
                  placeholder="Address Line 1"
                  onChange={(event) => { this.setState({ toAddressLine1: event.target.value }) }}
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="text"
                  value={this.state.toAddressLine2}
                  placeholder="Address Line 2"
                  onChange={(event) => { this.setState({ toAddressLine2: event.target.value }) }}
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="text"
                  value={this.state.toAddressCity}
                  placeholder="City"
                  onChange={(event) => { this.setState({ toAddressCity: event.target.value }) }}
                />
              </FormGroup>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <FormControl
                      type="text"
                      value={this.state.toAddressState}
                      placeholder="State"
                      onChange={(event) => { this.setState({ toAddressState: event.target.value }) }}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <FormControl
                      type="text"
                      value={this.state.toAddressZip}
                      placeholder="Zip Code"
                      onChange={(event) => { this.setState({ toAddressZip: event.target.value }) }}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <FormControl
                  componentClass="textarea"
                  value={this.state.toMessage}
                  placeholder="Message"
                  onChange={(event) => { this.setState({ toMessage: event.target.value }) }}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <h3 className="text-left">From:</h3>
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
              <FormGroup>
                <FormControl
                  type="file"
                  onChange={(event) => {
                    this.setState({ imageFile: event.target.files[0] });
                  }}
                />
              </FormGroup>
              <Button className="pull-right" type="submit">Submit</Button>
            </Col>
          </Row>
        </Grid>
      </form>
    )
  }
}
