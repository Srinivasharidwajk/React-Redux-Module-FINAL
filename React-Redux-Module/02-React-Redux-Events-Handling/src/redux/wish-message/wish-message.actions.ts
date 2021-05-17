// actions
export const GOOD_MORNING:string = 'GOOD_MORNING';
export const GOOD_AFTERNOON:string = 'GOOD_AFTERNOON';
export const GOOD_EVENING:string = 'GOOD_EVENING';

// action type
export interface ActionType {
    type : string;
}

// action creators
export const goodMorning = ():ActionType => {
  return {
      type : GOOD_MORNING
  }
}

export const goodAfternoon = ():ActionType => {
    return {
        type : GOOD_AFTERNOON
    }
}

export const goodEvening = ():ActionType => {
    return {
        type : GOOD_EVENING
    }
}

