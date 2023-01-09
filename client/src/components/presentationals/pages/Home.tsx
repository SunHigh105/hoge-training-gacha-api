import React, {FC} from 'react';
import { Header, Container, Card } from 'semantic-ui-react';

import { MINUTES } from '../../../constants/home';

export interface homeProps {
  
}

export const Home: FC<homeProps> = ({}) => (
  <div>
    <Header as='h2' textAlign='center'>Home Training Gacha</Header>
    <Container>
      <Card.Group centered>
        {MINUTES.map((minute) => (
          <Card key={minute} href='#'>
            <Card.Content>
              <Card.Header>{minute - 9} ~ {minute} min</Card.Header>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Container>
  </div>
);
