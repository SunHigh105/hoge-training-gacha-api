import React, { FC } from 'react';
import { Grid, Image, Header, Segment } from 'semantic-ui-react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Training } from '../../../definitions/interfaces';
import { minute } from '../../../definitions/types';
import { Iframe } from '../parts/Iframe';

import '../../../css/Player.css';

export const Player: FC<{
  minute: minute,
  menus: Training[]
}> = ({
  minute = 10,
  menus = []
}) => (
  <div className='player-container'>
    <Header as='h1' textAlign='center'>{`${minute} min Training`}</Header>
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{clickable: true}}
    >
      {menus.map(menu => (
        <SwiperSlide key={menu.videoId}>
          <Segment basic>
            <Iframe videoId={menu.videoId} />
          </Segment>
        </SwiperSlide>
      ))}
    </Swiper>
    <Header as='h2' textAlign='center' dividing>Menu</Header>
    <Grid>
      {menus.map(menu => (
        <Grid.Row key={menu.videoId} columns={2}>
          <Grid.Column width={5}>
            <Image src={menu.thumbnail} />
          </Grid.Column>
          <Grid.Column width={11}>
            {menu.title}
          </Grid.Column>
        </Grid.Row>
      ))}
    </Grid>
  </div>
);