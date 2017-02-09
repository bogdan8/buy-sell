import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

import {CreateCategories, EditCategories} from '../common';

export default class Categories extends Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  };

  render() {
    return (
        <Grid>
          <Cell col={8} offsetDesktop={2} tablet={12} phone={12}>
            <Grid>
              <Cell col={12}>
                <div className="body-header-title">
                  <p>Таблиця Рубрик:</p>
                </div>
              </Cell>
              <EditCategories/>
              <CreateCategories />
            </Grid>
          </Cell>
        </Grid>
    )
  }
}
