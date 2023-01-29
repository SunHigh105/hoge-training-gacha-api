import React, {FC} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Header, Container, Grid, Button, Segment } from 'semantic-ui-react';

import { MINUTES, COLOR_PER_MINUTE } from '../../../definitions/constants';
import { PartSelectionContainer } from '../../containers/PartSelection';

import '../../../css/Home.css';

export const Home: FC<{}> = () => (
  <div>
    <Header as='h1' textAlign='center'>Select Training Time</Header>
    <Container>
      <div className='home-container'>
      <Segment basic>
        <PartSelectionContainer />
      </Segment>
        {MINUTES.map((minute, index) => (
          <div className='home-button-wrapper' key={minute}>
            <Button fluid 
              color={COLOR_PER_MINUTE[index]}
              size='huge'
              as={Link}
              to={`/player/minute/${minute}`}
            >
              {`${minute} min`}
            </Button>
          </div>
        ))}
      </div>
    </Container>
  </div>
);
