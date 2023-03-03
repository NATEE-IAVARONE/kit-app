console.log('Hi from the content-script');

addElement();

function addElement() {
  const drawerEl = document.createElement('section');
  drawerEl.id = 'kit-side-drawer';

  const iframeEl = document.createElement('iframe');
  iframeEl.id = 'kit-iframe';
  iframeEl.src = 'http://localhost:5173/';

  drawerEl.appendChild(iframeEl);

  document.body.insertAdjacentElement('afterend', drawerEl);
}