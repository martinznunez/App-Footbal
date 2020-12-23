import React from "react";

import styled from "@emotion/styled";

const ContainerMensajeError = styled.div`
  background-color: red;
  padding: 10px;
  display: flex;
  justify-content: center;
  margin: 10px;

  p {
    color: #fff;
    font-size: 2rem;
  }
`;

const Error = () => {
  return (
    <ContainerMensajeError>
      <p> Algo salio mal!! </p>
    </ContainerMensajeError>
  );
};

export default Error;
