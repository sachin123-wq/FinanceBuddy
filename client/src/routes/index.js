import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// ROUTES 
import Header from '../components/header';
import LandingPage from '../components/landing-page';
import DemoPage from '../components/blog-posts';
import UserProfile from '../components/profile';
import Quiz from '../components/quiz';
import PageNotFound from '../components/error/page-not-found';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Provider store={this.props.store}>
          <BrowserRouter>
            <Header />
            <div className="page-content">
              <Switch>
                <Route path="/" component={LandingPage} exact />
                <Route path="/posts" component={DemoPage} exact />
                <Route path="/user_profile" component={UserProfile} exact />
                <Route path="/quiz/:quizId" component={Quiz} exact />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}
