import React from 'react';

export default ({ images }) => {
  if (!images) {
    return <div></div>;
  }

  return images.map(({id, description, urls}) => {
    return (
      <div key={id}>
        <img alt={description} src={urls.regular} />
      </div>
    );
  });
};
