import styled from "styled-components";

const ItemContainer = styled.div`
  border: 2px solid grey;
  border-radius: 10px;
  overflow: hidden;
  background: yellow;

  &:hover {
    border-color: red;
    cursor: pointer;
  }
`;

const ItemImage = styled.div`
  img {
    width: 100%;
  }
`;

const ItemInfo = styled.div`
  font-size: 16px;
  margin: 5px 10px;
  span {
    font-weight: bold;
  }
`;

export default {
  ItemContainer,
  ItemImage,
  ItemInfo,
};
