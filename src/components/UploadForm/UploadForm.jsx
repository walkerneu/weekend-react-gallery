import axios from 'axios'

function UploadForm () {

    return (
        <form 
            action="/gallery" 
            encType="multipart/form-data" 
            method="post">
            <div className="form-group">
            <input 
                type="file" 
                className="form-control-file" 
                name="uploaded_file" />
            <input 
                type="text" 
                className="form-control" 
                placeholder="Image Description" 
                name="nspeakers" />
            <input 
                type="submit" 
                value="Submit Photo" 
                className="btn btn-default" />
            </div>
        </form>
    )
}

export default UploadForm;