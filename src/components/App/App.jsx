import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

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
      <div data-testid="app">
        <header>
          <h1>My Sweet Pets and One Goat:</h1>
        </header>
        <div 
        data-testid="galleryList"
        className="ItemList">
        <GalleryList 
          imgGroup={imgGroup}
          getImgs={getImgs}
        />
        </div>
      </div>
    );
}

export default App;
