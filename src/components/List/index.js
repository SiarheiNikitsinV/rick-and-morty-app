import React from "react";

const List = ({ add, counter, characters }) => (
  <div>
    {console.log("ST: ", characters)}
    <div>Counter: {counter}</div>
    <div>
      <button onClick={add}>Add 1</button>
    </div>
    <div>
      {characters.map((character) => {
        const {
          id,
          image,
          name,
          status,
          species,
          gender,
          location,
        } = character;
        return (
          <div key={`${id}`}>
            <img src={`${image}`} />
            <p>Name: {`${name}`}</p>
            <p>Status: {`${status}`}</p>
            <p>Species: {`${species}`}</p>
            <p>Gender: {`${gender}`}</p>
            <p>Location: {`${location.name}`}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export default List;
