import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList ({ imgGroup, getImgs }) {

    return (
        <>
        {imgGroup.map( img => (
            <GalleryItem
                img={img}
                getImgs={getImgs}
                key={img.id}/>
          ))}
          </>
    )
}

export default GalleryList;