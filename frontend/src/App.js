import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Homepage from './pages/Homepage';

function App() {
  return (
      <Router>f
        <Switch>
          <Route path="/" exact component={Homepage} />
        </Switch>
      </Router>
  );
}

export default App;
