import * as React from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Faq from './Faq/Faq';
import Footer from './Footer/Footer';
import Hof from './Hof/Hof';
import Home from './Home/Home';
import Kontakt from './Kontakt/Kontakt';
import Navigation from './Navigation/Navigation';
import Tiere from './Tiere/Tiere';
import Verein from './Verein/Verein';


class App extends React.Component {
  public render() {
    return (
        <Router>
          <div className="App">
              <Navigation name="tierarche" />
              <main>
                  <div style={{"width": "100%"}}>
                      <Route exact={true} path={'/'} component={Home} />
                      <Route path={'/tiere'} component={Tiere} />
                      <Route path={'/hof'} component={Hof} />
                      <Route path={'/faq'} component={Faq} />
                      <Route path={'/verein'} component={Verein} />
                      <Route path={'/kontakt'} component={Kontakt} />
                  </div>
              </main>
              <Footer/>
          </div>
        </Router>
    );
  }
}

export default App;
