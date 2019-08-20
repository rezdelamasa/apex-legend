import React, {Component} from 'react';
import './Bio.css';

class Bio extends Component {

  render() {

    const {
      legend,
    } = this.props;

    return (
      <div className="Bio">
        <div className="Bio__section">
          <h3 className="Bio__heading">Real Name</h3>
          <p className="Bio__text">{legend.bio["Real Name"]}</p>
        </div>
        <div className="Bio__section">
          <h3 className="Bio__heading">Age</h3>
          <p className="Bio__text">{legend.bio["Age"]}</p>
        </div>
        <div className="Bio__section">
          <h3 className="Bio__heading">Home World</h3>
          <p className="Bio__text">{legend.bio["Home World"]}</p>
        </div>
      </div>
    );
  }

}

export default Bio;