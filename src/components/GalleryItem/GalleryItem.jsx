import { useState } from 'react';
import LikeButton from "../LikeButton/LikeButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';

function GalleryItem({img, getImgs}) {
  const [displayDescription, setDisplayDescription] = useState(false)

  const toggleDescription = () => {
    setDisplayDescription(!displayDescription)
  }

  const displayToggle = () => {
    if (displayDescription) {
      return (
        <Typography className="descriptionBox" variant="body2" color="text.secondary">
            {img.description}
        </Typography>
      )
    } 
    else {
      return (
        <>
          <img width="230" height="235" src={img.url}/>
        </>
      )
    }
  }

  return (
    <>
    <div
      data-testid="galleryItem"
      className="gallery-item">
        <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {img.title}
          </Typography>
          <CardActionArea>
          <div
            data-testid="toggle"
            className="image-box" 
            onClick={toggleDescription}>
                {displayToggle()}
          </div>
          </CardActionArea>
        </CardContent>
      <CardActions>
        <LikeButton 
            likes={img.likes}
            imgId={img.id}
            getImgs={getImgs}/>
        <DeleteButton 
            imgId={img.id}
            getImgs={getImgs}/>
      </CardActions>  
    </Card>
    </div>
    </>
  )
}

export default GalleryItem;