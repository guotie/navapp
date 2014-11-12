/**
 * Copyright (c) 2014, guotie.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var Router = require('react-router'),
	Routes = Router.Routes,
	Route = Router.Route,
	DefaultRoute = Router.DefaultRoute;

var NavTabs = require('./components/Nav.react'),
  Index = require('./components/TabIndex.react'),
  Group = require('./components/TabGroup.react'),
  Forum = require('./components/TabForum.react'),
  My = require('./components/TabMy.react'),

  AddCar = require('./components/AddCar.react'),
  ChooseCarBrand = require('./components/chooseCarBrand.react'),
  ChooseCarType = require('./components/ChooseCarType.react');

var routes = (
  <Routes>
    <Route name="navtabs" path="/" handler={NavTabs}>
      <Route name="index" handler={Index}></Route>
      <Route name="group" handler={Group}></Route>
      <Route name="forum" handler={Forum}></Route>
      <Route name="my" handler={My}></Route>
      <DefaultRoute handler={Index}/>
    </Route>

    <Route name="addCar" path="/addcar" handler={AddCar}>
      <Route name="carBrand" handler={ChooseCarBrand}>
        <Route name="carType" path=":carType" handler={ChooseCarType} />
        <DefaultRoute handler={ChooseCarBrand}/>
      </Route>
    </Route>
  
  </Routes>
);

React.initializeTouchEvents(true);
React.renderComponent(
  routes,
  document.body
);
