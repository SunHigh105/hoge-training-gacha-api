import React from 'react';
import { Accordion, Checkbox, Icon } from 'semantic-ui-react';

export const CategorySelection = () => (
  <Accordion fluid styled>
    <Accordion.Title>
      <Icon name='dropdown' />
      カテゴリ絞り込み
    </Accordion.Title>
    <Accordion.Content>
      <Checkbox label='腹筋' defaultChecked />
      <Checkbox label='背中' defaultChecked />
    </Accordion.Content>
  </Accordion>
);