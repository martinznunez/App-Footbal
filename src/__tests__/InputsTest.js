import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Inputs from "../components/Inputs";
import { Provider } from "react-redux";
import store from "../store";
import * as actions from "../actions/footbalActions";

jest.mock("../actions/footbalActions");

beforeEach(() => {
  jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(() => {}),
  }));
});

test("Renderizado correcto", () => {
  render(
    <Provider store={store}>
      <Inputs />
    </Provider>
  );

  const nameInput = screen.getByTestId("name-input");
  expect(nameInput).toBeTruthy();
});

test("Verificar que se llame el dispatch", () => {
  actions.obtenerValoresInputs.mockReturnValue(() => {});

  render(
    <Provider store={store}>
      <Inputs />
    </Provider>
  );

  const nameInput = screen.getByTestId("name-input");
  const searchButton = screen.getByTestId("btn-submit");
  const ageInput = screen.getByTestId("age-input");
  const selec = screen.getByTestId("selec");

  fireEvent.change(nameInput, { target: { value: "test name" } });
  fireEvent.change(ageInput, { target: { value: "25" } });
  fireEvent.change(selec, { target: { value: "Centre-Back" } });

  fireEvent.click(searchButton);

  expect(actions.obtenerValoresInputs).toHaveBeenCalledWith({
    name: "test name",
    posicion: "Centre-Back",
    age: 25,
  });
});
