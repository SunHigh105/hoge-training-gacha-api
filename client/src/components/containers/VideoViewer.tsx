import React, {FC, useState} from "react";
import { SemanticCOLORS } from "semantic-ui-react";
import { minute } from "../../definitions/types";

import { buildQueryParameter, getTrainigMenus } from "../../services/trainings";
import { VideoViewer } from "../presentationals/parts/VideoViewer";

export const VideoViewerContainer: FC<{minute: minute, color: SemanticCOLORS}> = ({
  minute,
  color
}) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const handleViewer = () => {
    setIsDisplayed(!isDisplayed);

    if (isDisplayed) {
      const query = buildQueryParameter(minute);
      const trainingMenu = getTrainigMenus(query);
    }
  };

  return (
    <VideoViewer
      isDisplayed={isDisplayed}
      handleViewer={handleViewer}
      triggerButton={{text: `${minute} min`, color: color}}
    />
  )
}
