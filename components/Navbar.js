import styled from "styled-components";

export default function Navbar() {

  return (
    <Content>
      <h1>
        Space News <span>🛸</span>
      </h1>
      <p>Spaceflight News and Events🚀</p>
    </Content>
  );
}

const Content = styled.nav`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    margin: 0 !important;
    font-weight: bold;
    color: #6c5ce7;
    padding: 0.5em 0;
    span {
      font-weight: normal;
    }
  }
  p {
    font-size: 1.2em;
    color: white;
    font-weight: 600;
  }
  button{
    border: none;
    background-color:white;
  }
`;
