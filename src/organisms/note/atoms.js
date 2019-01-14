import styled from "styled-components";

export const Square = styled.div`
  height: 40px;
  width: 40px;
  position: relative;

  &:hover {
    cursor: pointer;

    > span {
      transform: translateY(-50%) scaleY(3);
    }
  }

  > ul {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

export const Line = styled.span`
  position: absolute;
  top: 50%;
  left: 0px;
  height: 2px;
  width: 100%;
  background-color: black;
  transform: translateY(-50%) scaleY(1);
`;

export const Dot = styled.div`
  position: absolute;
  z-index: 10;
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 26px;
  border-radius: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: black;
`;
