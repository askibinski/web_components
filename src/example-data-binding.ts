// Modern browsers now support importing modules.
// https://caniuse.com/#feat=es6-module
import CustomElement from "./custom-element.js";

class MyElement extends CustomElement {

  constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'open'});

    shadowRoot.innerHTML = `      
      <style>
        h1 {
          color: blue;
        }
        div {
          color: red;
        }
      </style>
      <h1 data-bind="title"></h1>
      <div data-bind="body"></div>
    `;
  }
  
}

window.customElements.define('my-element', MyElement);
const el = customElements.get('my-element');

// Create a new element and bind data to the view.
const myElement = new el(); 
myElement.setState({title: 'Hello World', body: 'Lorem ipsum'});

// Add the element to the page.
document.body.appendChild(myElement);
