import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Profile from "./routes/Profile";
import ManageProfile from "./routes/ManageProfile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/movie">
          <Home />
        </Route>
        <Route path="/ManageProfile">
          <ManageProfile />
        </Route>
        <Route path="/">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
