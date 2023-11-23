function GalleryList ({ imgGroup }) {

    return (
        <>
        {imgGroup.map( img => (
            <div 
            key={img.id}
            data-testid="galleryItem"
            >
              <div>
                <h3>{img.title}</h3>
                <img width="200" height="200" src={img.url}/>
                <p>{img.description}</p>
                <button data-testid="like">{img.likes} Likes! 👍</button>
              </div>
            </div>
          ))}
          </>
    )
}

export default GalleryList;