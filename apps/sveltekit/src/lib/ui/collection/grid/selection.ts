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

export function handleGridItemsClick(itemsLocalVars: any) {
  itemsLocalVars.forEach(vars =>
    vars.el.addEventListener(
      'click',
      onItemSelection(vars, itemsLocalVars)
    )
  );
}

function onItemSelection(localVars: any, itemsLocalVars: any) {
  return ({ctrlKey: isMultiselect}: any) => {
    localVars.el.classList.toggle('selected');
    
    isMultiselect || itemsLocalVars
    .forEach(vars => vars === localVars || vars.el.classList.remove('selected'));
    
    ricalculateBorderRadius(itemsLocalVars);
  };
}

export function ricalculateBorderRadius(localVars: any) {
  const selectedNodes = localVars
    .filter(vars => vars.el.classList.contains('selected'))
    .map(vars => vars.gridNode);

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