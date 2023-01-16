import React, { FC } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Iframe } from './Iframe';

interface VideoViewerProps {
  isDisplayed: boolean;
  handleViewer: () => void;
}

export const VideoViewer: FC<VideoViewerProps> = ({
  isDisplayed = false,
  handleViewer = () => {}
}) => (
  <Modal
    onClose={handleViewer}
    onOpen={handleViewer}
    open={isDisplayed}
    trigger={<Button>Select</Button>}
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
