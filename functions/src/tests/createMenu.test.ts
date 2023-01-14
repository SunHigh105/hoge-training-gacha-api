const createMenu = require('../createMenu');
const trainingList = require('./json/trainingList.json');

describe('createTrainingMenu', () => {
  test('Training & Cardio,Hiit | No category specified', () => {
    const pattern = {
      training: [5, 5, 5]
    }
    const filterCondition = {
      channelId: [],
      training: [],
      cardioHiit: [],
    }
    const menu = createMenu.createTrainingMenu(trainingList, pattern, filterCondition);
    console.log(menu);
    expect(true);
  });

  test('Training only | No category specified', () => {
    // TODO
  });

  test('Cardio,Hiit only | No category specified', () => {
    // TODO
  });

  test('Training & Cardio,Hiit | category specified', () => {
    // TODO
  });
});

describe('getFilterdCategories', () => {
  test('No filtered condition', () => {
    const result = createMenu.getFilterdCategories(
      {
        abs: '腹筋',
        leg: '脚',
        hip: '尻',
        back: '背中',
      },
      []
    );

    expect(result).toEqual([
      '腹筋',
      '脚',
      '尻',
      '背中'
    ]);
  });

  test('One filtered condition exists', () => {
    const result = createMenu.getFilterdCategories(
      {
        abs: '腹筋',
        leg: '脚',
        hip: '尻',
        back: '背中',
      },
      ['abs']
    );

    expect(result).toEqual([
      '腹筋',
    ]);
  });

  test('Two filtered conditions exist', () => {
    const result = createMenu.getFilterdCategories(
      {
        abs: '腹筋',
        leg: '脚',
        hip: '尻',
        back: '背中',
      },
      ['abs', 'hip']
    );

    expect(result).toEqual([
      '腹筋',
      '尻'
    ]);
  });
});
