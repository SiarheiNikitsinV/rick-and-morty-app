import React from "react";
import ListItem from "./ListItem";
import S from "./styled";

const List = ({ add, counter, characters }) => (
  <div>
    {console.log("ST: ", characters)}
    <div>Counter: {counter}</div>
    <div>
      <button onClick={add}>Add 1</button>
    </div>
    <h1>Rick and Morty characters</h1>
    <S.ListContainer>
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
          <ListItem
            key={id}
            image={image}
            name={name}
            status={status}
            species={species}
            gender={gender}
            location={location.name}
          />
        );
      })}
    </S.ListContainer>
  </div>
);

export default List;
