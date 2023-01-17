import React, { FC } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { SemanticCOLORS } from 'semantic-ui-react/dist/commonjs/generic';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Iframe } from './Iframe';

interface VideoViewerProps {
  isDisplayed: boolean;
  handleViewer: () => void;
  triggerButton: {
    text: string,
    color: SemanticCOLORS
  };
}

export const VideoViewer: FC<VideoViewerProps> = ({
  isDisplayed = false,
  handleViewer = () => {},
  triggerButton = {
    text: '10min',
    color: 'red'
  }
}) => (
  <Modal
    onClose={handleViewer}
    onOpen={handleViewer}
    open={isDisplayed}
    trigger={<Button fluid color={triggerButton.color} size='huge'>{triggerButton.text}</Button>}
  >
    <Modal.Content>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{clickable: true}}
      >
        <SwiperSlide><Iframe videoId='cKcIeQkEEcY'/></SwiperSlide>
        <SwiperSlide><Iframe videoId='cKcIeQkEEcY'/></SwiperSlide>
    </Swiper>
    </Modal.Content>
  </Modal>
);
