import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';

import '../../../css/Error.css';

export const Error = () => (
  <Segment placeholder basic className='error-wrapper'>
    <Header icon>
      <Icon name='warning sign' />
      エラーが発生しました
    </Header>
    <p>通信状態をお確かめの上再度お試しください</p>
    <Button color='olive' as={Link} to='/'>Home</Button>
  </Segment>
);
