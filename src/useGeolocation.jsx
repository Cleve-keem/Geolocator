import { useState } from "react";

export function useGeolocation(callback) {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { lat, lng } = position;

  function getLocation() {
    callback();

    if (!navigator.geolocation)
      console.log("Your browser does not support geolocation!");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setIsLoading(false);
      },
      function (error) {
        console.error("Error Code:", error.code);
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { lat, lng, isLoading, error, getLocation };
}
