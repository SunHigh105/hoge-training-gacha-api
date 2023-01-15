const createMenu = require('../createMenu');
const trainingList = require('./json/trainingList.json');

describe('createTrainingMenu', () => {
  test('Category specified', () => {
    const pattern = [5, 5, 5];
    const categories = ['腹筋', '背中']
    const menu = createMenu.createTrainingMenu(trainingList, pattern, categories);
    console.log(menu);
    expect(true);
  });

  test('No category specified', () => {
    // TODO
  });
});

describe('getFilterdCategories', () => {
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
