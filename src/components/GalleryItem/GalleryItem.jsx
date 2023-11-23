import { useState } from 'react';
import LikeButton from "../LikeButton/LikeButton";

function GalleryItem({img, getImgs}) {
  const [displayDescription, setDisplayDescription] = useState(false)

  const toggleDescription = () => {
    setDisplayDescription(!displayDescription)
  }

  const displayToggle = () => {
    if (displayDescription) {
      return (
        <div className="descriptionBox" >{img.description}</div>
      )
    } else {
      return (
        <>
          <img width="200" height="200" src={img.url}/>
        </>
      )
    }
  }

  return (
    <div
      data-testid="galleryItem"
      className="Item" 
      >
      <h3>{img.title}</h3>
      <div
        data-testid="toggle" 
        onClick={toggleDescription}
        >
            {displayToggle()}
      </div>
      <LikeButton 
            likes={img.likes}
            imgId={img.id}
            getImgs={getImgs}
        />
    </div>
    



  )
}

export default GalleryItem;