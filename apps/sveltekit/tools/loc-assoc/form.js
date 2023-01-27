
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
      },
      {
        type: 'button',
        key: 'submit',
        label: 'Submit'
      }
    ]
  };

  return schem;
}
