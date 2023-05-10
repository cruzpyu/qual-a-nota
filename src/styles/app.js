import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 28px;
`;

const HandImage = styled.img`
  width: 75%;
  height: 42vh;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;
const ColumnBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const TextBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  text-align: justify;
  padding: 20px;
  gap: 20px;
`;
const NoteButtonsBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 70%;
`;
const Label = styled.label`
  color: #ffffff;
  font-size: 16px;
  font-weight: normal;
`;
const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.4em 1em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;

  &:hover {
    border-color: #646cff;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

export {
  Label,
  Button,
  HandImage,
  Title,
  Container,
  Box,
  NoteButtonsBox,
  ColumnBox,
  TextBox,
};
