import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// ROUTES 
import LandingPage from '../components/landing-page';
import DemoPage from '../components/blog-posts';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Provider store={this.props.store}>
          <BrowserRouter>
            <div className="page-content">
              <Switch>
                <Route path="/" component={LandingPage} exact />
                <Route path="/posts" component={DemoPage} exact />
              </Switch>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}
