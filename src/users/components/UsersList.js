import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElement/Card";

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users here.</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="users-list">
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
