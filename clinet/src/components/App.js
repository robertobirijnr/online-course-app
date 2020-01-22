import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Header from "./comomon/Header";
import CoursePage from "./Courses/CoursesPage";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <div className="conatiner-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/courses" component={CoursePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
