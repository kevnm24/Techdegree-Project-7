import React from 'react';
import GalleryItem from './GalleryItem';
import NoPics from './NoPics';

// this function will determine if data retrieved is greater than 0
const Gallery = props => {

  const results = props.data;
  let pictures;
  if (results.length > 0) {
    pictures = results.map(picture =>
// link is formed by using the map function
      <GalleryItem url={`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`} key={picture.id} />)
//if there are no pictures a message will apear
  } else {
    pictures = <NoPics />
  }

// this renders the html
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
