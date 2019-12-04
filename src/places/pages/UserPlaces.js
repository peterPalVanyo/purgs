import React from "react";
import PlaceList from "../components/PlaceList";
import {useParams} from 'react-router-dom'

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
    title: "the hell of envious 2",
    description:
      "middle-class teen personal purgatories among suburtian society",
    imageUrl:
      "https://cdn.pixabay.com/photo/2019/11/15/05/23/dog-4627679__340.png",
    address: "Budaors",
    location: { lat: 47.4621, lng: 18.953 },
    creator: "u2"
  }
];
const UserPlaces = () => {
  // in app: /:userId/places
  const userId = useParams().userId
  const filteredPlaces = DUMMYPLACES.filter(place => place.creator === userId)
  return <PlaceList items={filteredPlaces} />;
};

export default UserPlaces;
