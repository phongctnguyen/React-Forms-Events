import React, { useState } from 'react';
import unsplash from '../api/unsplash';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

export default () => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (term) => {
    const { data } = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    setImages(data.results);
  };

  return (
    <div className='ui container' style={{ marginTop: '10px' }}>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};
