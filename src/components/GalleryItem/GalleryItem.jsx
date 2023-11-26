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
        <CardMedia
          component="img"
          height="250"
          width="250"
          image={img.url}
        />
      )
    }
  }

  return (

    <div
      data-testid="galleryItem"
      className="gallery-item">
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {img.title}
          </Typography>
          <div
            data-testid="toggle"
            className="image-box" 
            onClick={toggleDescription}>
                {displayToggle()}
          </div>
        </CardContent>
      </CardActionArea>
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
  )
}

export default GalleryItem;