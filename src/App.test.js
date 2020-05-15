import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("renders ContactForm without crashing", () => {
  render(<ContactForm />);
});

test("name input field exists", () => {
  const { getByTestId } = render(<ContactForm />);
  getByTestId("nameInput");
});

test("last name input field exists", () => {
  const { getByTestId } = render(<ContactForm />);
  getByTestId("lastNameInput");
});
test("email input field exists", () => {
  const { getByTestId } = render(<ContactForm />);
  getByTestId("emailInput");
});
test("submit button works", async () => {
  const firstName = "Tom";
  const lastName = "Myspace";
  const email = "tom@myspace.com";
  const { getByTestId, getByText } = render(<ContactForm />);

  const submit = getByTestId("submitButton");

  fireEvent.click(submit);
});
