import styled from "styled-components";

const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 40px 20px;
`;

const Title = styled.h1 `
  font-size: 30px;
`;

const HandImage = styled.img `
  width: 90%;
  height: 45vh;
  border-radius: 10px;
`;
const Box = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;
const ColumnBox = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
flex-direction: column;
`
const NoteButtonsBox = styled.div `
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 40px;
`;

export {
    HandImage,
    Title,
    Container,
    Box,
    NoteButtonsBox,
    ColumnBox
};