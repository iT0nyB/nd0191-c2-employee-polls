import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { legacy_createStore as createStore } from "redux";
import combineReducers from "../reducers";
import applyMiddleware from "../middleware";
import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import Login from "../components/Login";
import NewQuestion from "./NewQuestion";
const store = createStore(combineReducers, applyMiddleware);

describe("Login", () => {
  it("will verify that the Login Component is loaded", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText("Login to the Employee Polls")).toBeInTheDocument();
  });

  it("will verify that the Login button should be disabled until username and password is entered", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText("Login")).toBeDisabled();
  });

  it("will match snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});

describe("_saveQuestion", () => {
  it("will verify that the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function.", async () => {
    const mockQues = {
      optionOneText: "Code in VS Code",
      optionTwoText: "Code in Ultra edit",
      author: "abaptiste",
    };
    const savedQuestion = await _saveQuestion(mockQues);
    expect(savedQuestion).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        author: mockQues.author,
        optionOne: { text: mockQues.optionOneText, votes: [] },
        optionTwo: { text: mockQues.optionTwoText, votes: [] },
        timestamp: expect.any(Number),
      })
    );
  });
  it("will verify that an error is returned if incorrect data is passed to the function.", async () => {
    const invalideMockQues = {
      optionTwoText: "Node",
      author: "sarahedo",
    };
    await expect(_saveQuestion(invalideMockQues)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  it("will verify that true is returned when correctly formatted data is passed to the function", async () => {
    const answer = _saveQuestionAnswer({
      authedUser: "sarahedo",
      qid: "vthrdm985a262al8qx3do",
      answer: "optionTwo",
    });

    await expect(answer).resolves.toEqual(true);
  });
  it("will verify that an error is returned if incorrect data is passed to the function", async () => {
    const invalidMockAns = {
      authedUser: "user",
      qid: "qid",
    };
    await expect(_saveQuestionAnswer(invalidMockAns)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});

describe("LeaderBoard", () => {
  it("will verify that the Leaderboard is displayed when the link is clicked", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );

    const username = screen.getByTestId("username");
    const password = screen.getByTestId("password");
    expect(screen.getByTestId("login-button")).toBeDisabled();

    fireEvent.change(username, { target: { value: "abaptiste" } });
    fireEvent.change(password, { target: { value: "pass246" } });
    expect(screen.getByTestId("login-button")).not.toBeDisabled();

    const button = screen.getByTestId("login-button");
    fireEvent.click(button);
    expect(screen.getByText("New Questions")).toBeInTheDocument();

    const link = screen.getByTestId("leaderboard-link");
    fireEvent.click(link);
    expect(screen.getByText("LeaderBoard")).toBeInTheDocument();
  });
});

describe("NewQuestion", () => {
  it("will verify that the clicking a new tab will show the new question form", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );

    const link = screen.getByTestId("question-link");

    fireEvent.click(link);
    expect(screen.getByText("Would You Rather")).toBeInTheDocument();
    expect(screen.getByTestId("optionOneText")).toBeInTheDocument();
    expect(screen.getByTestId("optionTwoText")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
  });
  it("will verify that the submit button on the New Question is disabled until both options are filled", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <NewQuestion />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByTestId("submit-button")).toBeDisabled();

    const option1 = screen.getByTestId("optionOneText");
    const option2 = screen.getByTestId("optionTwoText");

    fireEvent.change(option1, { target: { value: "Test Driven Development" } });
    fireEvent.change(option2, { target: { value: "API First Development" } });

    expect(screen.getByTestId("submit-button")).not.toBeDisabled();
  });
});
