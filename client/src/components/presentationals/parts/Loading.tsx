import React from "react"
import { Card, Grid, Loader, Placeholder } from "semantic-ui-react"

import '../../../css/Loading.css';

export const Loading = () => (
  <div className="loading-container">
    <div className='loading-wrapper'>
      <Loader active inline>Loading...</Loader>
    </div>
    <Card.Group>
      {[1, 2, 3, 4, 5].map(num => (
        <Card fluid key={num}>
          <Card.Content>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column width={6}>
                  <Placeholder className='loading-image-placeholder'>
                    <Placeholder.Image />
                  </Placeholder>
                </Grid.Column>
                <Grid.Column width={10}>
                  <Placeholder>
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </div>
);
