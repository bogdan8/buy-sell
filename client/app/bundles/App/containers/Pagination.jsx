import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Cell} from 'react-mdl';

import * as paginationActions from '../actions/paginationActions';

class Pagination extends Component {
  componentWillMount() {
    this.props.actions.fetchPagination(this.props.entity);
  }

  links() {
    var link = [];
    for (let i = 1; i <= this.props.pagination.total_objects; i++) {

      if (this.props.pagination.current_page == i) {
        var li = <li key={'page-' + i}
                     className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect active">
          <a href='#'>{i}</a>
        </li>;
      } else {
        var li = <li key={'page-' + i}
                     className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                     onClick={() => this.props.actions.fetchPagination(this.props.entity, i)}
        >
          <a href='#'>{i}</a>
        </li>
      }

      link.push(
        li
      );
    }
    return link;
  }

  render() {
    const {pagination, entity} = this.props;
    return (
      <Cell col={12} className="flex-center">
        <ul className="pagination flex-center">
          <li
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
            onClick={() => this.props.actions.fetchPagination(entity, pagination.first)}
          >
            <a href="#">Перша</a>
          </li>
          <li
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
            onClick={() => this.props.actions.fetchPagination(entity, pagination.prev)}
          >
            <a href="#">&lt;&lt;</a>
          </li>
          {this.links()}
          <li
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
            onClick={() => this.props.actions.fetchPagination(entity, pagination.next)}
          >
            <a href="#">&gt;&gt;</a>
          </li>
          <li
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
            onClick={() => this.props.actions.fetchPagination(entity, pagination.last)}
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
