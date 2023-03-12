import { writable } from 'svelte/store';

export interface Layout {
  columns: number;
  margin: number;
  cellHeight: number;
}

const margin = 4;
const toolWidth = 160;

export const defLayout = {
  columns: 1,
  margin,
  cellHeight: 106 + margin * 2,
};

const widthPerColumn = 2 * margin + toolWidth;

export const minWidthPerColumns = {
  two: 2 * widthPerColumn,
  three: 3 * widthPerColumn,
};

export const layout = writable<Layout>(defLayout);
