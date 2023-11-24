import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

function GalleryForm({getImgs}) {
    let [urlInput, setUrlInput] = useState('')
    let [titleInput, setTitleInput] = useState('')
    let [descriptionInput, setDescriptionInput] = useState('')

    const addImg = () => {    
        axios.post('/gallery', { 
            url: urlInput, 
            title: titleInput, 
            description: descriptionInput
        })
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
                <form 
                    className="gallery-form">
                <h2>Add an Image of one of my cats:</h2>
                    <TextField
                        id="standard-basic" 
                        label="URL" 
                        variant="standard"
                        type="text"
                        placeholder="URL"
                        value={urlInput}
                        onChange={(evt) => setUrlInput(evt.target.value)}
                        />  
                    <TextField
                        id="standard-basic" 
                        label="Title" 
                        variant="standard"
                        type="text"
                        placeholder="Title"
                        value={titleInput}
                        onChange={(evt) => setTitleInput(evt.target.value)}
                        />
                    <TextField
                        id="standard-basic" 
                        label="Description" 
                        variant="standard"
                        type="text"
                        placeholder="Description"
                        value={descriptionInput}
                        onChange={(evt) => setDescriptionInput(evt.target.value)}
                        />
                    <Button 
                        variant="outlined"
                        color="secondary"
                        onClick={handleSubmit}
                    >
                        submit
                    </Button>

                </form>
        
        </>
    )
}
export default GalleryForm;