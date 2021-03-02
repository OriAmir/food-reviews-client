import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Spinner from "./Components/Common/Spinner/Spinner";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import { Provider } from "react-redux";
import store from "./store/store";

const FoodList = lazy(() => import("./Components/FoodList/FoodList"));
const FoodStatistics = lazy(() =>
  import("./Components/FoodStatistics/FoodStatistics")
);
const ReviewersStatistics = lazy(() =>
  import("./Components/ReviewersStatistics/ReviewersStatistics")
);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/foodList">
            <Suspense fallback={<Spinner />}>
              <FoodList />
            </Suspense>
          </Route>
          <Route exact path="/foodStatistics">
            <Suspense fallback={<Spinner />}>
              <FoodStatistics />
            </Suspense>
          </Route>
          <Route exact path="/reviewersStatistics">
            <Suspense fallback={<Spinner />}>
              <ReviewersStatistics />
            </Suspense>
          </Route>
          <Redirect exact from="/" to="foodList" />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
