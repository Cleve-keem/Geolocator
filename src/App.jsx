import { useState } from "react";
import { useGeolocation } from "./useGeolocation";
// import './App.css'

function App() {
  const [countRequest, setCountRequest] = useState(0);

  const { lng, lat, isLoading, error, getLocation } = useGeolocation(function () {
    setCountRequest((req) => req + 1);
  });

  return (
    <div className="app">
      <p>hello guys</p>
      <button onClick={getLocation}>Get my Location</button>
      {isLoading && <p>Loading location...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS location:{" "}
          <a href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}>
            {lat} {lng}
          </a>
        </p>
      )}

      <p>You requested location {countRequest} times</p>
    </div>
  );
}

export default App;
