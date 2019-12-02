import React from "react";
import UsersList from "../components/UsersList";

function Users() {
  const USERS = [
    {
      id: "u1",
      name: "peterpal",
      image:
        "https://cdn.pixabay.com/photo/2019/03/15/16/08/fairy-tales-4057425__340.jpg",
      places: 3
    }
  ];
  return <UsersList items={USERS} />;
}

export default Users;
