import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import India from "./component/India";
import Up from "./component/Up";
import States from "./component/States";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={India} />
          <Route path="/up" component={Up} />
          <Route path="/states" component={States} />
        </Switch>
        <Footer />
      </Router>

      {/*<Header/>
    <India/>
    <Up/>
    <States/>*/}
    </>
  );
}

export default App;
