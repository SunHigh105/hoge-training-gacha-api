import { SemanticCOLORS } from "semantic-ui-react";
import { minute } from "./types";

// TODO: 40, 50, 60を増やす
export const MINUTES: Array<minute> = [10, 20, 30];

export const COLOR_PER_MINUTE: Array<SemanticCOLORS> = ['teal', 'green', 'olive', 'yellow', 'orange', 'red'];

export const MINUTE_STRING = {
  10: 'ten',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty'
};
