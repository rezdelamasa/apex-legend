import React, {Component} from 'react';
import './Legends.css';
import LegendsList from './LegendsList';
import Profile from './Profile';

class Legends extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hover: "Bangalore"
    }

    this.updateHoverState = this.updateHoverState.bind(this);
  }

  updateHoverState (legend) {
    this.setState({ hover: legend })
    console.log(legend);
  }

  render() {

    const {
      legends
    } = this.props;

    return (
      <div className="Legends">
        <div className="display-area">
          <img className="display__background" src="https://res.cloudinary.com/rezdelamasa/image/upload/v1566245529/ApexLegend/apex-background.jpg" alt=""/>
          {legends.map(legend => {
            if(this.state.hover == legend.name) {
              return <Profile legend={legend} hover={this.state.hover}/>
            }
          })
        }
        </div>
        <LegendsList
          legends={legends}
          updateHoverState={this.updateHoverState}
          hover={this.state.hover}
        />
      </div>
    );
  }

}

export default Legends;