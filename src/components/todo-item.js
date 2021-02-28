import { LitElement, html } from "lit-element";



export class ToDoItem extends LitElement {
  /**
  * Declare the properties that will be
  * available in the binding system
  */
  static get properties() {
    return {
      item: { type: String },
      deleteItem: { type: Function },
    };
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="row pt-2">
        <div class="col">
          <span class="text-center">${this.item}</span>
        </div>
        <div class="col">
          <button type="button" class="btn btn-danger"
            @click=${this.deleteItem}>-
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('todo-item', ToDoItem);