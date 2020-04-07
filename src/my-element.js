import { LitElement, html } from 'lit-element';

// Extend the LitElement base class.
class MyElement extends LitElement {

  static get properties() {
    return { 
      title: String,
      body: String,
    };
  }

  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render(){
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return html`
      <!-- template content -->
      <h1>${this.title}</h1>
      <div>${this.body}</div>
    `;
  }
}

// Register the new element with the browser.
customElements.define('my-element', MyElement);

