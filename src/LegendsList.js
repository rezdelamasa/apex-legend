import React, {Component} from 'react';
import './LegendsList.css';
import Legend from './Legend';

class LegendsList extends Component {

  render() {

		const {
			legends,
			updateHoverState,
      hover
		} = this.props;

    let legendClass;

    return (
      <ul className="LegendsList">
      	{legends.map(legend => {
          if(hover == legend.name) {
            legendClass = "thumbnail-hover thumbnail-click";
            return <Legend
              updateHoverState={updateHoverState}
              legend={legend}
              legendClass={legendClass}
            />
          } else {
            legendClass = "thumbnail-hover";
            return <Legend
              updateHoverState={updateHoverState}
              legend={legend}
              legendClass={legendClass}
            />
          }
        }
        )}
      	
      </ul>
    );
  }

}

export default LegendsList;