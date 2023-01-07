const COLUMN_VIDEOID = 1
const COLUMN_CHANNELID = 2;
const COLUMN_CATEGORY = 3;
const COLUMN_TITLE = 4;
const COLUMN_MINUTE = 5;
const COLUMN_URL = 6;
const COLUMN_THUMBNAIL = 7;

const VIDEO_URL_BASE = 'https://www.youtube.com/watch?v=';

const CATEGORY_TRAININGS = [
  '腹筋',
  '脚',
  '尻',
  '背中',
];
const CATEGORY_CARDIO_HIIT = [
  '有酸素',
  'HIIT',
];
const CATEGORY_STRETCH = 'ストレッチ';

const TEN_MIN_PATTERN = [
  {
    training: [5],
    cardio_hiit: [5], 
  },
  {
    training: [5, 5],
  },
  {
    training: [10],
  },
  {
    cardio_hiit: [10],
  },
];

const TWENTY_MIN_PATTERN = [
  {
    training: [5, 5],
    cardio_hiit: [5, 5], 
  },
  {
    training: [5, 5],
    cardio_hiit: [10], 
  },
  {
    training: [10],
    cardio_hiit: [10],
  },
];

const THIRTY_MIN_PATTERN = [
  {
    training: [5, 5, 5],
    cardio_hiit: [5, 5, 5], 
  },
  {
    training: [5, 5, 10],
    cardio_hiit: [10], 
  },
  {
    training: [10, 10],
    cardio_hiit: [10],
  },
  {
    training: [10],
    cardio_hiit: [10, 10],
  },
];
