import React from "react";

import styled from "styled-components";

const CONTAINER = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  background-color: #282c34;
  color: white;
  font-size: 3rem;
  text-transform: uppercase;
`;

const About = () => {
  return <CONTAINER>About</CONTAINER>;
};

export default About;
