class MyElement extends HTMLElement {

  constructor() {
    super();

    // Defines a Shadow root with mode: 'open'. This means it can be inspected in dev tools 
    // and interacted with, either by querying it, configuring any exposed CSS properties or 
    // listening to events it throws. It is also possible to define the Shadow root with mode: 
    // 'closed' which is not recommended since it will not allow the consumer of the component
    // to interact with it in any way; you won't even be able to listen to events it throws.
    const shadowRoot = this.attachShadow({mode: 'open'});

    // With shadow DOM, the CSS is now encapsulated and scoped to the custom element.
    shadowRoot.innerHTML = `      
      <style>
        h1 {
          color: #0000ff;
        }
      </style>
      <h1 id="title">asdasd</h1>
    `;

    this.container = shadowRoot.querySelector('#title');
  }
  
}

window.customElements.define('my-element', MyElement);
const el = customElements.get('my-element');
const myElement = new el();  // same as document.createElement('my-element');
myElement.container.innerHTML = 'Hello world!'
document.body.appendChild(myElement);
