import React from "react";
import { useSelector } from "react-redux";
import { obtenerJugadoresFiltrados } from "../selectors/players";
import styled from "@emotion/styled";
import Error from "./Error";

const MensajeTabla = styled.td`
  font-size: 3rem;
  margin-top: 30px;
  width: 90%;
  position: absolute;
`;

const Tabla = () => {
  const resultadoSelector = useSelector((state) =>
    obtenerJugadoresFiltrados(state)
  );
  const mensajeError = useSelector((state) => state.main.error);

  return (
    <>
      {mensajeError ? (
        <Error />
      ) : (
        <table className="table" data-testid="tabla">
          <thead>
            <tr>
              <th scope="col">Player</th>
              <th scope="col">Position</th>
              <th scope="col">Team</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>
            {resultadoSelector.length > 0 ? (
              resultadoSelector.map((jugador) => (
                <tr key={jugador.name}>
                  <td>{jugador.name}</td>
                  <td>{jugador.position}</td>
                  <td>{jugador.nationality}</td>
                  <td>{jugador.age}</td>
                </tr>
              ))
            ) : (
              <tr>
                <MensajeTabla data-testid="alerta-mensaje">
                  No hay Resultados para la busqueda
                </MensajeTabla>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Tabla;
