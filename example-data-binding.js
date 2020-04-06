import {html, render} from './node_modules/lit-html/lit-html.js';

// Define a template
// NOTE: this is not yet a custom element. We would need lit-element for that.
const myTemplate = (data) => html`
  <h1>${data.title}</h1>
  <div>${data.body}</div>
`;

// Render the template to the document
render(myTemplate({ title: 'Hello world', body: 'Lorem ipsum'}), document.body);