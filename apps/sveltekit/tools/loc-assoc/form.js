
export function schema() {
  
  const schem = {
    components: [
      {
        label: 'Raw',
        autoExpand: false,
        tableView: true,
        key: 'raw',
        type: 'textarea',
        input: true
      }
    ]
  };

  return schem;
}
