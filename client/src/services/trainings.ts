import { ApiConfig, createAxiosInstance } from "./common";
import { MINUTE_STRING } from "../definitions/constants";
import { minute, muscle, cardio } from "../definitions/types";

export const getTrainigMenus = async (queryParameter: string) => {
  const instance = createAxiosInstance();
  try {
    const res = await instance.get(`/training_menus?${queryParameter}`);
    return res.data;

  } catch (e) {
    return {
      isSucceed: false,
      error: e
    };
  }
};

export const buildQueryParameter = (
  minute: minute,
  muscle: Array<muscle> = [],
  cardio: Array<cardio> = []
) => {
  const minuteQuery = `minute=${MINUTE_STRING[minute]}`;
  const muscleQuery = muscle.length >= 1
    ? `&${muscle.map(m => `muscle[]=${m}`).join('&')}`
    : '';
  const cardioQuery = cardio.length >= 1
    ? `&${cardio.map(c => `cardio[]=${c}`).join('&')}`
    : '';
  
  return `${minuteQuery}${muscleQuery}${cardioQuery}`;
}
