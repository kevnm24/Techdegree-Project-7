import React from 'react';
import GalleryItem from './GalleryItem.js';
import NoPics from './NoPics.js';

const Gallery = props => {

  const results = props.data;
  let pictures;
  if (results.length > 0) {
    pictures = results.map(picture =>
      <GalleryItem url={`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`} key={picture.id} />)
  } else {
    pictures = <NoPics />
  }

  return (
    <div className='photo-container'>
      <h2>Results</h2>
      <ul className='photo-container ul'>
        {pictures}
      </ul>
    </div>
  );
};

export default Gallery;
