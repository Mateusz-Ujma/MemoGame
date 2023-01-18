import React, { useState, useEffect } from 'react';
import { Warframe } from 'assets/CardImage/Warframe/Warframe';
import useImage from 'hooks/useImage';
import { Link } from 'react-router-dom';

const Choose = ({ image }) => {
  const [getImage] = useImage();
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(getImage(Warframe, 12));
  }, []);
  const handleClick = () => {
    image(images, 12);
  };
  return (
    <button onClick={handleClick}>
      <Link to="game">Choose</Link>
    </button>
  );
};

export default Choose;
