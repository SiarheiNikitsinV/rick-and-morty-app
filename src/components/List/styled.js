import styled from "styled-components";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    text-transform: uppercase;
    margin: 50px auto;
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

export default {
  ListWrapper,
  ListContainer,
};
