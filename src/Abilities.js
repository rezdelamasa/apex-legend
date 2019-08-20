import React, {Component} from 'react';
import './Abilities.css';
import Ability from './Ability';

class Abilities extends Component {

  // <div className="Profile__abilities">
  //         <div className="Abilities__ultimate">
  //           <img className="Ability__image Ability__image--ultimate" src={legend.abilities[2].image} alt=""/>
  //         </div>
  //         <div className="Abilities">
  //           <img className="Ability__image Ability__image--passive" src={legend.abilities[1].image} alt=""/>
  //           <img className="Ability__image Ability__image--tactical" src={legend.abilities[0].image} alt=""/>                
  //         </div>
  //       </div>

  render() {

    const {
      legend,
    } = this.props;

    return (
      <div className="Abilities">
        {legend.abilities.map(ability =>
          <Ability
            type={ability.type}
            name={ability.name}
            image={ability.image}
            description={ability.description}
          />
        )}
      </div>
    );
  }

}

export default Abilities;