import React, {FC} from 'react';
import { Header, Container, Card, Grid } from 'semantic-ui-react';

import { CategorySelection } from '../parts/CategorySelection';

import { MINUTES, COLOR_PER_MINUTE } from '../../../constants/home';
import { VideoViewerContainer } from '../../containers/VideoViewer';

export interface homeProps {
  
}

export const Home: FC<homeProps> = ({}) => (
  <div>
    <Header as='h1' textAlign='center'>Home Training Gacha</Header>
    <Container>
      {/* <CategorySelection /> */}
      <Grid>
        {MINUTES.map((minute, index) => (
          <Grid.Row key={minute}>
            <VideoViewerContainer minute={minute} color={COLOR_PER_MINUTE[index]} />
          </Grid.Row>
        ))}
      </Grid>
    </Container>
  </div>
);
