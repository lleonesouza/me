import React from "react";
import Nav from "./components/nav/nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {FirstDiv} from './components/css'
import './i18next/i18next'

// Context
import {ProjectContext} from './context/context'

// Aniamls
import Turtle from "./components/lottie/animals/turtle";

// Components
import Central from "./components/central/central";
import Tech from './components/tech/tech'
import Works from './components/works/works'
import Contact from './components/contact/contact'

// Project Icons
import Castor from "./components/nav/icons/castor.svg";
import FFmagico from "./components/nav/icons/ffmagico.svg";
import Tester from "./components/nav/icons/test.png";




function App() {
  var projects = [
    {
      title: "Castor",
      url: "https://lleonesouza.github.io/castor",
      img: Castor,
      type: "desktop",
      recently: true,
      status: 'await'
    },
    {
      title: "CronRequest",
      url: "https://lleonesouza.github.io/cronTest",
      img: Tester,
      type: "desktop",
      recently: true,
      status: 'await'
    },
    {
      title: "FFmagico",
      url: "https://lleonesouza.github.io/ffmagico",
      img: FFmagico,
      type: "frontend",
      recently: false,
      status: 'done'
    }
  ];

  var routes = [
    {
      title: "me",
      url: "/me",
      component: Central
    },
    {
      title: "all works",
      url: "/works",
      component: Works
    },
    {
      title: "technology",
      url: "/tech",
      component: Tech
    },
    {
      title: "contact",
      url: "/contact",
      component: Contact
    }
  ];

  return (
    <Router>
      <Nav projects={projects} routes={routes} />

      <Switch>
        <FirstDiv>
          <ProjectContext.Provider value={projects}>
            {routes.map(route => (
              <Route path={route.url} exact component={route.component} />
            ))}
          </ProjectContext.Provider>
        </FirstDiv>
      </Switch>

      <Turtle/>
    </Router>
  );
}

export default App;
