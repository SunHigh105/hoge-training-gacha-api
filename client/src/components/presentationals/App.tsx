import React, { FC } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { HomeContainer } from '../containers/Home';
import { PlayerContainer } from '../containers/Player';

import '../../css/App.css';

export const App: FC<{}> = ({
}) => {
  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item
          name='home training gacha'
          as={Link}
          to='/'
        />
      </Menu>
      <Container className='app-container'>
        <Switch>
          <Route path='/' exact component={HomeContainer} />
          <Route path='/player/minute/:minute/muscle/:muscle' component={PlayerContainer} />
          <Route path='/player/minute/:minute' component={PlayerContainer} />
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Container>
    </div>
  )
};

export default App;
