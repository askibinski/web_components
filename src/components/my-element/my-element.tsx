import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-element',
})
export class MyElement {

  // Indicate that title should be a public property on the component.
  @Prop() mytitle: string;
  @Prop() body: string;

  render() {
    return (
      <div>
        <h1>{this.mytitle}</h1>
        <div>{this.body}</div>
      </div>
    );
  }
}