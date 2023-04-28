import React from "react";

function ImageShow({ image }) {
  return (
    <div>
      <img src={image.urls.small} alt="" />
    </div>
  );
}

export default ImageShow;
