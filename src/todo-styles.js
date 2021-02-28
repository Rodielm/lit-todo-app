import { css } from 'lit-element/lit-element';

export const style = css`

.logo {
    width:50px;
    position:relative;
    top:50px;
}

.todo {
    text-align:center;
    border: 1px solid white;
    width: 80vw;
    height: auto;
    box-shadow: 2px 3px 15px rgba(0,0,0,0.5);
    background: #f6f6f6;
    padding-bottom: 60px;
    margin: 40px auto;
}

.todo-header {
    color: black;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    margin: 70px auto 30px;
}

.todo-add {
    color: white;
    font-size: 2em;
    width: 40px;
    height: 40px;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: #73ff73;
    border-radius: 10px;
    box-shadow: 1px 1px 1px #47a947;
    margin: 20px auto 0;
}


.todo-add:hover{
    box-shadow:none;
    margin-left: calc(auto + 1px);
}

.todo-container{
    width: 80%;
    margin: 0 auto;
}

.input{
    width: 60%;
    padding: 10px;
    font-size: 1em;
    margin: 10px auto;
    box-shadow: 1px 3px 20px 0px rgba(0,0,0,0.3)
}
`;