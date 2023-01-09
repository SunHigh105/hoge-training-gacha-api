import React, { FC } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { HomeContainer } from '../containers/Home';

export interface AppProps {
}

export const App: FC<AppProps> = ({
}) => {
  return (
    <div>
      <Container text style={{ marginTop: '1.5em' }}>
        <Switch>
          <Route path='/' exact component={HomeContainer} />
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Container>
    </div>
  )
};

export default App;
