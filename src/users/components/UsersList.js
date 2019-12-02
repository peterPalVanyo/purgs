import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users here.</h2>
      </div>
    );
  }
  return (
    <ul className='users-list'>
      {props.items.map(item => (
        <UserItem
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name} 
          places={item.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
