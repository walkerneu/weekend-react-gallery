import axios from 'axios'

function UploadForm () {

    return (
        <>
        <form 
            action="/gallery/upload" 
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
                placeholder="Image Name" 
                name="name" />
            <input 
                type="text" 
                placeholder="Image Description" 
                name="description" />
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