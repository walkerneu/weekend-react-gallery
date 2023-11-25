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

    const uploadImg = () => {    
        axios.post('/gallery/upload', { 
            title: titleInput, 
            description: descriptionInput
        })
          .then(response => {
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
        setTimeout(function(){
            location.reload();
        }, 2500);   
    }

    return (
        <>
        <form 
            action="/upload" 
            encType="multipart/form-data" 
            method="post">
            <div className="form-group">
            <h2>Upload a Photo of One of my Cats from your computer:</h2>
            <Button 
                component="label" 
                variant="contained">
                    Choose File
                <VisuallyHiddenInput 
                type="file" 
                className="form-control-file" 
                name="uploaded_file" />
            </Button> 
            <TextField
                id="standard-basic" 
                label="Title" 
                variant="standard"
                type="text" 
                className="form-control" 
                placeholder="Image Title" 
                name="name"
                />
            <TextField
                id="standard-basic" 
                label="Description" 
                variant="standard" 
                type="text" 
                placeholder="Image Description" 
                name="description"
                />
            <Button 
                variant="outlined"
                color="secondary"
                type="submit" 
                value="Submit Photo" 
                className="btn btn-default"
                onClick={handleSubmit}>
                    Upload Photo</Button>
            </div>
        </form>
        </>
    )
}

export default UploadForm;