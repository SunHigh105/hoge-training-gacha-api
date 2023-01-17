import { SemanticCOLORS } from "semantic-ui-react";

const createSelectOptions = (arr: Array<number>) => {
  return arr.map((time: number, i: number) =>({
    key: i + 1,
    value: time,
    text: time,
  }));
};

export const totalTrainingTime = createSelectOptions([ 3, 5, 10 ]);
export const trainingTime = createSelectOptions([ 30, 60 ]);
export const breakTime = createSelectOptions([ 10, 20 ]);

export const trainingInfoItems = ['totalTrainingTime', 'trainingTime', 'breakTime'];

export const MINUTES = [10, 20, 30, 40, 50, 60];
export const COLOR_PER_MINUTE: Array<SemanticCOLORS> = ['teal', 'green', 'olive', 'yellow', 'orange', 'red'];