interface TrainingPattern {
  training: Array<Number>,
  cardioHiit: Array<Number>
}

interface Training {
  category: string,
  channelId: string,
  minute: string,
  thumbnail: string,
  title: string,
  url: string,
  videoId: string,
}

interface FilterCondition {
  channelId: Array<string>,
  training: Array<string>,
  cardioHiit: Array<string>
}
