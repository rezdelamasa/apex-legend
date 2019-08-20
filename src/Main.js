import React, {Component} from 'react';
import './Main.css';
import CategoryList from './CategoryList.js';
import Legends from './Legends.js';

class Main extends Component {  

	constructor(props) {
		super(props);

		this.state = {
			screenState: "Main",
		};

		this.changeScreenState = this.changeScreenState.bind(this);
	}

	changeScreenState(children) {

		const { screenState } = { ...this.state };

		let currentState = screenState;

		currentState = children;

		console.log(currentState);

		this.setState({
			screenState: currentState
		});

	}

	// <CategoryList
	// 				changeScreenState={(children) => this.changeScreenState(children)}
	// 			/>

  render() {

		const {
			legends
		} = this.props;

    return (
      <div className="Main">
        <Legends
        	legends={legends}
        />
				
      </div>
    );
  }

}

export default Main;