import React, {Component} from 'react';
import {DataTable, TableHeader} from 'react-mdl';

export default function CategoriesList(props) {
  return (
      <DataTable
          className="tablesaw tablesaw-stack mdl-js-data-table admin-table"
          data-tablesaw-mode="stack"
          rows={props.mappedCategories}
      >
        <TableHeader
            name="name"
            tooltip="Назва рубрики"
            scope="col"
            data-tablesaw-priority="1"
            data-tablesaw-sortable-col
            width="90%"
            className="table-thead"
        >
          Назва
        </TableHeader>
        <TableHeader
            name="action"
            tooltip="Дії над рубрикою"
            scope="col"
            data-tablesaw-priority="2"
            data-tablesaw-sortable-col
            width="10%"
            className="table-thead"
        >
          Дії
        </TableHeader>
      </DataTable>
  );
}
