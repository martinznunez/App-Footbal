import {
  OBTENER_VALUE,
  GUARDAR_BUSQUEDA_EXITO,
  OBTENER_BUSQUEDA_ERROR,
  FETCH_EXITO,
} from "../types/index";

const initialState = {
  players: [],
  busqueda: {},
  error: null,
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case OBTENER_VALUE:
      return {
        ...state,
        loading: true,
      };

    case GUARDAR_BUSQUEDA_EXITO:
      return {
        ...state,
        loading: false,
        busqueda: action.payload,
      };

    case OBTENER_BUSQUEDA_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case FETCH_EXITO:
      return {
        ...state,
        players: action.payload,
        error: null,
      };

    default:
      return state;
  }
}
