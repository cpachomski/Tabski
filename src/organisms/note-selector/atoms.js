import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 200;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.9);
  padding: 25px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

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
  margin-bottom: 20px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(${props => props.rows}, 1fr);
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
