import { AppComponent } from "./app.component.js";

const TEMPLATE = `
    <form action="#" id="product-form">
        <div class="mdl-textfield mdl-js-textfield">
            <input class="mdl-textfield__input" type="text" id="input-name">
            <label class="mdl-textfield__label" for="input-name">Name...</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield">
            <input class="mdl-textfield__input" type="text" id="input-price">
            <label class="mdl-textfield__label" for="input-price">Price...</label>
        </div>
        <!-- Colored raised button -->
        <button id="submit-btn" type="button"
            class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            Button
        </button>
    </form>
`;

export class ProductForm extends AppComponent {

    display() {
        this.innerHTML = TEMPLATE;
        // material design lite animation
        componentHandler.upgradeElements(this);
    }

    bindElements() {
        this.inputName = this.querySelector('#input-name');
        this.inputPrice = this.querySelector('#input-price');
        this.btnSubmit = this.querySelector('#submit-btn');
    }

    bindEvents() {
        this.btnSubmit.addEventListener('click', () => {
            console.log(this.inputName.value);
        })
    }
}