import React, {Component} from 'react';
import './Profile.css'; 
import ProfileInfo from './ProfileInfo';

class Profile extends Component {

  render() {

    const {
      legend,
      hover
    } = this.props;

    let className = "Profile__picture Profile__picture--" + legend.name;

    console.log(legend.mainImgURL);

    let imgStyle = {
      backgroundImage: 'url("' + legend.mainImgURL + '")'
    }

    console.log(imgStyle);
    // <img className="Profile__picture" src={legend.mainImgURL} alt=""/>

    return (
      <div className={"Profile Profile--" + legend.name}>
        <div className="Profile__main">
          <div className={className} style={imgStyle}></div>
          <p className="Profile__quote">{legend.quote}</p>
          <ProfileInfo 
            legend={legend}
          />
        </div>
      </div>
    );
  }

}

export default Profile;