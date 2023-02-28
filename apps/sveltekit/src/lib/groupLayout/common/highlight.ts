import type { GridStack, GridItemHTMLElement } from 'gridstack';

const borderClassNames = [
  'no-top-left',
  'no-top-right',
  'no-bottom-left',
  'no-bottom-right'
];

interface Coords {
  x: number;
  y: number;
  w: number;
  h: number;
}

export function ricalculateBorderRadius(grid: GridStack) {
  const selectedNodes = grid.getGridItems()
    .map(elem => elem.gridstackNode!)
    .filter(n => n.el!.classList.contains('selected'));

  const selectedField = selectedNodes
    .reduce((acc, {el, x, y, w, h}) => {
      for (let ix = x!; ix < x! + w!; ix++) {
        acc[ix] ??= [];
        for (let iy = y!; iy < y! + h!; iy++) {
          acc[ix][iy] = el!;
        }
      }

      return acc;
    }, [] as GridItemHTMLElement[][]);

  selectedNodes.forEach(n => {
    n.el!.classList.remove(...borderClassNames)
    n.el!.classList.add(...getBorderClassNames(n as Coords, selectedField));
  });
}

function getBorderClassNames({x, y, w, h}: Coords, field: GridItemHTMLElement[][]): string[] {
  return [
    !(field[x - 1]?.[y]					|| field[x				]?.[y - 1]),
    !(field[x + w]?.[y]					|| field[x + w - 1]?.[y - 1]),
    !(field[x - 1]?.[y + h - 1] || field[x				]?.[y + h]),
    !(field[x + w]?.[y + h - 1] || field[x + w - 1]?.[y + h]),
  ]
  .map((b, i) => b || borderClassNames[i]) as unknown as string[];
}