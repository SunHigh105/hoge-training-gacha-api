import React, {FC, useState} from "react";
import { VideoViewer } from "../presentationals/parts/VideoViewer";

export const VideoViewerContainer: FC<{}> = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const handleViewer = () => {
    setIsDisplayed(!isDisplayed);
  };

  return (
    <VideoViewer
      isDisplayed={isDisplayed}
      handleViewer={handleViewer}
    />
  )
}
