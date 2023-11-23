import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {

  let [imgGroup, setImgGroup] = useState([]);

  const getImgs = () => {
    axios.get('/gallery')
      .then(response => {
        setImgGroup(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }


  useEffect(() => {
    getImgs()
  }, [])
    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        {imgGroup.map( img => (
          <div key={img.id}>
            <div>
              <h3>{img.title}</h3>
              <img width="200" height="200" src={img.url}/>
              <p>{img.description}</p>
              <button>{img.likes} Likes! 👍</button>
            </div>
          </div>
        ))}
      </div>
    );
}

export default App;
