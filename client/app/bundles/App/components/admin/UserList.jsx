import React from 'react';
import {Grid, Cell, DataTable, TableHeader} from 'react-mdl';

import {Pagination} from '../';

export default function UserList(props) {
  return (
      <Grid>
        <Cell col={8} offsetDesktop={2} tablet={12} phone={12}>
          <Grid>
            <Cell col={12}>
              <div className="body-header-title">
                <p>Таблиця користувачів:</p>
              </div>
            </Cell>
            <Cell col={12}>
              <DataTable
                  className="tablesaw tablesaw-stack mdl-js-data-table admin-table"
                  data-tablesaw-mode="stack"
                  rows={props.mappedUsers}
              >
                <TableHeader
                    name="email"
                    tooltip="Електронна Адреса"
                    scope="col"
                    data-tablesaw-priority="1"
                    data-tablesaw-sortable-col
                    width="45%"
                    className="table-thead"
                >
                  Електронна Адреса
                </TableHeader>
                <TableHeader
                    name="contact"
                    tooltip="Контактні дані"
                    scope="col"
                    data-tablesaw-priority="2"
                    data-tablesaw-sortable-col
                    width="40%"
                    className="table-thead"
                >
                  Контактні дані
                </TableHeader>
                <TableHeader
                    name="action"
                    tooltip="Дії"
                    scope="col"
                    data-tablesaw-priority="3"
                    data-tablesaw-sortable-col
                    width="200px"
                    className="table-thead"
                >
                  Дії
                </TableHeader>
              </DataTable>
            </Cell>
            <Pagination/>
          </Grid>
        </Cell>
      </Grid>
  );
}
