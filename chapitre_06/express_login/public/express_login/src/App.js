import { BrowserRouter, Switch, Route } from "react-router-dom";
// Import views
import Sign from "./views/sign";
import Login from "./views/login";
import Admin from "./views/admin";
// Import CSS
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/sign" component={Sign} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;