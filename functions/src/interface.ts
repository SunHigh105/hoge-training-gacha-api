export interface TrainingPattern {
  muscle: Array<number>;
  cardio: Array<number>;
}

export interface Training {
  category: string;
  channelId: string;
  minute: string;
  thumbnail: string;
  title: string;
  url: string;
  videoId: string;
}

export type MinuteQuery =
  | 'ten'
  | 'twenty'
  | 'thirty'
  | 'forty'
  | 'fifty'
  | 'sixty';
export type MuscleQuery = 'abs' | 'leg' | 'hip' | 'back';
export type CardioQuery = 'hiit' | 'cardio';
export interface RequestQuery {
  query: {
    minute: MinuteQuery;
    muscle: Array<MuscleQuery>;
    cardio: Array<CardioQuery>;
  };
}
