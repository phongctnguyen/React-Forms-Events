import React from 'react';

export default () => {
  return (
    <div className='ui segment'>
      <form className='ui form'>
        <div className='field'>
          <label>Image Search</label>
          <input type='text' onChange={(e) => console.log(e.target.value)} />
        </div>
      </form>
    </div>
  );
};
