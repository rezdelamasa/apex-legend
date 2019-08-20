import React, {Component} from 'react';
import './Ability.css';

class Ability extends Component {

  // <div className="Profile__abilities">
  //         <div className="Ability__ultimate">
  //           <img className="Ability__image Ability__image--ultimate" src={legend.abilities[2].image} alt=""/>
  //         </div>
  //         <div className="Ability">
  //           <img className="Ability__image Ability__image--passive" src={legend.abilities[1].image} alt=""/>
  //           <img className="Ability__image Ability__image--tactical" src={legend.abilities[0].image} alt=""/>                
  //         </div>
  //       </div>

  render() {

    const {
      type,
      name,
      description,
      image
    } = this.props;

    return (
      <div className="Ability">
        <h1 className="Ability__type">{type}</h1>
        <img className="Ability__image" src={image} alt=""/>
        <h2 className="Ability__name">{name}</h2>
        <p className="Ability__description">{description}</p>
      </div>
    )
  }

}

export default Ability;