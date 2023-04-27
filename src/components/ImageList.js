import ImageShow from "./ImageShow";

function ImageList({ images }) {
  // function to map rendered images
  const renderedImages = images.map((image) => {
    return <ImageShow image={image} />;
  });
  // image objects have ids as a property which we are focusing in
  return <div>{renderedImages}</div>;
}

export default ImageList;
