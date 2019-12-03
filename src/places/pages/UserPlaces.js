import React from "react";
import PlaceList from "../components/PlaceList";
const DUMMYPLACES = [
  {
    id: "p1",
    title: "the hell of envious",
    description:
      "middle-class teen personal purgatories among suburtian society",
    imageUrl:
      "https://cdn.pixabay.com/photo/2019/11/15/05/23/dog-4627679__340.png",
    address: "Budaors",
    location: { lat: 47.4621, lng: 18.953 },
    creator: "u1"
  },
  {
    id: "p2",
    title: "the hell of envious",
    description:
      "middle-class teen personal purgatories among suburtian society",
    imageUrl:
      "https://cdn.pixabay.com/photo/2019/11/15/05/23/dog-4627679__340.png",
    address: "Budaors",
    location: { lat: 47.4621, lng: 18.953 },
    creator: "u1"
  }
];
const UserPlaces = () => {
  return <PlaceList items={DUMMYPLACES} />;
};

export default UserPlaces;
