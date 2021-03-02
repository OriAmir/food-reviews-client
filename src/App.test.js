import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import configureMockStore from "redux-mock-store";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("app", () => {
  test("check that aoo showing the labels correctly", () => {
    const mockStore = configureMockStore();
    const store = mockStore({ foodList: {} });
    render(
      <Provider store={store}>
         <App />
      </Provider>
    );
    const foodReviewLabel = screen.getByText("Food Reviews");
    expect(foodReviewLabel).toBeInTheDocument();

    const foodListNav = screen.getByText("Food List");
    expect(foodListNav).toBeInTheDocument();

    const foodStatsNav = screen.getByText("Food Statistics");
    expect(foodStatsNav).toBeInTheDocument();

    const revStats = screen.getByText("Reviewers Statistics");
    expect(revStats).toBeInTheDocument();
  });

  test("check that moving between pages working ok", () => {
    const mockStore = configureMockStore();
    const store = mockStore({ foodList: {} });
    render(
      <Provider store={store}>
         <App />
      </Provider>
    );
    global.window = { location: { pathname: null } };

    const foodStatsNav = screen.getByText("Food Statistics");
    fireEvent.click(foodStatsNav);
    expect(global.window.location.pathname).toEqual("/foodStatistics");

    const revStats = screen.getByText("Reviewers Statistics");
    fireEvent.click(revStats);
    expect(global.window.location.pathname).toEqual("/reviewersStatistics");

    const foodListNav = screen.getByText("Food List");
    fireEvent.click(foodListNav);
    expect(global.window.location.pathname).toEqual("/foodList");
  });
});
