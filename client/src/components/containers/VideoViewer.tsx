import React, {FC, useState} from "react";
import { SemanticCOLORS } from "semantic-ui-react";
import { VideoViewer } from "../presentationals/parts/VideoViewer";

export const VideoViewerContainer: FC<{minute: Number, color: SemanticCOLORS}> = ({
  minute,
  color
}) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const handleViewer = () => {
    setIsDisplayed(!isDisplayed);
  };

  return (
    <VideoViewer
      isDisplayed={isDisplayed}
      handleViewer={handleViewer}
      triggerButton={{text: `${minute} min`, color: color}}
    />
  )
}
