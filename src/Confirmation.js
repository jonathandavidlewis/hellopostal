import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { clearToFields } from './actions/actions.js'
import Loading from './Loading.js';

class Confirmation extends Component {
  constructor() {
    super();

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    const { dispatch, history } = this.props;

    dispatch(clearToFields())
    history.push('/')
  }

  render() {
    let preview = null;
    let msg = null
    let buttonText = 'Send A Card'
    const { confirmation, isFetching } = this.props;

    if (isFetching) {
      return <Loading />
    }

    if (confirmation.status === 200) {
      msg = (<h3>Your postcard has been sent!</h3>)

      buttonText = 'Send Another Card'

      preview = (
        <div className='preview-post-card'>
          <Image src={confirmation.data.thumbnails[0].large} alt=""/>
          <Image src={confirmation.data.thumbnails[1].large} alt=""/>
        </div>
      )
    }

    return (
      <div>
        {msg}

        <div>
          <Button onClick={this.handleButtonClick}>{buttonText}</Button>
        </div>

        {preview}
      </div>
    );
  }
}

export default withRouter(connect(
  state => ({
    confirmation: state.confirmation,
    isFetching: state.confirmation.isFetching
  })
)(Confirmation))
