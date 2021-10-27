import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = ({ images }) => {
  return (
    <div className="image-list" >
      {images.map(({ id, urls: { regular }, description }) => {
        return <ImageCard key={id} src={regular} alt={description} />
      })}
    </div>
  )
}

export default ImageList;