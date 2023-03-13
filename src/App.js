import Login from './Login';
import './App.css';
import React, { useEffect, useState } from 'react';
import { getTokenFromURL } from './spotify';
import Homepage from './Components/Homepage';
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  


  useEffect(()=>{
    const hash = getTokenFromURL();
    window.location.hash= "";
    const _token =hash.access_token;

    if(_token) {
      setToken(_token)

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("KJ", user);

        
        
      });

    }
    
    console.log("I HAVE A TOKEN>>>", token)
  },[token]);
  
  return (
    <div className="App">

      {
        token ? <Homepage />:<Login />
      }
      
    
    
      
      
    </div>
  );
}

export default App;
