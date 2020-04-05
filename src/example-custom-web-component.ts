class MyElement extends HTMLElement {
  state: {};
  container: any;

  // Defines a Shadow root with mode: 'open'. This means it can be inspected in dev tools 
  // and interacted with, either by querying it, configuring any exposed CSS properties or 
  // listening to events it throws. It is also possible to define the Shadow root with mode: 
  // 'closed' which is not recommended since it will not allow the consumer of the component
  // to interact with it in any way; you won't even be able to listen to events it throws.
  constructor() {
    // Always call super first in constructor
    super();

    // Used for data binding.
    this.state = {};

    const shadowRoot = this.attachShadow({ mode: 'open' });

    // We could also use a <template> element. 
    shadowRoot.innerHTML = `      
      <style>
        :host {
          display: block;
        }
        :host([disabled]) {
          opacity: 0.5;
        }
      </style>
      <div id="container"></div>
    `;

    this.container = shadowRoot.querySelector('#container');
  }

  // Analogue to Reacts componentDidMount.
  connectedCallback() {
    // Here the element has been inserted into the DOM.
    console.log('Ready for duty!');
  }

  // As a performance optimization, only attributes listed here will be observed for changes.
  static get observedAttributes() {
    return ['foo', 'bar', 'disabled'];
  }

  // Whenever the value of the attribute changes attributeChangedCallback will be called with 
  // the name of the attribute, its current value and its new value.
  // Reminder: the primary purpose of attributes on web components is initial configuration. 
  attributeChangedCallback(attr, oldVal, newVal) {
    switch (attr) {
      case 'foo':
        // Do something with 'foo' attribute.
        console.log('foo change!');
        break;

      case 'bar':
        // Do something with 'bar' attribute.
        console.log('bar change!');
        break;

      case 'disabled':
        // Do something with 'disabled' attribute.
        console.log('disabled change!');
        break;
    }
  }

  // Setting the property myElement.disabled = TRUE will also set the attribute.
  set disabled(isDisabled) {
    if (isDisabled) {
      this.setAttribute('disabled', '');
    }
    else {
      this.removeAttribute('disabled');
    }
  }

  // Getter e.g. myElement.disabled; will return a boolean.
  get disabled() {
    return this.hasAttribute('disabled');
  }

  // Define public API methods which can be called, try running: myElement.doSomething().
  // Note: You can't do that with React!
  doSomething() {
    console.log('Doing something!');
  }

}

// You can use a web component before it has been registered with customElements.define(). 
// When the element is present in the DOM or inserted into it and it has not (yet) been registered it 
// will be an instance of HTMLUnknownElement. 
// The browser will treat any HTML element it does not know as such and you can interact with it just 
// like any other element, besides that it won't have any methods or default styling.
window.customElements.define('my-element', MyElement);
const el = customElements.get('my-element');
const myElement = new el();  // same as document.createElement('my-element');
myElement.container.innerHTML = 'Hello world!'
document.body.appendChild(myElement);
