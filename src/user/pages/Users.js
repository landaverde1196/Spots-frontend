import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Alejandro",
      image:
        "https://www.treebo.com/blog/wp-content/uploads/2017/12/baga_beach__north_go_QvVbp.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
