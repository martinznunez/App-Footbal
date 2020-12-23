import { createSelector } from "reselect";

import moment from "moment";

const busqueda = (state) => state.main.busqueda;
const jugadores = (state) => {
  return state.main.players.map((player) => {
    let age = moment([player.dateOfBirth]).fromNow(true).split(" ")[0];
    player.age = age;
    return player;
  });
};

export const obtenerJugadoresFiltrados = createSelector(
  jugadores,
  busqueda,
  (jugadores, busqueda) => {
    if (busqueda.name || busqueda.age || busqueda.posicion) {
      let jugadoresFiltrados = jugadores.filter((jugador) => {
        return jugador.name.toLowerCase().includes(busqueda.name.toLowerCase());
      });

      if (busqueda.age) {
        const filterAge = jugadoresFiltrados.filter(
          (jugador) => Number(jugador.age) === busqueda.age
        );
        jugadoresFiltrados = filterAge;
      }

      if (busqueda.posicion) {
        const filterPosition = jugadoresFiltrados.filter(
          (jugador) =>
            jugador.position.toLowerCase() === busqueda.posicion.toLowerCase()
        );

        jugadoresFiltrados = filterPosition;
      }

      return jugadoresFiltrados;
    }

    if (!busqueda.name || !busqueda.posicion || !busqueda.age) {
      return jugadores;
    }
  }
);
