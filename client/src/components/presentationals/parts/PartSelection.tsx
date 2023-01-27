import React, {FC} from 'react';
import { Accordion, Checkbox, Grid, Icon } from 'semantic-ui-react';

export const PartSelection: FC<{
  isPartSelectionOpen: boolean,
  handlePartSelection: () => void
}> = ({
  isPartSelectionOpen = false,
  handlePartSelection = () => {}
}) => (
  <Accordion>
    <Accordion.Title
      active={isPartSelectionOpen}
      onClick={handlePartSelection}
    >
      <Icon name='dropdown' />
      筋トレ部位絞り込み
    </Accordion.Title>
    <Accordion.Content active={isPartSelectionOpen}>
      <Grid columns={4}>
        <Grid.Row>
          <Grid.Column>
            <Checkbox label='腹筋' />
          </Grid.Column>
          <Grid.Column>
            <Checkbox label='脚' />
          </Grid.Column>
          <Grid.Column>
            <Checkbox label='尻' />
          </Grid.Column>
          <Grid.Column>
            <Checkbox label='背中' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Accordion.Content>
  </Accordion>
);