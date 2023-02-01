import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";

import './App.css';
import Header from "./components/Header";

import React from "react";
import Home from "./components/Home";

function App() {
    return (

        <
        div className = "App" >
        <
        Router >
        <
        Header / >
        <
        route exact path = "/" >
        <
        Login / >
        <
        /route> <
        route path = "/home" >
        <
        Home / >
        <
        /route>

        <
        /Router>


        <
        /div>

    );
}

export default App;