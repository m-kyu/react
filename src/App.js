// https://codesandbox.io/s/suspense-transition-hqq0i?from-embed=&file=/src/index.js


import React, { useEffect, useState } from 'react';

import { Switch, BrowserRouter, Link, Route } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import './App.css';
import About from './comp/About';
import Main from './comp/Main';
import Work from './comp/Work';


function App() {

  const routes = [
    { path: '/', name: 'Home', Component: Main },
    { path: '/about', name: 'About', Component: About },
    { path: '/work', name: 'Work', Component: Work },
  ]

  return (
    <BrowserRouter >

      <header>
        {routes.map(route => (
          <Link
            key={route.path}
            to={route.path}
          >
            {route.name}
          </Link>
        ))}

      </header>
      <main className='container'>
        
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component  />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        
      </main>


    </BrowserRouter>
  );
}



export default App;
