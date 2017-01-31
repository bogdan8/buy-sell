import React, {Component} from 'react';
import {connect} from 'react-redux';

import CreateCategories from './CreateCategories';
import EditCategories from './EditCategories';

class Categories extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    componentHandler.upgradeDom();
  };

  render() {
    return (
        <div className="mdl-grid">
          <div
              className="mdl-cell mdl-cell--8-col-desktop mdl-cell--2-offset-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--12-col">
                <div className="body-header-title">
                  <p>Таблиця Рубрик:</p>
                </div>
              </div>
              <EditCategories/>
              <CreateCategories />
            </div>
          </div>
        </div>
    )
  }
}
export default connect(
    state => ({
      categories: state.categories
    })
)(Categories);
