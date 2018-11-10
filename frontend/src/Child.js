import React, { Fragment } from 'react';

const Child = (
    {
      id,
      about,
      onClick
    }
) => {
  return (
      <div>
        <ul>
          <li>{about}<button onClick={() => onClick({ id, about: 'test' })}>Edit</button></li>
        </ul>
      </div>

  )
};

export default Child;