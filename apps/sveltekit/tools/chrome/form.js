
export function schema() {
  
  const schem = {
    components: [
      {
        label: 'Darkmode',
        tableView: false,
        key: 'darkmode',
        type: 'checkbox',
        input: true,
        defaultValue: true,
      },
      {
        label: 'no-CORS',
        tableView: false,
        key: 'darkmode',
        type: 'checkbox',
        input: true,
        defaultValue: true,
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
