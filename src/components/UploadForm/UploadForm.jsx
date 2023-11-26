import axios from 'axios'
import { useState } from 'react'
import { styled } from '@mui/material/styles';
import { TextField, Button  } from '@mui/material';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function UploadForm ({ getImgs }) {

    let [titleInput, setTitleInput] = useState('')
    let [descriptionInput, setDescriptionInput] = useState('')
    let [fileInput, setFileInput] = useState('');
    const fileForm = new FormData ();

    const uploadImg = () => {
        fileForm.append("name", titleInput);
        fileForm.append("description", descriptionInput);
        fileForm.append("file", fileInput);
        console.log("fileForm", fileForm);    
        axios.post('/upload', fileForm)
          .then(response => {
            setTitleInput('');
            setDescriptionInput('');
            getImgs();
          })
          .catch(err => {
            alert('Error uploading image!');
            console.log(err);
          })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        uploadImg();  
    }

    return (
        <>
        <form>
            <div className="form-group">
            <h2>Upload a Photo of One of my Cats from your computer:</h2>
            <Button 
                component="label" 
                variant="contained">
                Choose File
                <VisuallyHiddenInput 
                    type="file" 
                    className="form-control-file" 
                    name="uploaded_file"
                    onChange={(evt) => setFileInput(evt.target.files[0])} />
            </Button> 
            <TextField
                id="standard-basic" 
                label="Title" 
                variant="standard"
                type="text" 
                className="form-control" 
                placeholder="Image Title" 
                name="name"
                value={titleInput}
                onChange={(evt) => setTitleInput(evt.target.value)}/>
            <TextField
                id="standard-basic" 
                label="Description" 
                variant="standard" 
                type="text" 
                placeholder="Image Description" 
                name="description"
                value={descriptionInput}
                onChange={(evt) => setDescriptionInput(evt.target.value)}/>
            <Button 
                variant="outlined"
                color="secondary"
                type="submit" 
                value="Submit Photo" 
                onClick={handleSubmit}>
                    Upload Photo
            </Button>
            </div>
        </form>
        </>
    )
}

export default UploadForm;