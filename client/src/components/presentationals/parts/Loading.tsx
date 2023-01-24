import React, {FC} from "react"
import { Dimmer, Loader, Segment } from "semantic-ui-react"

import '../../../css/Loading.css';

export const Loading: FC<{}> = () => (
  <Segment basic className='loading-wrapper'>
    <Dimmer active inverted>
      <Loader inverted>Loading...</Loader>
    </Dimmer>
  </Segment>
);
