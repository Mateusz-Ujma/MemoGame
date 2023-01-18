import React from 'react';
import nextId from 'react-id-generator';

const useImage = () => {
  const getImage = (table, number) => {
    const images = [];
    const imagesOut = [];

    for (let i = 0; i < number / 2; i++) {
      var index = Math.floor(Math.random() * table.length);
      images.push(table[index]);
      images.push(table[index]);
      table.splice(index, 1);
    }
    for (let j = 0; j < number; j++) {
      var index = Math.floor(Math.random() * images.length);
      imagesOut.push(images[index]);
      images.splice(index, 1);
    }

    return imagesOut;
  };
  return [getImage];
};

export default useImage;
