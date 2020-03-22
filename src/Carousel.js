import React, { useState, useEffect } from "react";

const Carousel = ({ media }) => {
  const [photos, setPhotos] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    setPhotos(photos);
  }, [media]);

  const handleIndexClick = event => {
    setActive(+event.target.dataset.index);
  };

  return (
    <div className="carousel">
      <img src={photos[active]} alt="animal" />
      <div className="carousel-smaller">
        {media.map((photo, index) => (
          // eslint-disable-next-line
          <img
            key={photo.large}
            onClick={handleIndexClick}
            data-index={index}
            src={photo.large}
            className={index === active ? "active" : ""}
            alt="animal thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
