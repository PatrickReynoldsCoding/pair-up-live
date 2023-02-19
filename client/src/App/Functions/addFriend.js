export const addFriend = async (friend, myId) => {
  try {
    const res = await fetch(`http://localhost:8080/api/profile/addfriend/${myId}`, {
      method: "PATCH",
      body: JSON.stringify({
        _id: friend
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

  } catch (err) {}
};
