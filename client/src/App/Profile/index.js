import React, { Component, useEffect, useState } from 'react';
import ProfileHeader from './profileHeader';
import './profile.css';
import LeftProfileFeed from './LeftProfileFeed/LeftProfileFeed';
import RightSideBar from './RightSideBar/RightSideBar';
import ProfileUser from '../../Components/ProfileUser';
import Loading from '../../Components/Loading';
import ResponsiveAppBarLoggedOut from '../../Components/ResponsiveAppBar';
import ResponsiveAppBarLoggedIn from '../../Components/ResponsiveAppBarLoggedIn';

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
  const [result, setResult] = useState({ user: [] });
  const [info, setInfo] = useState({ user: [] });

  useEffect(() => {
    let config = null;
    if (localStorage.getItem('token') !== null) {
      config = {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      };
    }
    fetch('http://localhost:8080/api/profile/me', config)
      .then((response) => response.json())
      .then((data) => {
        setResult({ user: data });

        // console.log(info, 'info');
        // console.log(result, 'result');
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );

  // setTimeout(getRecords, 1000);
  return (
    <div>
      {localStorage.getItem('token') !== null ? (
        <ResponsiveAppBarLoggedIn />
      ) : (
        <ResponsiveAppBarLoggedOut />
      )}
      {/* <ProfileHeader />
      <div>
        <p>{result.user.fname}</p>
        <p>{result.user.lname}</p>
        <p>{result.user.email}</p>
      </div>

      <ProfileHeader result={result.user} />

      <div className="main-feed-container">
        <LeftProfileFeed />
        <RightSideBar />
      </div> */}
      <ProfileUser info={info} result={result} />
    </div>
  );
};
export default Profile;
