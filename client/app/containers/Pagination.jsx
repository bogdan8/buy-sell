import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Cell} from 'react-mdl';

import * as paginationActions from '../actions/paginationActions';

class Pagination extends Component {
  componentWillMount() {
    this.props.actions.fetchPagination(this.props.entity, 1, this.props.query);
  }

  render() {
    const {pagination, entity, query} = this.props;
    const windowSize = 2;

    var pageWindow = [];
    var i = pagination.current_page - windowSize;

    while (i < pagination.current_page) {
      if (i >= 1) {
        pageWindow.push(i);
      }
      i++;
    }

    pageWindow.push(pagination.current_page);

    var i = pagination.current_page + 1;
    while ((i <= (pagination.current_page + windowSize)) && (i <= pagination.total_pages)) {
      pageWindow.push(i);
      i++;
    }

    if (pagination.current_page > windowSize + 1) {
      var leftEllipsis = <li className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">&hellip;</li>
    } else {
      var leftEllipsis = ''
    }

    var currentWindow = [];

    pageWindow.map(function (page) {
      if (pagination.current_page == page) {
        var link = <li key={'page-' + page}
                       className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect active">
          <a href='#'>{page}</a>
        </li>;
      } else {
        var link = <li key={'page-' + page}
                       className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                       onClick={() => this.props.actions.fetchPagination(entity, page, query)}
        >
          <a href='#'>{page}</a>
        </li>
      }

      currentWindow.push(
        link
      )
    }, this);

    if (pagination.current_page + windowSize < pagination.total_pages) {
      var rightEllipsis = <li className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">&hellip;</li>
    } else {
      var rightEllipsis = ''
    }
    return (
      <Cell col={12} className="flex-center">
        <ul className="pagination flex-center">
          <li
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
            onClick={() => this.props.actions.fetchPagination(entity, pagination.first, query)}
          >
            <a href="#">Перша</a>
          </li>
          <li
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
            onClick={() => this.props.actions.fetchPagination(entity, pagination.prev, query)}
          >
            <a href="#">&lt;&lt;</a>
          </li>
          {leftEllipsis}
          {currentWindow}
          {rightEllipsis}
          <li
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
            onClick={() => this.props.actions.fetchPagination(entity, (pagination.next != undefined && pagination.total_pages != 0)? pagination.next : pagination.current_page, query)}
          >
            <a href="#">&gt;&gt;</a>
          </li>
          <li
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
            onClick={() => this.props.actions.fetchPagination(entity, pagination.last != undefined ? pagination.last : pagination.current_page, query)}
          >
            <a href="#">Остання</a>
          </li>
        </ul>
      </Cell>
    )
  }
}


function mapStateToProps(state) {
  return {
    pagination: state.pagination
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(paginationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
