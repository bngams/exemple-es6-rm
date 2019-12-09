// export <=> public
export class AppComponent extends HTMLElement {

    // call parent constructor
    constructor() {
        super();
    }

    // connectedCallback (called when markup displayed)
    connectedCallback() {
        this.display();
        this.bindElements();
        this.bindEvents();
        this.onReady();
    }

    // cycle de vie - lifecycle hooks
    display() { }
    bindElements() { }
    bindEvents() { }
    onReady() { }
}