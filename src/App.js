import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Questions from "./pages/Questions";
import Intro from "./pages/Intro";
import Finish from "./pages/Finish";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/questions" component={Questions} />
          <Route exact path="/finish" component={Finish} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
