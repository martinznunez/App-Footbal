import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Tabla from "../components/Tabla";
import { Provider } from "react-redux";
import store from "../store";
import {
  obtenerJugadoresFiltrados,
  obtenerConsultaGetError,
} from "../selectors/players";

// test("Renderizado correcto cuando no hay datos", () => {
//   render(
//     <Provider store={store}>
//       <Tabla />
//     </Provider>
//   );

//   const alertaMensaje = screen.getByTestId("alerta-mensaje");

//   expect(alertaMensaje.textContent).toBe("No hay Resultados para la busqueda");
// });

// jest.mock("../selectors/players", () => ({
//   obtenerJugadoresFiltrados: jest.fn(),
// }));

jest.mock("../selectors/players", () => ({
  obtenerConsultaGetError: jest.fn(),
}));

test("Renderizado correcto mensaje Error", () => {
  render(
    <Provider store={store}>
      <Tabla />
    </Provider>
  );

  const error = screen.getByTestId("error");

  expect(error.tagName).toBe("DIV");
});

// test.only("Renderizado correcto cuando hay datos", () => {
//   const nombreJugadorUno = "test 1";
//   const posicionJugadorUno = "arquero";

//   obtenerJugadoresFiltrados.mockImplementation(() => {
//     return [
//       {
//         name: nombreJugadorUno,
//         position: posicionJugadorUno,
//         age: "29",
//         nationality: "argentino",
//       },
//       {
//         name: "test2",
//         position: "defensor",
//         age: "23",
//         nationality: "italiano",
//       },
//     ];
//   });

//   render(
//     <Provider store={store}>
//       <Tabla />
//     </Provider>
//   );

//   const primerFilaNombre = screen.getByText(nombreJugadorUno);
//   const primerFilaPosicion = screen.getByText(posicionJugadorUno);

//   expect(primerFilaNombre.textContent).toBe(nombreJugadorUno);
//   expect(primerFilaPosicion.textContent).toBe(posicionJugadorUno);
// });
