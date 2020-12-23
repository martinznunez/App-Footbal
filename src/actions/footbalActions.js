import {
  OBTENER_VALUE,
  GUARDAR_BUSQUEDA_EXITO,
  OBTENER_BUSQUEDA_ERROR,
  FETCH_EXITO,
} from "../types/index";

export function obtenerConsultaGet(data) {
  return (dispatch) => {
    dispatch(fetchResultado(data));
  };
}

export function obtenerConsultaGetError(error) {
  return (dispatch) => {
    dispatch(obtenerSolicitudError(true));
  };
}

export function obtenerValoresInputs(datosInputs) {
  return (dispatch) => {
    dispatch(agregandoDatosInput());

    try {
      dispatch(guardarSolicitudExito(datosInputs));
    } catch (error) {
      console.log(error);
    }
  };
}

const agregandoDatosInput = () => ({
  type: OBTENER_VALUE,
});

const guardarSolicitudExito = (datosInputs) => ({
  type: GUARDAR_BUSQUEDA_EXITO,
  payload: datosInputs,
});

const obtenerSolicitudError = (estado) => ({
  type: OBTENER_BUSQUEDA_ERROR,
  payload: estado,
});

const fetchResultado = (data) => ({
  type: FETCH_EXITO,
  payload: data,
});
