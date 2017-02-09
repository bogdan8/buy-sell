import React, {Component} from 'react';
import {Cell} from 'react-mdl';

export default class Pagination extends Component {
  render() {
    return (
        <Cell col={12} className="flex-center">
          <ul className="pagination flex-center">
            <li className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
              <a href="#">Перша</a>
            </li>
            <li className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
              <a href="#">&lt;&lt;</a>
            </li>
            <li className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
              <a href="#">1</a>
            </li>
            <li className="active mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
              <a href="#">2</a>
            </li>
            <li className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
              <a href="#">3</a>
            </li>
            <li className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
              <a href="#">4</a>
            </li>
            <li className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
              <a href="#">5</a>
            </li>
            <li className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
              <a href="#">6</a>
            </li>
            <li className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
              <a href="#">&gt;&gt;</a>
            </li>
            <li className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
              <a href="#">Остання</a>
            </li>
          </ul>
        </Cell>
    )
  }
}