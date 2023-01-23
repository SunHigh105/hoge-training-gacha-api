export interface Training {
  category: string,
  channelId: string,
  minute: string,
  thumbnail: string,
  title: string,
  url: string,
  videoId: string,
};

export interface PlayParams {
  minute: '10' | '20' | '30' | '40' | '50' | '60',
}