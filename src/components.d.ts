/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyElement {
        "body": string;
        "mytitle": string;
    }
}
declare global {
    interface HTMLMyElementElement extends Components.MyElement, HTMLStencilElement {
    }
    var HTMLMyElementElement: {
        prototype: HTMLMyElementElement;
        new (): HTMLMyElementElement;
    };
    interface HTMLElementTagNameMap {
        "my-element": HTMLMyElementElement;
    }
}
declare namespace LocalJSX {
    interface MyElement {
        "body"?: string;
        "mytitle"?: string;
    }
    interface IntrinsicElements {
        "my-element": MyElement;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-element": LocalJSX.MyElement & JSXBase.HTMLAttributes<HTMLMyElementElement>;
        }
    }
}