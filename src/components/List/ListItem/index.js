import React from "react";
import PropTypes from "prop-types";
import S from "./styled";

const ListItem = ({ image, name, status, species, gender, location }) => (
  <S.ItemContainer>
    <S.ItemImage>
      <img src={image} />
    </S.ItemImage>

    <S.ItemInfo>
      <span>Name:</span> {name}
    </S.ItemInfo>
    <S.ItemInfo>
      <span>Status:</span> {status}
    </S.ItemInfo>
    <S.ItemInfo>
      <span>Species:</span> {species}
    </S.ItemInfo>
    <S.ItemInfo>
      <span>Gender:</span> {gender}
    </S.ItemInfo>
    <S.ItemInfo>
      <span>Location:</span> {location}
    </S.ItemInfo>
  </S.ItemContainer>
);

ListItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default ListItem;
