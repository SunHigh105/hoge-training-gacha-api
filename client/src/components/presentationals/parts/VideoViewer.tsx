import React, { FC } from 'react';
import { Button, Grid, Modal, Image, Embed } from 'semantic-ui-react';
import { SemanticCOLORS } from 'semantic-ui-react/dist/commonjs/generic';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

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
    size='large'
    trigger={<Button fluid color={triggerButton.color} size='huge'>{triggerButton.text}</Button>}
  >
    <Modal.Header>{triggerButton.text} training</Modal.Header>
    <Modal.Content>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{clickable: true}}
      >
        <SwiperSlide>
          <Embed
            autoplay={true} 
            id='cKcIeQkEEcY'
            iframe={{
              allowFullScreen: true
            }}
            source='youtube'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Embed
            autoplay={true} 
            id='wIQtoKvRJIQ'
            iframe={{
              allowFullScreen: true
            }}
            source='youtube'
          />
        </SwiperSlide>
      </Swiper>
    </Modal.Content>
    <Modal.Header>Menu</Modal.Header>
    <Modal.Content scrolling>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={5}>
            <Image src='https://i.ytimg.com/vi/sDCuD5gv_sw/hqdefault.jpg' />
          </Grid.Column>
          <Grid.Column width={11}>
          【寝る前１０分】初心者のための１０分ヨガストレッチ【男性にも】〜快眠・翌朝スッキリ〜　家で一緒にやってみよう
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={5}>
            <Image src='https://i.ytimg.com/vi/hOh8pKuVpyk/hqdefault.jpg' />
          </Grid.Column>
          <Grid.Column width={11}>
          【準備運動に最適】筋トレの効果をあげる世界で最も優れたストレッチ（ワールドグレイテストストレッチ）
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Modal.Content>
  </Modal>
);
