
import axios from 'axios';
import { useState, useEffect } from 'react';
import {BASE_URL} from './utils/api';
import './App.css';


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => setData(response.data.data));
      
  }, []);

  return (
    <>
      
      <div className= "main">
        <h1>Premier League Teams</h1>
        {data.length > 0
          ? data.map(({attributes, id}) => {
              return (
              <div className= "Team-Info">
                <p key={id}>Team name: {attributes.team_name}</p>
                <img key={id} src={attributes.img_url}/> 
                <p key={id}>Stadium name: {attributes.stadium.data.attributes.stadium_name}</p>
                <p key={id}>Stadium capacits: {attributes.stadium.data.attributes.Capacity}</p>
              </div>)

            })
          : null}
      </div>
    </>
  );
};

export default App;
