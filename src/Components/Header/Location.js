import React, { useMemo, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import Geocode from "react-geocode";

export default function Location() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC2oiSPojfOitlyqKREmTuS91Wrvm9S7L8",
  });

  if (!isLoaded) return "Loading...";

  return <Map />;
}

function Map() {
  const [lat, setLat] = useState(40);
  const [lng, setLng] = useState(-80);

  function getAddress() {
    Geocode.setApiKey("AIzaSyC2oiSPojfOitlyqKREmTuS91Wrvm9S7L8");
    Geocode.fromLatLng(lat, lng).then(
      (response) => {
        // const address = response.results[0].formatted_address;
        // console.log(address);
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  function showPosition(position) {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);

    console.log(lat);
    console.log(lng);
    getAddress();
  }
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("");
    }
  }
  const center = useMemo(() => ({ lat: lat, lng: lng }), [lat]);
  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  // const mapRef=React.useRef<google.maps.Map<Element> | null>(null)

  return (
    <>
      <GoogleMap
        zoom={5}
        center={center}
        mapContainerStyle={{ width: "100%", height: "80vh" }}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
      </GoogleMap>
      <img
        src="https://f.nooncdn.com/s/app/com/noon/images/map_locateme_en.svg"
        alt=""
        onClick={getLocation}
      />
      {/* <button onClick={getLocation}>Location</button> */}
    </>
  );
}
