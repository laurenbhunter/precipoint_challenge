/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Photo from "./Photo";

const PhotoContainer = props => {

  const displayPhotos = () => {
    return props.photos.map(photo => {
      return <Photo url={photo.url} />;
    });
  };

  return (

    <section>{displayPhotos()}</section>
  );
};

export default PhotoContainer;
