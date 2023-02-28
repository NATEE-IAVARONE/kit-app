import { GridStack } from 'gridstack';

export function initGrid(gridEl: HTMLElement, { defLayout, onChange }: any) {
	let {columns, margin, cellHeight} = defLayout;

  const grid = GridStack.init({
    disableOneColumnMode: true,
    column: columns,
    minRow: 1,
    cellHeight,
    margin,
    disableResize: true,
    acceptWidgets: true,
  }, gridEl);

  ['added', 'removed', 'change'].forEach(name => grid.on(name, onChange));

  return grid;
}