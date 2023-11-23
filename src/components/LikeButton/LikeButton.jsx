import axios from 'axios'
import Button from '@mui/material/Button';

function LikeButton ({likes, imgId, getImgs}) {
    const addLike = () => {
        axios.put(`/gallery/like/${imgId}`) 
        .then(response => {
            getImgs()
          })
          .catch(err => {
            alert('error adding like');
            console.log(err);
          })
    }

    return (
        <Button
            variant="outlined"
            color="secondary"
            onClick={addLike} 
            data-testid="like">
                {likes} Likes! 👍
        </Button>
    )
}

export default LikeButton;

