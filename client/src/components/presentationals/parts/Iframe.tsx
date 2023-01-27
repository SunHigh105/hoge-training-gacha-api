import React, {FC} from "react";

import '../../../css/Iframe.css';

export const Iframe: FC<{videoId: string}> = ({
  videoId = ''
}) => (
  <div className='iframe-wrapper'>
    <div className='iframe-wrapper__inner'>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        frameBorder='0'
        allowFullScreen
      ></iframe>
    </div> 
  </div>
);
