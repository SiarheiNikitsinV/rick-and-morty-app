import styled from "styled-components";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-transform: uppercase;
    text-shadow: 2px 2px 2px #000000;
    margin: 50px auto;
    color: white;
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

export default {
  ListWrapper,
  ListContainer,
};
