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

const ContainerForm = styled.form`
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

  const obtenerValue = (datosInputs) => {
    dispatch(obtenerValoresInputs(datosInputs));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    name.trim();

    obtenerValue({ name, age, posicion });
  };

  useEffect(() => {
    const handleResult = async () => {
      try {
        const resultado = await getAxios.get();

        dispatch(obtenerConsultaGet(resultado.data));
      } catch (error) {
        dispatch(obtenerConsultaGetError(error));
      }
    };

    handleResult();
  }, [dispatch]);

  return (
    <>
      <ContainerNav>
        <ContainerForm onSubmit={handleSubmit}>
          <div>
            <input
              data-testid="name-input"
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Player Name"
              value={name}
            />
          </div>
          <div>
            <input
              onChange={(e) => setAge(Number(e.target.value))}
              data-testid="age-input"
              type="number"
              min="18"
              max="40"
              placeholder="Age"
            />
          </div>
          <select
            data-testid="selec"
            onChange={(e) => setPosicion(e.target.value)}
          >
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
            <input data-testid="btn-submit" type="submit" value="Buscar" />
          </div>
        </ContainerForm>
      </ContainerNav>
    </>
  );
};

export default Inputs;
