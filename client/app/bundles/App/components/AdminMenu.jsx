import React from 'react';
import {Link} from 'react-router';
import {Menu, MenuItem} from 'react-mdl';

export default function AdminMenu() {
  return (
      <Menu
          align="right"
          target="demo-menu-lower-right"
          ripple
      >
        <MenuItem>
          <Link to="/sign_in">
            Ввійти
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/register">
            Зареєструватись
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/products" >
            Оголошення
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/admin/user">
            Таблиця користувачів
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/admin/categories">
            Таблиця рубрик
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/admin/new_products">
            Нові оголошення
          </Link>
        </MenuItem>
      </Menu>
  );
}