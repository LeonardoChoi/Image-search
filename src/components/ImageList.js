import ImageShow from "./ImageShow";

function ImageList({ images }) {
  // image objects have ids as a property which we are focusing in
  return <div>ImageList: {images.length}</div>;
}

export default ImageList;
