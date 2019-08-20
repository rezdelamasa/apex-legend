import React, {Component} from 'react';
import './CategoryCard.css';

class CategoryCard extends Component {  

  constructor(props) {
    super(props);
  }

  handleClick = (children) => {
    this.props.changeScreenState(children);
  }

  render() {

    const {
      className,
      imageURL,
      children
    } = this.props;

    return (
      <li className={className} onClick={() => this.handleClick(children)}>
        <h1 className="category__heading">{children}</h1>
      </li>
    );
  }

}

export default CategoryCard;