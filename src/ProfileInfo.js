import React, {Component} from 'react';
import './ProfileInfo.css';
import Bio from './Bio';
import Abilities from './Abilities';

class ProfileInfo extends Component {

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
      <div className="Profile__info">
        <h1 className="Profile__name">{legend.name}</h1>
        <h2 className="Profile__description">{legend.description}</h2>
        <Bio
          legend={legend}
        />
        <p className="Profile__summary">{legend.summary}</p>
        <Abilities
          legend={legend}
        />
      </div>
    );
  }

}

export default ProfileInfo;