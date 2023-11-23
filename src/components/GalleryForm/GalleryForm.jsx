import { useState } from 'react';
import axios from 'axios';

function GalleryForm({getImgs}) {
    let [urlInput, setUrlInput] = useState('')
    let [titleInput, setTitleInput] = useState('')
    let [descriptionInput, setDescriptionInput] = useState('')

    const addImg = () => {
    
        axios.post('/gallery', { url: urlInput, title: titleInput, description: descriptionInput})
          .then(response => {
            setUrlInput('');
            setTitleInput('');
            setDescriptionInput('');
            getImgs();
          })
          .catch(err => {
            alert('Error Adding shopping items');
            console.log(err);
          })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        addImg();

    }

    return (
        <>

         <h2>Add an Image of one of my cats:</h2>
                <form 
                    onSubmit={handleSubmit}
                    className="gallery-form">
                <input
                    type="text"
                    placeholder="URL"
                    value={urlInput}
                    onChange={(evt) => setUrlInput(evt.target.value)}
                    />  
                <input
                    type="text"
                    placeholder="Title"
                    value={titleInput}
                    onChange={(evt) => setTitleInput(evt.target.value)}
                    />
                    <input
                    type="text"
                    placeholder="Description"
                    value={descriptionInput}
                    onChange={(evt) => setDescriptionInput(evt.target.value)}
                    />
                    <button>submit</button>

                </form>
        
        </>
    )
}
export default GalleryForm;