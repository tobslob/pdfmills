export class RatioMissingError extends Error {
  constructor() {
    super("Column ratio cannot be less than 1");
  }
}

export class RatioSumError extends Error {
  constructor() {
    super("Item percentages must add up to 100");
  }
}
