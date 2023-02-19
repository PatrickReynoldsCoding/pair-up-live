import React, {Link} from 'react'


export default function JoinButton({ projectId }) {

  const joinProject = async (projectId) => {
    let config = null;
    if (localStorage.getItem('token') !== null) {
      config = {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
          "Content-Type": "application/json",
        },
        method: "PATCH"
      };
    }

    try {
      const res = await fetch(`http://localhost:8080/api/projects/joinproject/${projectId}`, config
      ).then(res => {
        console.log(res)
        window.location = "http://localhost:3000/project/home";

      });
  
      // const json = await res.json(); // not sure why this line is needed?
    } catch (err) {}
  };
  

  const handleOnClick = () => {
    joinProject(projectId)
  }

  // to="/project/joinrequestsent"
  return (
    <>

        <button onClick={handleOnClick}>
          JOIN
        </button>
 
    </>
  )
}
