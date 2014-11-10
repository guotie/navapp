/**
 * Copyright (c) 2014, guotie.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;

var NavTabApp = require('./components/NavTab.react');

var routes = (
  <Routes>
    <Route handler={NavTabApp}>
      <Route name="image" path=":service" handler={Image} addHandlerKey={true} />
    </Route>
  </Routes>
);

React.initializeTouchEvents(true);
React.renderComponent(
  routes,
  document.getElementById('app-navtab')
);
