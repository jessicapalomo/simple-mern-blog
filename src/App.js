import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Article from "./components/articles/Article";
import Articles from "./components/articles/Articles";
import ArticlesForm from "./components/articles/ArticlesForm";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Container>
          <Switch>
            <Route path="/articles/new" component={ArticlesForm} />
            <Route path="/articles/:articleId/edit" component={ArticlesForm} />
            <Route path="/articles/:articleId" component={Article} />
            <Route path="/articles" component={Articles} />
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
