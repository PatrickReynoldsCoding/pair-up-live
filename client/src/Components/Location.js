import React, { Component, useEffect, useState } from 'react';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import { motion } from 'framer-motion';

function Location() {
  const [result, setResult] = useState({ user: [] });
  const [isLoading, setIsLoading] = useState(true);
  let position = null;

  useEffect(() => {
    fetch('http://localhost:8080/api/profile/all')
      .then((response) => response.json())
      .then((data) => {
        setResult({ user: data });
        setIsLoading(false);
      });
  }, []);
  if (isLoading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  return (
    <MapContainer
      className="location"
      center={result.user[0].geoLocation.coordinates}
      zoom={14}
      style={{ height: 600, width: 1000 }}
    >
      <style>{'body { background-color: white; }'}</style>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/bright/256/{z}/{x}/{y}.png?key=fsB39cCVxZgXS53pflUQ"
      />

      {result.user.map((location, index) => (
        <div key={index}>
          <Marker
            position={location.geoLocation.coordinates}
            icon={
              new Icon({
                className: 'image-icon',
                iconUrl: `${location.picture}`,
                iconSize: [35, 41],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>
              <b>
                {location.fname} {location.lname}
              </b>{' '}
              <br /> <br />
              Software Engineering student
              <br /> at Makers Academy. <br /> <br />
              <a href={'/profile/' + location._id}>View Profile </a>
            </Popup>
          </Marker>
        </div>
      ))}
    </MapContainer>
  );
}

export default Location;
