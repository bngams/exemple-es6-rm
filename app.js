import { ProductForm } from "./assets/js/product-form.component.js";

class App {
    constructor() {
        this.init();
    }

    init() {
        // create custom components
        customElements.define('product-form', ProductForm);
    }
}

// starting
new App();