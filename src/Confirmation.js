import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';


class Confirmation extends Component {
  render() {
    const { confirmation } = this.props;
    let preview = null;
    let msg

    if (confirmation.status === 200) {
      preview = (
        <div>
          <Image src={confirmation.data.thumbnails[0].large} alt=""/>
          <Image src={confirmation.data.thumbnails[1].large} alt=""/>
        </div>
      )
    }
    return (
      <div>
        <p> </p>
        {preview}
      </div>
    );
  }
}

export default connect(
  state => ({
    confirmation: state.confirmation
  })
)(Confirmation)
