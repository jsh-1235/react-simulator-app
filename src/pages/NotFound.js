import { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";

const CONTAINER = styled.div`
  height: 100vh;
  background-color: #282c34;
  color: white;
`;

const CONTENTS = styled.div`
  position: relative;
  height: 50vh;
  top: 25vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  align-items: center;
`;

const HEADER = styled.span`
  color: white;
  font-size: 3rem;
`;

const LINKER = styled.span`
  text-decoration: none;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
  padding: 10px;

  &:hover {
    background-color: #42a5f5;
    transition-property: background-color;
    transition-duration: 0.5s;
  }

  &:active {
    background-color: #0077c2;
    transition-property: background-color;
    transition-duration: 0.5s;
  }
`;

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    // window.history.replaceState("/", null);

    console.log(window.history);

    return () => {};
  }, []);

  return (
    <CONTAINER>
      <CONTENTS>
        <HEADER>404 Not Found</HEADER>
        <LINKER
          onClick={(e) => {
            navigate("/", { replace: true });

            // window.history.go(-1);
          }}>
          Go to Home
        </LINKER>
      </CONTENTS>
    </CONTAINER>
  );
}
