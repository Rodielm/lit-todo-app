
import { css } from 'lit-element/lit-element';

export const style = css`
  .todo-item {
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .todo-item-text {
      width: 90%;
      background-color: white;
      border: 1px solid lightgrey;
      box-shadow: 1px 1px 1px lightgrey;
      padding: 12px;
      margin-right: 10px;
  }
  .todo-item-delete {
      width: 35px;
      /*padding: 5px;*/
      height: 35px;
      cursor: pointer;
      background: #ff7373;
      border-radius: 10px;
      box-shadow: 1px 1px 1px #c70202;
      color: white;
      font-size: 18px;
      margin-right: 5px;
  }
  .todo-item-delete:hover {
      box-shadow: none;
      margin-top: 1px;
      margin-left: 1px;
  }
`;