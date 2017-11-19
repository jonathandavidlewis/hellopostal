import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';


class Confirmation extends Component {
  render() {
    const { confirmation } = this.props;
    let display = (<div>No data</div>);

    if (confirmation.data !== null) {
      display = (
        <div>
          <Image src={confirmation.data.thumbnails[0].large} alt=""/>
          <Image src={confirmation.data.thumbnails[1].large} alt=""/>
        </div>
      )
    }
    return display;
  }
}

export default connect(
  state => ({
    confirmation: state.confirmation
  })
)(Confirmation)
