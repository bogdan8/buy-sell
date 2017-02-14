import React from 'react';
import {DataTable, TableHeader} from 'react-mdl';

export default function NewProductList(props) {
  return (
      <DataTable
          className="tablesaw tablesaw-stack mdl-js-data-table admin-table"
          data-tablesaw-mode="stack"
          rows={props.mappedProducts}
      >
        <TableHeader
            name="photo"
            tooltip="Фото"
            scope="col"
            data-tablesaw-priority="1"
            data-tablesaw-sortable-col
            width="15%"
            className="table-thead"
        >
          Фото
        </TableHeader>
        <TableHeader
            name="description"
            tooltip="Оголошення"
            scope="col"
            data-tablesaw-priority="2"
            data-tablesaw-sortable-col
            width="50%"
            className="table-thead"
        >
          Оголошення
        </TableHeader>
        <TableHeader
            name="contact"
            tooltip="Контакти"
            scope="col"
            data-tablesaw-priority="3"
            data-tablesaw-sortable-col
            width="15%"
            className="table-thead"
        >
          Контакти
        </TableHeader>
        <TableHeader
            name="price"
            tooltip="Ціна"
            scope="col"
            data-tablesaw-priority="4"
            data-tablesaw-sortable-col
            width="5%"
            className="table-thead"
        >
          Ціна
        </TableHeader>
        <TableHeader
            name="action"
            tooltip="Дії"
            scope="col"
            data-tablesaw-priority="5"
            data-tablesaw-sortable-col
            width="15%"
            className="table-thead"
        >
          Дії
        </TableHeader>
      </DataTable>
  );
}
