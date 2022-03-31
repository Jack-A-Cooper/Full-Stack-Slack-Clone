import React from 'react';
import ResponsiveDrawer from './drawer';
import Login from './Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import globalContext from './globalContext';
// import Emoji from './Emoji';
// // testing git push
// /**
//  * Simple component with no state.
//  *
//  * @param {function} setDummy set the dummy state
// */
// function getDummy(setDummy) {
// fetch('http://localhost:3010/v0/dummy')
// .then((response) => {
// if (!response.ok) {
// throw response;
// }
// return response.json();
// })
// .then((json) => {
// setDummy(json.message);
// })
// .catch((error) => {
// setDummy(error.toString());
// });
// }

/**
 * Simple component with no state.
 *
 * @return {object} JSX
 */
function App() {
// const [dummy, setDummy] = React.useState('Click the button!');
// const [emoji, setEmoji] = React.useState(false);
  return (
    <BrowserRouter>
      <Switch>
        <globalContext.Provider value=
          {{
            'name': '', 'accessToken': '',
            'email': '', 'role': '', 'workspaces': [],
          }}>
          <Route path="/home" exact>
            <ResponsiveDrawer />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </globalContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
