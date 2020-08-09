import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';