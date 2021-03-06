import styled from "styled-components";

const ItemContainer = styled.div`
  border: 2px solid grey;
  border-radius: 10px;
  overflow: hidden;
  background: yellow;
  display: grid;
  grid-template-columns: 120px auto;
  padding: 5px 5px 0 5px;
  -webkit-box-shadow: 5px 5px 10px -5px #000000;
  box-shadow: 5px 5px 10px -5px #000000;

  &:hover {
    border-color: red;
    cursor: pointer;
  }
`;

const ItemImage = styled.div`
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const ItemEntities = styled.div``;

const ItemInfo = styled.div`
  font-size: 14px;
  margin: 5px 10px;
  span {
    font-weight: bold;
  }
`;

export default {
  ItemContainer,
  ItemImage,
  ItemEntities,
  ItemInfo,
};
