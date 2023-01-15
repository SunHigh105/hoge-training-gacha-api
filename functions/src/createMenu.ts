const constants = require('./constants'); 

const createTrainingMenu = (
  trainingList: Array<Training>,
  minutePattern: Array<Number>,
  categories: Array<string>
) => {
  // TODO: トレーニングの重複をなくす
  try {
    const trainings = minutePattern.map((minute: Number) => {
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
    
    return trainings;
  } catch (e) {
    console.log(e);
    return 'Create training menu failed.';
  }
};

const getFilterdCategories = (categories: Object, filterCondition: Array<string>) => {
  return filterCondition.map((key: string) => {
    const index = Object.keys(categories).indexOf(key);
    return Object.values(categories)[index];
  });
};

const getMinutePattern = (minutePatterns: Array<TrainingPattern>) => {
  return minutePatterns[getRandomValue(minutePatterns.length) - 1];
};

const getRandomValue = (max: number) => {
  return Math.ceil(Math.random() * max);
};

module.exports = {
  createTrainingMenu,
  getFilterdCategories,
  getMinutePattern,
};
