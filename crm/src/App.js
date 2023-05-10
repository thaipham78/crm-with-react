import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/layout/app_layout/AppLayout";
import Login from "./components/pages/login/Login.js";
import PageNotFound from "./components/pages/page_not_found/PageNotFound.js";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* */}

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/404">
          <PageNotFound />
        </Route>

        <Route path="/">
          <AppLayout />
        </Route>

        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
