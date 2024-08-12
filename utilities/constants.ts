export const DEFAULT_GRID_COLS = 5;
export const DEFAULT_GRID_ROWS = 5;
export const MIN_GRID_COLS = 3;
export const MIN_GRID_ROWS = 3;
export const MAX_GRID_COLS = 10;
export const MAX_GRID_ROWS = 10;

if (MAX_GRID_COLS < DEFAULT_GRID_COLS || MIN_GRID_COLS > DEFAULT_GRID_COLS) {
  throw new Error(
    "Default grid column count does not fall inside acceptable range.",
  );
}

if (MAX_GRID_ROWS < DEFAULT_GRID_ROWS || MIN_GRID_ROWS > DEFAULT_GRID_ROWS) {
  throw new Error(
    "Default grid row count does not fall inside acceptable range.",
  );
}

export enum BOT_DIRECTIONS {
  LEFT = "left",
  TOP = "top",
  RIGHT = "right",
  BOTTOM = "bottom",
}

export const DEFAULT_BOT_DIRECTION: BOT_DIRECTIONS = BOT_DIRECTIONS.RIGHT;
