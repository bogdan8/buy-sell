import React from 'react';
import {Link} from 'react-router';

export default function UserMenu() {
  return (
      <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
          htmlFor="demo-menu-lower-right">
        <li className="mdl-menu__item">
          <Link to="/sign_in" className="mdl-menu__item mdl-js-ripple-effect">Ввійти</Link>
        </li>
        <li className="mdl-menu__item">
          <Link to="/register" className="mdl-menu__item mdl-js-ripple-effect">Зареєструватись</Link>
        </li>
        <li className="mdl-menu__item">
          <Link to="/products" className="mdl-menu__item mdl-js-ripple-effect">Оголошення</Link>
        </li>
      </ul>
  );
}