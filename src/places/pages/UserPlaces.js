import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7482438,
      lng: -73.9853889,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Statue of Liberty",
    description: "One of the most famous monuments in NY!",
    imageUrl: "https://static.toiimg.com/photo/77757963.cms",
    address: "93 Ferry St, Jersey City, NJ 07307",
    location: {
      lat: 40.689249400000016,
      lng: -74.04450039999998,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const { userId } = useParams();
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
