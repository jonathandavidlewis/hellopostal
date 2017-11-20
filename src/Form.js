import _ from 'lodash';
import React, { Component } from 'react';
import { FormControl, FormGroup, Col, Row, Grid, Button } from 'react-bootstrap';
import axios from 'axios';
import { receiveConfirmation, changeFormField } from './actions/actions.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Form extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { form: { formData }, dispatch, history } = this.props;

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
      fd.append(field, formData[field])
    });

    history.push('/confirmation');

    axios.post(
      '/api/cloud/',
      fd,
      { headers: {'Content-type': 'multipart/form-data'} }
    ).then((response)=> {
      console.log('form post success');
      dispatch(receiveConfirmation(response.status, response.data));
      // setTimeout(() => history.push('/confirmation'), 5000)
      // setTimeout(() => window.open(response.data.url,'_blank'), 3000);  //temporarly delay added so PDF can load
    }).catch((err) => console.error(err));
  }

  render() {
    const { dispatch, form: { formData } } = this.props

    return (
      <form onSubmit={this.handleSubmit}>
        <Grid>
          <Row>
            <Col md={6}>
              <h3 className="text-left">To:</h3>
              <FormGroup>
                <FormControl
                  type="text"
                  value={formData.toName}
                  placeholder="Name"
                  onChange={(event) => dispatch(changeFormField('toName', event.target.value))}
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="text"
                  value={formData.toAddressLine1}
                  placeholder="Address Line 1"
                  onChange={(event) => dispatch(changeFormField('toAddressLine1', event.target.value))}
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="text"
                  value={formData.toAddressLine2}
                  placeholder="Address Line 2"
                  onChange={(event) => dispatch(changeFormField('toAddressLine2', event.target.value))}
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="text"
                  value={formData.toAddressCity}
                  placeholder="City"
                  onChange={(event) => dispatch(changeFormField('toAddressCity', event.target.value))}
                />
              </FormGroup>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <FormControl
                      type="text"
                      value={formData.toAddressState}
                      placeholder="State"
                      onChange={(event) => dispatch(changeFormField('toAddressState', event.target.value))}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <FormControl
                      type="text"
                      value={formData.toAddressZip}
                      placeholder="Zip Code"
                      onChange={(event) => dispatch(changeFormField('toAddressZip', event.target.value))}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <FormControl
                  componentClass="textarea"
                  value={formData.toMessage}
                  placeholder="Message"
                  onChange={(event) => dispatch(changeFormField('toMessage', event.target.value))}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <h3 className="text-left">From:</h3>
              <FormGroup>
                <FormControl
                  type="text"
                  value={formData.fromName}
                  placeholder="Name"
                  onChange={(event) => dispatch(changeFormField('fromName', event.target.value))}
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="text"
                  value={formData.fromAddressLine1}
                  placeholder="Address Line 1"
                  onChange={(event) => dispatch(changeFormField('fromAddressLine1', event.target.value))}
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="text"
                  value={formData.fromAddressLine2}
                  placeholder="Address Line 2"
                  onChange={(event) => dispatch(changeFormField('fromAddressLine2', event.target.value))}
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="text"
                  value={formData.fromAddressCity}
                  placeholder="City"
                  onChange={(event) => dispatch(changeFormField('fromAddressCity', event.target.value))}
                />
              </FormGroup>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <FormControl
                      type="text"
                      value={formData.fromAddressState}
                      placeholder="State"
                      onChange={(event) => dispatch(changeFormField('fromAddressState', event.target.value))}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <FormControl
                      type="text"
                      value={formData.fromAddressZip}
                      placeholder="Zip Code"
                      onChange={(event) => dispatch(changeFormField('fromAddressZip', event.target.value))}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <FormControl
                  type="file"
                  onChange={(event) => {
                    dispatch(changeFormField('imageFile', event.target.files[0]));
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

export default withRouter(connect(
  state => ({
    form: state.form
  })
)(Form));
