import axios from 'axios';

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
        <button onClick={deleteImg}>Remove</button>
      )

}


export default DeleteButton;