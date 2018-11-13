import React, { Fragment } from 'react';

const Child = (
    {
      id,
      about,
      editing,
      onChange,
      editingId,
    }
) => {
  return (
      <div>
        <p onDoubleClick={() => editing(id)}>{about}</p>
        {editingId === id && (
            <textarea
            type="text"
            value={about}
            onChange={(e) => onChange({
              e,
              id,
              about: e.target.value
            })}
          />
        )}
      </div>

  )
};

export default Child;