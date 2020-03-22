import React, { useEffect, useState } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";

const Details = props => {
  const [name, setName] = useState();
  const [animal, setAnimal] = useState();
  const [location, setLocation] = useState();
  const [description, setDescription] = useState();
  const [media, setMedia] = useState();
  const [breed, setBreed] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pet.animal(props.id).then(({ animal }) => {
      setName(animal.name);
      setAnimal(animal.type);
      setLocation(
        `${animal.contact.address.city}, ${animal.contact.address.state}`
      );
      setDescription(animal.description);
      setMedia(animal.photos);
      setBreed(animal.breeds.primary);
      setLoading(false);
    }, console.error);
  }, [props.id]);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <div className="details">
      <Carousel media={media} />
      <div>
        <h1>{name} </h1>
        <h2>{`${animal} - ${breed} - ${location}`} </h2>
        <button>Adopt {name}</button>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Details;
