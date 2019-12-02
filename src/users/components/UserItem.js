import React from "react";
import "./UserItem.css";

const UserItem = props => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
            <img src={props.image} alt={props.name} />
        </div>
        <di className='user-item__info'>
            <h2>{props.name}</h2>
            <h3>{props.places} {props.places===1?'place':'places'}</h3>
        </di>
      </div>
    </li>
  );
};

export default UserItem;
