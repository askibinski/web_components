class MyElement extends HTMLElement {

  constructor() {
    super();

    // Note: we are not using shadow DOM here so this style will become global for all H1.
    this.innerHTML = `
      <style>
        h1 {
          color: #0000ff;
        }
      </style>
      <h1 id="title"></h1>
    ` 
  }
  
}

window.customElements.define('my-element', MyElement);
const el = customElements.get('my-element');
const myElement = new el();  // same as document.createElement('my-element');
myElement.querySelector('#title').innerHTML = 'Hello world!';
document.body.appendChild(myElement);
