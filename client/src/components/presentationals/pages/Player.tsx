import React, { FC } from 'react';
import { Grid, Image, Header, Button, Icon, Card } from 'semantic-ui-react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Training } from '../../../definitions/interfaces';
import { Iframe } from '../parts/Iframe';

import '../../../css/Player.css';

export const Player: FC<{
  totalMinute: Number,
  menus: Training[],
  handleRetryButton: () => void;
}> = ({
  totalMinute = 0,
  menus = [],
  handleRetryButton = () => {}
}) => (
  <div className='player-container'>
    <Header as='h1' textAlign='center'>{`Training (${totalMinute} min)`}</Header>
    <div className='player-retry-button-wrapper'>
      <Button icon labelPosition='left' color='olive' onClick={handleRetryButton}>
        <Icon name='redo' />Retry
      </Button>
    </div>
    {/* <Swiper
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
    </Swiper> */}
    <Header as='h2' textAlign='center' dividing>Menu</Header>
    <Card.Group>
      {menus.map(menu => (
        <Card
          key={menu.videoId}
          fluid
        >
          <Card.Content>
            <a
              className='player-card-link'
              target='_blank'
              rel='noreferrer'
              href={`https://www.youtube.com/watch?v=${menu.videoId}`}
            >
              <Grid>
                <Grid.Row key={menu.videoId} columns={2}>
                  <Grid.Column width={6}>
                    <Image src={menu.thumbnail} />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <p className='player-menu-title'>{menu.title}</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </a>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </div>
);