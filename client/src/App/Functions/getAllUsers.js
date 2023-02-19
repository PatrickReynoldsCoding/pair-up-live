export const getAllUsers = async () => {
  try {
    const res = await fetch("http://localhost:8080/api/profile/all");
    console.log("pulling users")
    return await res.json();
  } catch (err) {}
};

export const getAllUsersById = async () => {
  let config = null;
  if (localStorage.getItem('token') !== null) {
    config = {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
        "Content-Type": "application/json",
      },
      method: "GET",
    };
  }
  try {
    const res = await fetch(`http://localhost:8080/api/user/getfriends`, config);
    console.log("pulling projects by ID")
    return await res.json();
  } catch (err) {}
};