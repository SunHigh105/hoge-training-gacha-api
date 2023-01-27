const CATEGORY_MUSCLE_TRAININGS = {
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
    muscle: [5],
    cardio: [5], 
  },
  {
    muscle: [5, 5],
    cardio: []
  },
  {
    muscle: [10],
    cardio: []
  },
  {
    muscle: [],
    cardio: [10],
  },
];

const TWENTY_MIN_PATTERNS: Array<TrainingPattern> = [
  {
    muscle: [5, 5],
    cardio: [5, 5], 
  },
  {
    muscle: [5, 5],
    cardio: [10], 
  },
  {
    muscle: [10],
    cardio: [10],
  },
];

const THIRTY_MIN_PATTERNS: Array<TrainingPattern> = [
  {
    muscle: [5, 5, 5],
    cardio: [5, 5, 5], 
  },
  {
    muscle: [5, 5, 10],
    cardio: [10], 
  },
  {
    muscle: [10, 10],
    cardio: [10],
  },
  {
    muscle: [10],
    cardio: [10, 10],
  },
];

const FORTY_MIN_PATTERNS: Array<TrainingPattern> = [
  {
    muscle: [5, 10],
    cardio: [10, 15], 
  },
  {
    muscle: [5, 5, 10],
    cardio: [5, 15], 
  },
  {
    muscle: [10, 10],
    cardio: [10, 10],
  },
  {
    muscle: [5, 5, 5],
    cardio: [10, 15],
  },
];

const FIFTY_MIN_PATTERNS: Array<TrainingPattern> = [
  {
    muscle: [5, 5, 10],
    cardio: [10, 20], 
  },
  {
    muscle: [10, 10],
    cardio: [10, 20], 
  },
  {
    muscle: [5, 5, 5],
    cardio: [10, 10, 15],
  },
  {
    muscle: [10, 15],
    cardio: [10, 15],
  },
];

const SIXTY_MIN_PATTERNS: Array<TrainingPattern> = [
  {
    muscle: [5, 5, 5, 10],
    cardio: [15, 20], 
  },
  {
    muscle: [10, 10, 10],
    cardio: [10, 20], 
  },
  {
    muscle: [5, 5, 5, 5],
    cardio: [5, 10, 15],
  },
  {
    muscle: [10, 15],
    cardio: [15, 20],
  },
];

const MINUTE_PATTERN = {
  ten: TEN_MIN_PATTERNS,
  twenty: TWENTY_MIN_PATTERNS,
  thirty: THIRTY_MIN_PATTERNS,
  forty: FORTY_MIN_PATTERNS,
  fifty: FIFTY_MIN_PATTERNS,
  sixty: SIXTY_MIN_PATTERNS
}

module.exports = {
  CATEGORY_MUSCLE_TRAININGS,
  CATEGORY_CARDIO_HIIT,
  CATEGORY_STRETCH,
  MINUTE_PATTERN
}
