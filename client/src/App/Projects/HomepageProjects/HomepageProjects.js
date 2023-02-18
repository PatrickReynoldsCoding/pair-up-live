import React, { useState, useEffect } from "react";
import ProjectPostCardContainer from "../ProjectPostCards/ProjectPostCardContainer";
import ResponsiveAppBarLoggedOut from "../../../Components/ResponsiveAppBarLoggedOut";
import ResponsiveAppBarLoggedIn from "../../../Components/ResponsiveAppBarLoggedIn";
import "./ProjectCard.css";
// Functions
import {
  getAllProjects,
  getAllProjectsById,
} from "../../Functions/getProjects";

export default function HomepageProjects() {
  const [projects, setProjects] = useState(null);
  const [myProjects, setMyProjects] = useState(null);

  const pullProjects = () => {
    getAllProjects() // api function
      .then((res) => setProjects(res))
      .catch((err) => console.log(err));
  };

  const pullMyProjects = () => {
    getAllProjectsById() // api function
      .then((res) => setMyProjects(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    pullMyProjects();
    pullProjects();
  }, []); // this is the dependency array. [] means it will run once when the page opens

  if (projects != null) {
    console.log(projects);
    return (
      <>
        {localStorage.getItem("token") !== null ? (
          <ResponsiveAppBarLoggedIn />
        ) : (
          <ResponsiveAppBarLoggedOut />
        )}
        <div className="sub-title">
          <h2>My Projects</h2>
        </div>
        {projects ? (
          <div className="ProjectCardContainer">
            <ProjectPostCardContainer projects={myProjects} />
          </div>
        ) : null}

        <div className="sub-title">
          <h2>All Projects</h2>
        </div>
        {projects && myProjects && (
          <div className="ProjectCardContainer">
            <ProjectPostCardContainer projects={projects} />
          </div>
        )}
      </>
    );
  }
}
