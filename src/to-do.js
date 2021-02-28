import { LitElement, html } from "lit-element";
// import Modal from 'bootstrap/js/dist/modal';

import './components/todo-item';


export class Todo extends LitElement {

    /**
    * Declare the properties that will be
    * available in the binding system
    */
    static get properties() {
        return {
            list: { type: Array },
            todo: { type: String }
        };
    }

    createRenderRoot() {
        return this;
    }

    constructor() {
        super();
        this.list = [
            this.todoItem('write my cv'),
            this.todoItem('look a job')
        ];
        this.todo = '';
    }

    todoItem(todo) {
        return { todo };
    }

    createNewtodoItem() {
        console.log("Prueba del objeto")
        this.list = [
            ...this.list,
            this.todoItem(this.todo)
        ];
        this.todo = '';
        console.log(this.list)
    }

    handleKeyPress(e) {
        if (e.target.value !== '')
            if (e.key === 'Enter')
                this.createNewtodoItem();
    }

    handleInput(e) {
        this.todo = e.target.value;
    }

    deleteItem(item) {
        this.list = this.list.filter((todo, index) => index !== item);
    }

    render() {
        return html`
        <div class="card" style="width: 35rem;">
            <div class="card-body">
            <h1 class="card-title text-center">Litelement To Do</h1>
            <div class="container">  
                    ${this.list.map((item, key) => {
                    return html`
                    <todo-item
                        item=${item.todo}
                        .deleteItem=${this.deleteItem.bind(this, key)}
                    ></todo-item>
                    `;
                    }
                )}
            </div>

            <div class="container pt-2">
                <div class="input-group mb-3">
                    <input 
                        type="text"
                        class="form-control"
                        .value=${this.todo}
                        @input=${this.handleInput}
                        @keypress=${this.handleKeyPress}
                        />
                    <button 
                    type="button"
                    class="btn btn-outline-secondary"
                    @click=${this.createNewtodoItem}
                    >+</button>    
                </div>
            </div>
            </div>
        </div>
        `;
    }
}

customElements.define('to-do', Todo);