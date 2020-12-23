import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { useDispatch } from "react-redux";

import getAxios from "../config/axios";

import {
  obtenerValoresInputs,
  obtenerConsultaGet,
  obtenerConsultaGetError,
} from "../actions/footbalActions";

const ContainerNav = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding: 10px;

  input {
    width: 200px;
    padding: 10px;
    margin-top: 10px;
    margin: 10px;
    height: 40px;
  }
  select {
    padding: 10px;
    height: 40px;
  }
`;

const Conatinerfrom = styled.form`
  @media screen and (min-width: 760px) {
    display: flex;
    align-items: center;
    input {
      width: 150px;
      padding: 5px;
    }
  }
`;

const Inputs = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [posicion, setPosicion] = useState("");

  const dispatch = useDispatch();

  const obtenerValue = (datosInputs) =>
    dispatch(obtenerValoresInputs(datosInputs));

  const obtenerData = (data) => dispatch(obtenerConsultaGet(data));

  const getError = (error) => dispatch(obtenerConsultaGetError(error));

  const HashSubmit = (e) => {
    e.preventDefault();

    name.trim();

    obtenerValue({ name, age, posicion });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      const resultado = await getAxios.get();

      obtenerData(resultado.data);
    } catch (error) {
      getError(error);
    }
  }, []);

  return (
    <>
      <ContainerNav>
        <Conatinerfrom onSubmit={HashSubmit}>
          <div>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Player Name"
              value={name}
            />
          </div>
          <div>
            <input
              onChange={(e) => setAge(Number(e.target.value))}
              type="number"
              min="18"
              max="40"
              placeholder="Age"
            />
          </div>
          <select onChange={(e) => setPosicion(e.target.value)}>
            <option value="">--Selecciona categoria--</option>
            <option>Attacking Midfield</option>
            <option>Central Midfield</option>
            <option>Centre-Back</option>
            <option>Centre-Forward</option>
            <option>Defensive Midfield</option>
            <option>Keeper</option>
            <option>Left Midfield</option>
            <option>Left Wing</option>
            <option>Left-Back</option>
            <option>Right-Back</option>
          </select>
          <div>
            <input type="submit" value="Buscar" />
          </div>
        </Conatinerfrom>
      </ContainerNav>
    </>
  );
};

export default Inputs;
