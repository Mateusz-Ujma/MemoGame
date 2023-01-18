import Game from 'organism/Game/Game';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Choose from 'organism/Choose/Choose';

const Root = () => {
  const [image, setImage] = useState([]);
  const [number, setNumber] = useState(0);

  const getImage = (data, number) => {
    setImage(data);
    setNumber(number);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Choose image={getImage} />} />
        <Route path="game" element={<Game image={image} number={number} />} />
      </Routes>
    </div>
  );
};

export default Root;
