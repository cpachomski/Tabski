import styled from 'styled-components';

export const Row = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const SectionName = styled.input`
  border: 1px solid transparent;
  box-sizing: border-box;
  outline: none;
  padding: 10px;
  font-size: 32px;
  width: 100%;

  &:hover,
  &:focus {
    border-color: black;
  }
`;

export const SectionControls = styled.div``;
