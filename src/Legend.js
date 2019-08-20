import React, {Component} from 'react';
import './Legend.css';

class Legend extends Component {

	render() {

		const {
			legend,
			updateHoverState,
      legendClass
		} = this.props;

  	return (
    	<li 
    		className="Legend" 
    		onClick={() => this.props.updateHoverState(legend.name)}
    	>
 				<img className="thumbnail" src={legend.thumbnailURL} alt=""/>
 				<div className="shadow"></div>
 				<img className={legendClass} src={legend.altThumbnailURL} alt=""/>-
    	</li>
  	);
  }

}

export default Legend;