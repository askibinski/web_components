import {html, render} from 'lit-html';

// Define a template
// NOTE: this is not yet a custom element. We would need lit-element for that.
const myTemplate = (data) => html`
  <h1>${data.title}</h1>
  <div>${data.body}</div>
`;

render(myTemplate({ title: `Hello world!`, body: `I'm a template!` }), document.body);