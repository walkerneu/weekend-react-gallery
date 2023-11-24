import axios from 'axios'
import { useState } from 'react'

function UploadForm () {

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
        event.preventDefault();
        uploadImg();
    }
    return (
        <>
        <form 
            action="/upload" 
            encType="multipart/form-data" 
            method="post">
            <div className="form-group">
            <h2>Upload a Photo of One of my Cats:</h2>
            <input 
                type="file" 
                className="form-control-file" 
                name="uploaded_file" />
            <input 
                type="text" 
                className="form-control" 
                placeholder="Image Title" 
                name="name"/>
            <input 
                type="text" 
                placeholder="Image Description" 
                name="description"/>
            <input 
                type="submit" 
                value="Submit Photo" 
                className="btn btn-default" />
            </div>
        </form>
        </>
    )
}

export default UploadForm;