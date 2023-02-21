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
  strech: 'ストレッチ',
};

const MINUTE_PATTERN = {
  ten: { muscle: 5, cardio: 5 },
  twenty: { muscle: 10, cardio: 10 },
  thirty: { muscle: 15, cardio: 15 },
  forty: { muscle: 20, cardio: 20 },
  fifty: { muscle: 20, cardio: 30 },
  sixty: { muscle: 30, cardio: 30 },
};

module.exports = {
  CATEGORY_MUSCLE_TRAININGS,
  CATEGORY_CARDIO_HIIT,
  CATEGORY_STRETCH,
  MINUTE_PATTERN,
};
