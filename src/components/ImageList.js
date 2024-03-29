import ImageShow from "./ImageShow";

function ImageList({ images }) {
  // function to map rendered images
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  // image objects have ids as a property which we are focusing in
  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
