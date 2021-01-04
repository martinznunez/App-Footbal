import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
// import { Provider } from "react-redux";

test("renders learn react link", () => {
  render(<App />);

  //   console.log(screen.getByTestId("titulo").tagName);

  expect(screen.getByTestId("titulo").tagName).toBe("H1");
});
