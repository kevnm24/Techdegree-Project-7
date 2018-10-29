import React from 'react';

//this will render each image in a list
const GalleryItem = props => {
  return (
    <li className='photo-container ul li'>
      <img className='photo-container ul img' src={props.url} alt='pics' />
    </li>
  );
};

export default GalleryItem;
