import React from 'react';
import {Cell, DataTable, TableHeader} from 'react-mdl';

export default function ProductList(props) {
  return (
      <Cell col={12}>
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
              width="60%"
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
              width="10%"
              className="table-thead"
          >
            Ціна
          </TableHeader>
        </DataTable>
      </Cell>
  )
}