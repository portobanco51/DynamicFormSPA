import styled from "styled-components";

const AppContainer = styled.div`
  width: clamp(320px, 80vw, 450px);
  margin: 0 auto;
  padding: 1.2rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.1;
`;

const LineDiv = styled.div`
  display: flex;
  gap: unset;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    display: flex;
    gap: 0.5rem;
  }
`;

const Button = styled.button<{ color: string }>`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: ${(props) => props.color};
  margin: 0 0 1rem;
  min-width: 12rem;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: #c9c9c9;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
    border-color: #c9c9c9;
  }
`;

const Div = styled.div`
  width: 100%;
`;

const Input = styled.input`
  color: black;
  background-color: #c9c9c9;
  width: 100%;
  padding: 10px;
  margin: 0.5rem 0 1rem;
  box-sizing: border-box;
`;

const Select = styled.select`
  background-color: #c9c9c9;
  color: black;
  width: 100%;
  padding: 10px;
  margin: 0.5rem 0 1rem;
`;

const Avatar = styled.img`
  height: 5rem;
  border-radius: 50%;
`;

const Link = styled.a`
  font-weight: 500;
  color: #b3b6f8;
  text-decoration: inherit;
  &:hover {
    color: #c0c3f8;
  }
`;

export {
  Title,
  LineDiv,
  Button,
  Div,
  Input,
  Select,
  Link,
  AppContainer,
  Avatar,
};
