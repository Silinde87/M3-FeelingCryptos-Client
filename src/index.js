import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from "./theme";
import "./reset.css";
import App from './App';
import { AuthProvider } from './context/auth.context';


ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </Router>
, document.getElementById('root'));
