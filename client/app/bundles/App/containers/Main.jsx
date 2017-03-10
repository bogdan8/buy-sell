import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Menu} from '../components';

import '../components/style/Auth.sass';

import * as productActions from '../actions/productActions';
import * as categoryActions from '../actions/categoryActions';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.props.actions.allApprovedProducts();
    this.props.actions.allCategories();
  };

  render() {
    return (
        <div className="body">
          <Menu/>
          {this.props.children}
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...productActions, ...categoryActions}, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Main);