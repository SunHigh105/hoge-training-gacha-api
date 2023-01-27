import React, {FC} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Header, Container, Grid, Button, Segment } from 'semantic-ui-react';

import { MINUTES_TEN_THIRTY, MINUTES_FORTY_SIXTY, COLOR_PER_MINUTE } from '../../../definitions/constants';
import { PartSelectionContainer } from '../../containers/PartSelection';

export const Home: FC<{}> = () => (
  <div>
    <Header as='h1' textAlign='center'>Select Training Time</Header>
    <Container>
      <Segment basic>
        <PartSelectionContainer />
      </Segment>
      <Grid columns='equal'>
        <Grid.Row>
          {MINUTES_TEN_THIRTY.map((minute, index) => (
            <Grid.Column key={minute}>
              <Button fluid
                color={COLOR_PER_MINUTE[index]}
                size='huge'
                as={Link}
                to={`/player/minute/${minute}`}
              >
                {`${minute} min`}
              </Button>
            </Grid.Column>
          ))}
        </Grid.Row>
        <Grid.Row>
          {MINUTES_FORTY_SIXTY.map((minute, index) => (
            <Grid.Column key={minute}>
              <Button fluid
                color={COLOR_PER_MINUTE[index + 3]}
                size='huge'
                as={Link}
                to={`/player/minute/${minute}`}
              >
                {`${minute} min`}
              </Button>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);
