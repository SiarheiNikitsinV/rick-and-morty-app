import React from "react";
import PropTypes from "prop-types";
import S from "./styled";

const ItemInfo = ({ first, second }) => (
  <S.ItemInfo>
    <span>{first}</span>: {second}
  </S.ItemInfo>
);

ItemInfo.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
};

const ListItem = ({ image, name, status, species, gender, location }) => {
  const entities = [
    {
      f: "Name",
      s: name,
    },
    {
      f: "Status",
      s: status,
    },
    {
      f: "Species",
      s: species,
    },
    {
      f: "Gender",
      s: gender,
    },
    {
      f: "Location",
      s: location,
    },
  ];

  return (
    <S.ItemContainer>
      <S.ItemImage>
        <img src={image} alt={name} />
      </S.ItemImage>

      <S.ItemEntities>
        {entities.map((i) => (
          <ItemInfo first={i.f} second={i.s} key={i.f} />
        ))}
      </S.ItemEntities>
    </S.ItemContainer>
  );
};

ListItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default ListItem;
