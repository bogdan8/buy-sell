import React from 'react';
import {Link} from 'react-router';

import Register from './Register';

import './style/Header.sass'

export default function Menu() {
  return (
      <div>
        <div className="header flex-center">
          <div className="header-title">
            <p>Фіртка</p>
          </div>
        </div>
        <div className="header-nav">
          <button id="demo-menu-lower-right" className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
            <i className="fa fa-user" aria-hidden="true"/>
          </button>

          <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
              htmlFor="demo-menu-lower-right">
            <li className="mdl-menu__item">
              <Link to="/sign_in" className="mdl-menu__item mdl-js-ripple-effect">Ввійти</Link>
            </li>
            <li className="mdl-menu__item">
              <Link to="/register" className="mdl-menu__item mdl-js-ripple-effect">Зареєструватись</Link>
            </li>
            <li className="mdl-menu__item">
              <Link to="/admin/user" className="mdl-menu__item mdl-js-ripple-effect">Таблиця користувачів</Link>
            </li>
            <li className="mdl-menu__item">
              <Link to="/admin/categories" className="mdl-menu__item mdl-js-ripple-effect">Таблиця рубрик</Link>
            </li>
            <li className="mdl-menu__item">
              <Link to="/products" className="mdl-menu__item mdl-js-ripple-effect">Оголошення</Link>
            </li>
            <li className="mdl-menu__item">
              <Link to="/admin/new_products" className="mdl-menu__item mdl-js-ripple-effect">Нові оголошення</Link>
            </li>
          </ul>
        </div>
      </div>
  );
}