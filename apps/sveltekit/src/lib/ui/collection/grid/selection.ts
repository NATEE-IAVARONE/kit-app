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

interface GridElement extends Coords {
  el: HTMLElement;
}

export function ricalculateBorderRadius(items: any) {
  const selectedNodes = items
    .filter(el => el.classList.contains('selected'))
    .map(el => el.gridstackNode);

  const selectedField = selectedNodes
    .reduce((acc, {el, x, y, w, h}) => {
      for (let ix = x!; ix < x! + w!; ix++) {
        acc[ix] ??= [];
        for (let iy = y!; iy < y! + h!; iy++) {
          acc[ix][iy] = el!;
        }
      }

      return acc;
    }, [] as GridElement['el'][][]);

  selectedNodes.forEach(n => {
    n.el!.classList.remove(...borderClassNames);
    const classesToAdd = getBorderClassNames(n as Coords, selectedField);
    classesToAdd.length && n.el!.classList.add(...classesToAdd);
  });
}

function getBorderClassNames({x, y, w, h}: Coords, field: GridElement['el'][][]): string[] {
  return [
    !(field[x - 1]?.[y]					|| field[x				]?.[y - 1]),
    !(field[x + w]?.[y]					|| field[x + w - 1]?.[y - 1]),
    !(field[x - 1]?.[y + h - 1] || field[x				]?.[y + h]),
    !(field[x + w]?.[y + h - 1] || field[x + w - 1]?.[y + h]),
  ]
  .map((b, i) => b ? '' : borderClassNames[i])
  .filter(Boolean) as unknown as string[];
}

export function deselectAll(except?: HTMLDivElement) {
  const selected = document.querySelectorAll('.grid-stack-item.selected');

  if (selected.length === 0) return;

  selected.forEach(el => el.classList.remove('selected'));
}