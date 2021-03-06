import { Player } from "../apis/PlayerApi";

export const arbitraryPlayer = (): Player => {
  return {
    name: '',
    dob: '',
    college: '',
    draftYear: '',
    position: '',
    height: 0,
    weight: 0,
    fortyYard: 0,
    tenYard: 0,
    benchPress: 0,
    verticalJump: 0,
    broadJump: 0,
    threeCone: 0,
    shortShuttle: 0,
  }
};