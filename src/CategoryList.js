import React, {Component} from 'react';
import './CategoryList.css';
import CategoryCard from './CategoryCard.js';

class CategoryList extends Component {

  render() {

    const {
      changeScreenState
    } = this.props;

    return (
      <ul className="category-list">
        <CategoryCard 
          className={"category__card category__card--top"}
          changeScreenState={changeScreenState}
        >
          Weaponry
        </CategoryCard>
        <CategoryCard 
          className={"category__card category__card--bottom"}
          changeScreenState={changeScreenState}
        >
          Equipment
        </CategoryCard>
      </ul>
    );
  }

}

export default CategoryList;