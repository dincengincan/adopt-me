import React, { useEffect, useState } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundaries";
import { navigate } from "@reach/router";
import Modal from "./Modal";

const Details = props => {
  const [name, setName] = useState();
  const [animal, setAnimal] = useState();
  const [location, setLocation] = useState();
  const [description, setDescription] = useState();
  const [media, setMedia] = useState();
  const [breed, setBreed] = useState();
  const [loading, setLoading] = useState(true);
  const [showModal, setModal] = useState(false);
  const [url, setUrl] = useState();

  useEffect(() => {
    pet.animal(props.id).then(({ animal }) => {
      setUrl(animal.url);
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

  const toggleModal = () => {
    setModal(!showModal);
  };

  const adopt = () => {
    navigate(url);
  };

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <div className="details">
      <Carousel media={media} />
      <div>
        <h1>{name} </h1>
        <h2>{`${animal} - ${breed} - ${location}`} </h2>
        <button onClick={toggleModal}>Adopt {name}</button>
        <p>{description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Woukd you like tou adopt {name}?</h1>
              <div className="buttons">
                <button onClick={adopt}>Yes</button>
                <button onClick={toggleModal}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
