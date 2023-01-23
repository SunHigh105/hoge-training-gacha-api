import React, {FC} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Header, Container, Grid, Button } from 'semantic-ui-react';

import { CategorySelection } from '../parts/CategorySelection';

import { MINUTES, COLOR_PER_MINUTE } from '../../../definitions/constants';

export const Home: FC<{}> = () => (
  <div>
    <Header as='h1' textAlign='center'>Select Training Time</Header>
    <Container>
      {/* <CategorySelection /> */}
      <Grid>
        {MINUTES.map((minute, index) => (
          <Grid.Row key={minute}>
            <Button fluid 
              color={COLOR_PER_MINUTE[index]}
              size='huge'
              as={Link}
              to={`/player/minute/${minute}`}
            >
              {`${minute} min`}
            </Button>
          </Grid.Row>
        ))}
      </Grid>
    </Container>
  </div>
);
