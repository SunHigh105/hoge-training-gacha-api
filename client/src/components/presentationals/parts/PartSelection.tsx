import React, {FC} from 'react';
import { Accordion, Checkbox, Grid, Icon } from 'semantic-ui-react';

export const PartSelection: FC<{
  isPartSelectionOpen: boolean,
  handlePartSelection: () => void,
  handleCheckbox: (e: React.FormEvent<HTMLInputElement>, data: any) => void
}> = ({
  isPartSelectionOpen = false,
  handlePartSelection = () => {},
  handleCheckbox = () => {}
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
            <Checkbox onChange={handleCheckbox} label='腹筋' value='abs' />
          </Grid.Column>
          <Grid.Column>
            <Checkbox onChange={handleCheckbox} label='脚' value='leg'/>
          </Grid.Column>
          <Grid.Column>
            <Checkbox onChange={handleCheckbox} label='尻' value='hip'/>
          </Grid.Column>
          <Grid.Column>
            <Checkbox onChange={handleCheckbox} label='背中' value='back' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Accordion.Content>
  </Accordion>
);