import React from "react"
import { Dimmer, Loader, Segment } from "semantic-ui-react"

import '../../../css/Loading.css';

export const Loading = () => (
  <div className="loading-wrapper">
    <Loader active inline>Loading...</Loader>
  </div>
);
