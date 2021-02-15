import styled from "styled-components";

const ItemContainer = styled.div`
  border: 2px solid red;
`;

const ItemImage = styled.div`
  img {
    width: 100%;
  }
`;

const ItemInfo = styled.div`
  font-size: 18px;
  margin: 5px 10px;
  span {
    // text-transform: uppercase;
    font-weight: bold;
  }
`;

export default {
  ItemContainer,
  ItemImage,
  ItemInfo,
};
