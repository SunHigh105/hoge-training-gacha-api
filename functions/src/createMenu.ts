const constants = require('./constants'); 

const createTrainingMenu = (
  trainingList: Array<Training>,
  trainingPattern: TrainingPattern,
  filterCondition: FilterCondition
) => {
  // TODO: トレーニングの重複をなくす
  try {
    const trainings = trainingPattern.training.map((minute: Number) => {
      const categories = getFilterdCategories(
        constants.CATEGORY_TRAININGS,
        filterCondition.training
      );
      const selectedCategory = categories[getRandomValue(categories.length) - 1];
      
      const filteredList = trainingList.filter((training: Training) => {
        return training.category === selectedCategory 
          && Number(training.minute) > (Math.floor(Number(minute) / 5) - 1) * 5
          && Number(training.minute) <= minute;
      });
      
      return filteredList.length >= 1 
        ? filteredList[getRandomValue(filteredList.length) - 1]
        : {};
    });
    
    return [...trainings];
  } catch (e) {
    console.log(e);
    return 'Create training menu failed.';
  }
};

const getFilterdCategories = (categories: Object, filterCondition: Array<string>) => {
  if (filterCondition.length === 0) {
    return Object.values(categories);
  }

  return filterCondition.map((key: string) => {
    const index = Object.keys(categories).indexOf(key);
    return Object.values(categories)[index];
  });
};

const getRandomValue = (max: number) => {
  return Math.ceil(Math.random() * max);
};

module.exports = {
  createTrainingMenu,
  getFilterdCategories,
};
