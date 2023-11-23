import axios from 'axios';
import Button from '@mui/material/Button';

function DeleteButton({getImgs, imgId}) {

    const deleteImg = () => {
        axios.delete(`/gallery/${imgId}`)
          .then(response => {
            getImgs()
          })
          .catch(err => {
            alert('error deleting image');
            console.log(err);
          })
      }

      return (
        <Button 
            onClick={deleteImg}
            variant="outlined"
            color="error">
                Remove
        </Button>
      )

}


export default DeleteButton;