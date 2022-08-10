import React, { useState, useEffect } from "react";
import UserCards from "./userCards";
import UserCardsContainer from "./AllUserCardsContainer";

// Functions
import { getAllUsers, getAllUsersById } from "../Functions/getAllUsers";

export default function Welcome() {
  const [usersData, setUsersData] = useState([]);
  const [friendsData, setFriendsData] = useState([]);

  const pullUsers = () => {
    getAllUsers() // api function
      .then((res) => setUsersData(res))
      .catch((err) => console.log(err));
  };

  const getAllUsersById = () => {
    getAllUsers() // api function
      .then((res) => setFriendsData(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    pullUsers();
    getAllUsersById();
  }, []); // this is the dependancy array. [] means it will run once when the page opens

  
  return (
    <div>
      <h1>Welcome to Pair Up!</h1>
      <div className="cardsContainer">
        <UserCardsContainer usersData={friendsData} />
      </div>

      <div className="cardsContainer">
        <UserCardsContainer usersData={usersData} />
      </div>
    </div>
  );
}
