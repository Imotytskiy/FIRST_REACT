import React from "react";
import GoogleMapReact from "google-map-react";

export default function Container({ selectedEventKey }) {
  console.log("Selected event key:", selectedEventKey);

  const cityCoordinates = {
    0: { lat: 50.4501, lng: 30.5234 },
    2: { lat: 40.4501, lng: 30.5234 },
    3: { lat: 30.4501, lng: 30.5234 },
    4: { lat: 20.4501, lng: 30.5234 },
    5: { lat: 10.4501, lng: 30.5234 },
    6: { lat: 5.4501, lng: 30.5234 },
  };

  const center = cityCoordinates[selectedEventKey] || {
    lat: 50.99835602,
    lng: 10.502627,
  };

  return (
    <div style={{ height: "auto", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        center={center}
        defaultZoom={11}
      ></GoogleMapReact>
    </div>
  );
}
