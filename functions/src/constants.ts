const CATEGORY_TRAININGS = {
  abs: '腹筋',
  leg: '脚',
  hip: '尻',
  back: '背中',
};

const CATEGORY_CARDIO_HIIT = {
  cardio: '有酸素',
  hiit: 'HIIT',
};

const CATEGORY_STRETCH = {
  strech: 'ストレッチ'
};

const TEN_MIN_PATTERNS: Array<TrainingPattern> = [
  {
    training: [5],
    cardioHiit: [5], 
  },
  {
    training: [5, 5],
    cardioHiit: []
  },
  {
    training: [10],
    cardioHiit: []
  },
  {
    training: [],
    cardioHiit: [10],
  },
];

const TWENTY_MIN_PATTERNS: Array<TrainingPattern> = [
  {
    training: [5, 5],
    cardioHiit: [5, 5], 
  },
  {
    training: [5, 5],
    cardioHiit: [10], 
  },
  {
    training: [10],
    cardioHiit: [10],
  },
];

const THIRTY_MIN_PATTERNS: Array<TrainingPattern> = [
  {
    training: [5, 5, 5],
    cardioHiit: [5, 5, 5], 
  },
  {
    training: [5, 5, 10],
    cardioHiit: [10], 
  },
  {
    training: [10, 10],
    cardioHiit: [10],
  },
  {
    training: [10],
    cardioHiit: [10, 10],
  },
];

module.exports = {
  CATEGORY_TRAININGS,
  CATEGORY_CARDIO_HIIT,
  CATEGORY_STRETCH,
  TEN_MIN_PATTERNS,
  TWENTY_MIN_PATTERNS,
  THIRTY_MIN_PATTERNS
}
