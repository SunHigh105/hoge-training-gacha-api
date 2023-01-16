import React, {FC} from "react";

interface IframeProps {
  videoId: string;
}

export const Iframe: FC<IframeProps> = ({
  videoId = ''
}) => (
  <iframe width="100%" height="500" 
    src={`https://www.youtube.com/embed/${videoId}`} 
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
);
