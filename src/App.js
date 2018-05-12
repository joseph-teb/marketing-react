import React from 'react';
import { Route } from "react-router-dom";
import ShopingBag from "./components/pages/ShopingBag";
import ViewDetails from "./components/pages/ViewDetails";
// import React, { Component } from 'react';
// import './App.css';

const App = () =>
 <div className="ui container">
<Route path="/" exact component={ShopingBag} />
<Route path="/edit" exact component={ViewDetails} />
</div>

export default App;
