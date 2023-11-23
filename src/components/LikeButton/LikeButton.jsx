import axios from 'axios'

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
        <button
            onClick={addLike} 
            data-testid="like">
                {likes} Likes! 👍
        </button>
    )
}

export default LikeButton;

