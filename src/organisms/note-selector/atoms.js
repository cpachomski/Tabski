import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 200;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  background: #000;
  padding: 25px;

  &:hover {
    cursor: auto;
  }
`;

export const Heading = styled.h3`
  color: white;
  margin-top: 0px;
  font-size: 20px;
`;

export const OptionsGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

export const Selection = styled.button`
  border-radius: 100%;
  background-color: #333;
  color: white;
  font-size: 16px;
  width: 40px;
  height: 40px;
  border: none;

  &:hover {
    background-color: #777;
    cursor: pointer;
  }
`;
