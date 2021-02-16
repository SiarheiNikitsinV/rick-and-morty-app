import React from "react";
import ListItem from "./ListItem";
import S from "./styled";

const List = ({ characters }) => (
  <S.ListWrapper>
    <h1>"Rick and Morty Universe"</h1>
    <S.ListContainer>
      {characters.results.map((character) => {
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
  </S.ListWrapper>
);

export default List;
