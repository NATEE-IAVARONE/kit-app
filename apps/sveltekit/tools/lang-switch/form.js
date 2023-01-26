
export const schema = {
  components: [
  	{
      label: 'Keyboard language',
      widget: 'html5',
      tableView: true,
      data: {
        values: [
          {
            label: 'Italian',
            value: 'it-IT'
          },
          {
            label: 'English',
            value: 'en-US'
          }
        ]
      },
      key: 'kbLang',
      type: 'select',
      input: true
    },
    {
    	type: 'button',
      key: 'submit',
      label: 'Submit'
    }
  ]
};
