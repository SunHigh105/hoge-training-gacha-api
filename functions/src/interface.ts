interface TrainingPattern {
  muscle: Array<number>;
  cardio: Array<number>;
}

interface Training {
  category: string;
  channelId: string;
  minute: string;
  thumbnail: string;
  title: string;
  url: string;
  videoId: string;
}

type MinuteQuery = 'ten' | 'twenty' | 'thirty' | 'forty' | 'fifty' | 'sixty';
type MuscleQuery = 'abs' | 'leg' | 'hip' | 'back';
type CardioQuery = 'hiit' | 'cardio';
interface RequestQuery {
  query: {
    minute: MinuteQuery;
    muscle: Array<MuscleQuery>;
    cardio: Array<CardioQuery>;
  };
}
