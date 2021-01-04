import "./App.css";
import styled from "@emotion/styled";
import Inputs from "./components/Inputs";
import Tabla from "./components/Tabla";

import { Provider } from "react-redux";
import store from "./store";

// import Error from "./components/Error";
const ContainerTitulo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
  }
`;

function App() {
  return (
    <>
      <Provider store={store}>
        <ContainerTitulo>
          <h1 data-testid="titulo">footbal Player</h1>
        </ContainerTitulo>
        <div>
          <Inputs />
        </div>
        <div>
          <Tabla />
        </div>
      </Provider>
    </>
  );
}

export default App;
